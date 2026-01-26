import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from "resend";
import rateLimit from "express-rate-limit";
import { z } from "zod";

// Initialize Resend only if API key is available
let resend: Resend | null = null;

// Track submitted email addresses to prevent duplicates
const submittedBrokerEmails = new Set<string>();

// Log if Resend API key is configured
if (!process.env.RESEND_API_KEY) {
  console.warn("Warning: RESEND_API_KEY is not configured. Email sending will fail.");
} else {
  resend = new Resend(process.env.RESEND_API_KEY);
  console.log("Resend API key configured (length:", process.env.RESEND_API_KEY.length, ")");
}

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  isBroker: z.enum(["yes", "no"], {
    required_error: "Please select if you are a broker",
  }),
  phone: z.string().min(1, "Phone number is required").max(30),
  email: z.string().email("Please enter a valid email address").max(255),
  message: z.string().min(1, "Message is required").max(5000),
  // Honeypot field - should always be empty for real users
  website: z.string().max(0, "").optional(),
  // Timestamp when form was loaded - must be at least 3 seconds ago
  formLoadedAt: z.number().optional(),
  // Turnstile captcha token
  turnstileToken: z.string().optional(),
});

// New broker application form schema
const brokerApplicationSchema = z.object({
  // Broker Information
  fullName: z.string().min(1, "Full name is required").max(100),
  agencyName: z.string().min(1, "Agency name is required").max(200),
  email: z.string().email("Please enter a valid email address").max(255).optional().or(z.literal("")),
  phone: z.string().max(30).optional().or(z.literal("")),
  
  // Market Focus
  marketSegments: z.array(z.string()).min(1, "Please select at least one market segment"),
  otherSegment: z.string().max(200).optional(),
  
  // Business Potential
  premiumVolume: z.enum(["under-500k", "500k-2m", "2m-5m", "5m-10m", "over-10m"], {
    required_error: "Please select your estimated premium volume",
  }),
  
  // Partnership Goals
  partnershipGoals: z.string().min(1, "Please tell us your partnership goals").max(5000),
  
  // Anti-bot fields
  website: z.string().max(0, "").optional(),
  formLoadedAt: z.number().optional(),
  turnstileToken: z.string().optional(),
});

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

// Verify Cloudflare Turnstile token
async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.error("TURNSTILE_SECRET_KEY is not configured");
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
    
    const data = await response.json() as { success: boolean };
    return data.success;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}

const PREMIUM_VOLUME_LABELS: Record<string, string> = {
  "under-500k": "Under $500K",
  "500k-2m": "$500K - $2M",
  "2m-5m": "$2M - $5M",
  "5m-10m": "$5M - $10M",
  "over-10m": "Over $10M",
};

export async function registerRoutes(app: Express): Promise<Server> {
  const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { error: "Too many requests. Please try again later." },
    standardHeaders: true,
    legacyHeaders: false,
  });

  app.post("/api/contact", contactLimiter, async (req, res) => {
    try {
      if (!process.env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY is not configured");
        return res.status(503).json({ error: "Email service is not configured" });
      }

      const parseResult = contactFormSchema.safeParse(req.body);
      if (!parseResult.success) {
        const errors = parseResult.error.errors.map(e => e.message).join(", ");
        return res.status(400).json({ error: errors });
      }

      const { firstName, lastName, isBroker, phone, email, message, website, formLoadedAt, turnstileToken } = parseResult.data;

      // Bot detection: honeypot field should be empty
      if (website && website.length > 0) {
        console.log("Bot detected: honeypot field filled");
        // Return success to not alert bots, but don't actually send
        return res.status(200).json({ success: true, messageId: "blocked" });
      }

      // Bot detection: form should take at least 3 seconds to fill
      if (formLoadedAt) {
        const timeTaken = Date.now() - formLoadedAt;
        if (timeTaken < 3000) {
          console.log("Bot detected: form submitted too quickly", timeTaken, "ms");
          return res.status(200).json({ success: true, messageId: "blocked" });
        }
      }

      // Verify Turnstile captcha if provided
      if (turnstileToken) {
        const isCaptchaValid = await verifyTurnstileToken(turnstileToken);
        if (!isCaptchaValid) {
          return res.status(400).json({ error: "Captcha verification failed. Please try again." });
        }
      }

      const safeFirstName = escapeHtml(firstName);
      const safeLastName = escapeHtml(lastName);
      const safePhone = escapeHtml(phone);
      const safeEmail = escapeHtml(email);
      const safeMessage = escapeHtml(message);

      if (!resend) {
        return res.status(500).json({ error: "Email service is not configured. Please try again later." });
      }

      const { data, error } = await resend.emails.send({
        from: "Matterhorn Contact Form <onboarding@resend.dev>",
        to: ["ak@myspark.cc"],
        subject: `Contact Form Submission from ${safeFirstName} ${safeLastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
          <p><strong>Is a Broker:</strong> ${isBroker === "yes" ? "Yes" : "No"}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <h3>Message:</h3>
          <p>${safeMessage.replace(/\n/g, "<br>")}</p>
        `,
        text: `New Contact Form Submission

Name: ${firstName} ${lastName}
Is a Broker: ${isBroker === "yes" ? "Yes" : "No"}
Phone: ${phone}
Email: ${email}

Message:
${message}`,
        replyTo: email,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ error: "Failed to send email. Please try again." });
      }

      return res.status(200).json({ success: true, messageId: data?.id });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ error: "An unexpected error occurred. Please try again." });
    }
  });

  // Broker Application Form endpoint
  app.post("/api/broker-application", contactLimiter, async (req, res) => {
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

      // Check for duplicate submissions (email is required in schema)
      const normalizedEmail = email ? email.toLowerCase().trim() : "";
      if (normalizedEmail && submittedBrokerEmails.has(normalizedEmail)) {
        return res.status(400).json({ error: "An application with this email has already been submitted." });
      }

      // Bot detection: honeypot field should be empty
      if (website && website.length > 0) {
        console.log("Bot detected: honeypot field filled");
        return res.status(200).json({ success: true, messageId: "blocked" });
      }

      // Bot detection: form should take at least 3 seconds to fill
      if (formLoadedAt) {
        const timeTaken = Date.now() - formLoadedAt;
        if (timeTaken < 3000) {
          console.log("Bot detected: form submitted too quickly", timeTaken, "ms");
          return res.status(200).json({ success: true, messageId: "blocked" });
        }
      }

      // Verify Turnstile captcha if provided
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

      if (!resend) {
        return res.status(500).json({ error: "Email service is not configured. Please try again later." });
      }

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
        // Log the submission anyway so it's not lost
        console.log("=== BROKER APPLICATION (email failed) ===");
        console.log("Full Name:", fullName);
        console.log("Agency:", agencyName);
        console.log("Email:", email);
        console.log("Phone:", phone || "Not provided");
        console.log("Segments:", marketSegments.join(", "));
        console.log("Premium Volume:", premiumVolumeLabel);
        console.log("Goals:", partnershipGoals);
        console.log("==========================================");
        // Mark email as submitted even if email failed
        submittedBrokerEmails.add(normalizedEmail);
        // Return success anyway since we captured the data
        return res.status(200).json({ success: true, messageId: "logged" });
      }

      // Mark email as submitted
      submittedBrokerEmails.add(normalizedEmail);
      console.log("Broker application sent successfully:", data?.id);
      return res.status(200).json({ success: true, messageId: data?.id });
    } catch (error) {
      console.error("Broker application error:", error);
      return res.status(500).json({ error: "An unexpected error occurred. Please try again." });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
