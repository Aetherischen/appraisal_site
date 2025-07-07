import { Request, Response } from "express";
import nodemailer from "nodemailer";

export const handleTestEmail = async (req: Request, res: Response) => {
  try {
    console.log("Testing email configuration...");
    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("SMTP_PASS exists:", !!process.env.SMTP_PASS);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Test connection
    await transporter.verify();

    // Send test email
    await transporter.sendMail({
      from: `"CSR Test" <${process.env.SMTP_USER}>`,
      to: "al@csrappraisals.com",
      subject: "SMTP Configuration Test - Success!",
      text: `
Email configuration is working correctly!

Configuration:
- Host: ${process.env.SMTP_HOST}
- Port: ${process.env.SMTP_PORT}
- User: ${process.env.SMTP_USER}

Time: ${new Date().toISOString()}
Source: SMTP Test Endpoint
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email test successful! Check your inbox.",
      config: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
      },
    });
  } catch (error) {
    console.error("Email test failed:", error);
    res.status(500).json({
      success: false,
      message: `Email test failed: ${error}`,
      config: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
        hasPassword: !!process.env.SMTP_PASS,
      },
    });
  }
};
