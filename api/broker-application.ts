import { Resend } from 'resend';
import { z } from 'zod';
import type { IncomingMessage, ServerResponse } from 'http';

interface VercelRequest extends IncomingMessage {
  body: any;
  query: { [key: string]: string | string[] };
}

interface VercelResponse extends ServerResponse {
  status: (code: number) => VercelResponse;
  json: (data: any) => void;
}

const resend = new Resend(process.env.RESEND_API_KEY);

const submittedEmails = new Set<string>();

const brokerApplicationSchema = z.object({
  fullName: z.string().min(1, "Full name is required").max(200),
  agencyName: z.string().min(1, "Agency name is required").max(200),
  email: z.string().min(1, "Email is required").email("Please enter a valid email").max(255),
  phone: z.string().optional().or(z.literal("")),
  marketSegments: z.array(z.string()).min(1, "Please select at least one market segment"),
  otherSegment: z.string().optional(),
  premiumVolume: z.enum(["under-500k", "500k-2m", "2m-5m", "5m-10m", "over-10m"], {
    required_error: "Please select your estimated premium volume",
  }),
  partnershipGoals: z.string().min(1, "Please tell us your partnership goals").max(5000),
  website: z.string().max(0, "").optional(),
  formLoadedAt: z.number().optional(),
  turnstileToken: z.string().optional(),
});

const PREMIUM_VOLUME_LABELS: Record<string, string> = {
  "under-500k": "Under $500K",
  "500k-2m": "$500K - $2M",
  "2m-5m": "$2M - $5M",
  "5m-10m": "$5M - $10M",
  "over-10m": "Over $10M",
};

function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.error("TURNSTILE_SECRET_KEY not configured");
    return false;
  }

  if (!token || token.length === 0) {
    console.error("No turnstile token provided");
    return false;
  }

  try {
    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
        }),
      }
    );
    
    const data = await response.json() as { success: boolean; 'error-codes'?: string[] };
    if (!data.success) {
      console.error("Turnstile verification failed:", data['error-codes'] || "unknown error");
      return false;
    }
    return true;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return res.status(503).json({ error: "Email service is not configured" });
    }

    const parseResult = brokerApplicationSchema.safeParse(req.body);
    if (!parseResult.success) {
      const errors = parseResult.error.errors.map(e => e.message).join(", ");
      return res.status(400).json({ error: errors });
    }

    const { 
      fullName, agencyName, email, phone, 
      marketSegments, otherSegment, premiumVolume, 
      partnershipGoals, website, formLoadedAt, turnstileToken 
    } = parseResult.data;

    const normalizedEmail = email ? email.toLowerCase().trim() : "";
    if (normalizedEmail && submittedEmails.has(normalizedEmail)) {
      return res.status(400).json({ error: "An application with this email has already been submitted." });
    }

    if (website && website.length > 0) {
      console.log("Bot detected: honeypot field filled");
      return res.status(200).json({ success: true, messageId: "blocked" });
    }

    if (formLoadedAt) {
      const timeTaken = Date.now() - formLoadedAt;
      if (timeTaken < 3000) {
        console.log("Bot detected: form submitted too quickly", timeTaken, "ms");
        return res.status(200).json({ success: true, messageId: "blocked" });
      }
    }

    if (turnstileToken) {
      const isCaptchaValid = await verifyTurnstileToken(turnstileToken);
      if (!isCaptchaValid) {
        return res.status(400).json({ error: "Captcha verification failed. Please try again." });
      }
    }

    const safeFullName = escapeHtml(fullName);
    const safeAgencyName = escapeHtml(agencyName);
    const safeEmail = email ? escapeHtml(email) : "Not provided";
    const safePhone = phone ? escapeHtml(phone) : "Not provided";
    const safeOtherSegment = otherSegment ? escapeHtml(otherSegment) : "";
    const safePartnershipGoals = escapeHtml(partnershipGoals);
    const premiumVolumeLabel = PREMIUM_VOLUME_LABELS[premiumVolume] || premiumVolume;

    const segmentsList = marketSegments.map(s => `• ${escapeHtml(s)}`).join("<br>");

    const { data, error } = await resend.emails.send({
      from: "Matterhorn Broker Application <onboarding@resend.dev>",
      to: ["ak@myspark.cc"],
      subject: `Broker Application: ${safeFullName} from ${safeAgencyName}`,
      html: `
        <h2>New Broker Application</h2>
        
        <h3>Broker Information</h3>
        <p><strong>Full Name:</strong> ${safeFullName}</p>
        <p><strong>Agency/Brokerage:</strong> ${safeAgencyName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        
        <h3>Market Focus</h3>
        <p><strong>Segments Served:</strong></p>
        <p>${segmentsList}</p>
        ${safeOtherSegment ? `<p><strong>Other:</strong> ${safeOtherSegment}</p>` : ""}
        
        <h3>Business Potential</h3>
        <p><strong>Estimated Annual Premium Volume:</strong> ${premiumVolumeLabel}</p>
        
        <h3>Partnership Goals</h3>
        <p>${safePartnershipGoals.replace(/\n/g, "<br>")}</p>
      `,
      text: `New Broker Application

Broker Information
------------------
Full Name: ${fullName}
Agency/Brokerage: ${agencyName}
Email: ${email || "Not provided"}
Phone: ${phone || "Not provided"}

Market Focus
------------
Segments Served:
${marketSegments.map(s => `- ${s}`).join("\n")}
${otherSegment ? `Other: ${otherSegment}` : ""}

Business Potential
------------------
Estimated Annual Premium Volume: ${premiumVolumeLabel}

Partnership Goals
-----------------
${partnershipGoals}`,
      replyTo: email || undefined,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error, null, 2));
      console.log("=== BROKER APPLICATION (email failed) ===");
      console.log("Full Name:", fullName);
      console.log("Agency:", agencyName);
      console.log("Email:", email);
      console.log("Phone:", phone || "Not provided");
      console.log("Segments:", marketSegments.join(", "));
      console.log("Premium Volume:", premiumVolumeLabel);
      console.log("Goals:", partnershipGoals);
      console.log("==========================================");
      submittedEmails.add(normalizedEmail);
      return res.status(200).json({ success: true, messageId: "logged" });
    }

    submittedEmails.add(normalizedEmail);
    console.log("Broker application sent successfully:", data?.id);
    return res.status(200).json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error("Broker application error:", error);
    return res.status(500).json({ error: "An unexpected error occurred. Please try again." });
  }
}
