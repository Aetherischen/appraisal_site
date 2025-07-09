import { Request, Response } from "express";

export const handleDebug = (req: Request, res: Response) => {
  console.log("Debug endpoint hit at:", new Date().toISOString());

  res.status(200).json({
    success: true,
    message: "Debug endpoint working!",
    timestamp: new Date().toISOString(),
    environment: {
      NODE_ENV: process.env.NODE_ENV,
      hasSmtpHost: !!process.env.SMTP_HOST,
      hasSmtpUser: !!process.env.SMTP_USER,
      hasSmtpPass: !!process.env.SMTP_PASS,
      smtpHost: process.env.SMTP_HOST || "Not set",
      smtpPort: process.env.SMTP_PORT || "Not set",
      smtpUser: process.env.SMTP_USER || "Not set",
    },
    request: {
      method: req.method,
      headers: req.headers,
      body: req.body,
    },
  });
};
