import { Request, Response } from "express";
import nodemailer from "nodemailer";

interface QuoteRequestBody {
  name: string;
  email: string;
  phone: string;
  propertyAddress: string;
  comments: string;
  subject: string;
  timestamp: string;
}

export const handleSendQuoteRequest = async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      phone,
      propertyAddress,
      comments,
      subject,
      timestamp,
    }: QuoteRequestBody = req.body;

    // Validate required fields
    if (!name || !email || !phone || !propertyAddress) {
      return res.status(400).json({
        success: false,
        message:
          "Missing required fields: name, email, phone, and property address are required.",
      });
    }

    // Create transporter using SMTP (you'll need to configure this with your email provider)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || "al@csrappraisals.com",
        pass: process.env.SMTP_PASS, // App password or SMTP password
      },
    });

    // Format email content
    const emailBody = `
New Quote Request Received

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
Submitted: ${new Date(timestamp).toLocaleString("en-US", {
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

    // Email options
    const mailOptions = {
      from: `"CSR Website Inquiries" <${process.env.SMTP_USER || "al@csrappraisals.com"}>`,
      to: "al@csrappraisals.com",
      subject: subject,
      text: emailBody,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #566972; border-bottom: 2px solid #566972; padding-bottom: 10px;">
            New Quote Request Received
          </h2>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #566972; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #566972; margin-top: 0;">Property Details</h3>
            <p><strong>Address:</strong> ${propertyAddress}</p>
          </div>

          ${
            comments
              ? `
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #566972; margin-top: 0;">Additional Comments</h3>
            <p>${comments.replace(/\n/g, "<br>")}</p>
          </div>
          `
              : ""
          }

          <div style="background-color: #e9ecef; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px; color: #6c757d;">
              <strong>Submitted:</strong> ${new Date(timestamp).toLocaleString(
                "en-US",
                {
                  timeZone: "America/New_York",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZoneName: "short",
                },
              )}<br>
              <strong>Source:</strong> CSR Realty Appraisers Website
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Log successful submission
    console.log(
      `Quote request sent successfully for ${name} - ${propertyAddress}`,
    );

    res.status(200).json({
      success: true,
      message: "Quote request sent successfully",
    });
  } catch (error) {
    console.error("Error sending quote request email:", error);
    res.status(500).json({
      success: false,
      message:
        "Failed to send quote request. Please try again or contact us directly.",
    });
  }
};
