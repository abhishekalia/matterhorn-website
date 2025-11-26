import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, isBroker, phone, email, message } = req.body;

      // Validate required fields
      if (!firstName || !lastName || !isBroker || !phone || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }

      // Send email using Resend
      const { data, error } = await resend.emails.send({
        from: "Matterhorn Contact Form <onboarding@resend.dev>",
        to: ["support@matterhornprotects.com"],
        subject: `Contact Form Submission from ${firstName} ${lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Is a Broker:</strong> ${isBroker === "yes" ? "Yes" : "No"}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
        replyTo: email,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ error: "Failed to send email" });
      }

      return res.status(200).json({ success: true, messageId: data?.id });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
