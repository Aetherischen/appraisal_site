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

    // Create transporter for GoDaddy/Microsoft Exchange
    const transporter = nodemailer.createTransport({
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
    });

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
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━���━━━━━━━━━━━━━━━━━━
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
    res.status(500).json({
      success: false,
      message: "Failed to send quote request. Please try again.",
    });
  }
};
