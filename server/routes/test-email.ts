import { Request, Response } from "express";
import nodemailer from "nodemailer";

export const handleTestEmail = async (req: Request, res: Response) => {
  try {
    console.log("Testing email configuration...");
    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("SMTP_PASS exists:", !!process.env.SMTP_PASS);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    // Send test email
    await transporter.sendMail({
      from: `"CSR Website Test" <${process.env.SMTP_USER}>`,
      to: "al@csrappraisals.com",
      subject: "Email Configuration Test - Success!",
      text: "Your email configuration is working correctly!",
      html: `
        <h2>Email Configuration Test</h2>
        <p>✅ Your email setup is working correctly!</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        <p><strong>Source:</strong> Cloudflare Email Test</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email configuration is working correctly!",
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
