import { Request, Response } from "express";
import nodemailer from "nodemailer";

interface EmailRequest {
  name: string;
  email: string;
  phone: string;
  propertyAddress: string;
  comments: string;
}

export const handleSendEmail = async (req: Request, res: Response) => {
  try {
    console.log("Email request received:", req.body);
    console.log("Environment check:", {
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASS: !!process.env.SMTP_PASS,
    });

    const { name, email, phone, propertyAddress, comments }: EmailRequest =
      req.body;

    // Validate required fields
    if (!name || !email || !phone || !propertyAddress) {
      return res.status(400).json({
        success: false,
        message:
          "Missing required fields: name, email, phone, and property address are required.",
      });
    }

    // Validate environment variables
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      console.error("Missing SMTP environment variables");
      return res.status(500).json({
        success: false,
        message: "SMTP configuration incomplete",
        debug: {
          hasHost: !!process.env.SMTP_HOST,
          hasUser: !!process.env.SMTP_USER,
          hasPass: !!process.env.SMTP_PASS,
        },
      });
    }

    // Create transporter for GoDaddy/Microsoft Exchange
    const transporterConfig = {
      host: process.env.SMTP_HOST || "smtpout.secureserver.net",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
    };

    console.log("Creating transporter with config:", {
      ...transporterConfig,
      auth: { ...transporterConfig.auth, pass: "***hidden***" },
    });

    const transporter = nodemailer.createTransport(transporterConfig);

    // Test connection before sending
    console.log("Testing SMTP connection...");
    await transporter.verify();

    // Email content
    const subject = `[INQUIRY] Quote Request - ${propertyAddress}`;
    const emailBody = `
New Quote Request from CSR Website

Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${name}
Email: ${email}
Phone: ${phone}

Property Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Address: ${propertyAddress}

Additional Comments:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${comments || "No additional comments provided."}

Request Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    })}
Source: CSR Realty Appraisers Website
    `.trim();

    // Send email
    await transporter.sendMail({
      from: `"CSR Website" <${process.env.SMTP_USER}>`,
      to: "al@csrappraisals.com",
      subject: subject,
      text: emailBody,
    });

    console.log(
      `Quote request sent successfully for ${name} - ${propertyAddress}`,
    );

    res.status(200).json({
      success: true,
      message: "Quote request sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);

    // More detailed error information
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Detailed error:", {
      message: errorMessage,
      stack: error instanceof Error ? error.stack : undefined,
      config: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
        hasPassword: !!process.env.SMTP_PASS,
      },
    });

    res.status(500).json({
      success: false,
      message: "Failed to send quote request. Please try again.",
      debug: {
        error: errorMessage,
        config: {
          host: process.env.SMTP_HOST || "Not set",
          port: process.env.SMTP_PORT || "Not set",
          user: process.env.SMTP_USER || "Not set",
          hasPassword: !!process.env.SMTP_PASS,
        },
      },
    });
  }
};
