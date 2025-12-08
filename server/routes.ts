import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from "resend";
import rateLimit from "express-rate-limit";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

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

      const { firstName, lastName, isBroker, phone, email, message, website, formLoadedAt } = parseResult.data;

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

      const safeFirstName = escapeHtml(firstName);
      const safeLastName = escapeHtml(lastName);
      const safePhone = escapeHtml(phone);
      const safeEmail = escapeHtml(email);
      const safeMessage = escapeHtml(message);

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

  const httpServer = createServer(app);

  return httpServer;
}
