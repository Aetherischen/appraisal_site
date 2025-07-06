import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleSendQuoteRequest } from "./routes/send-quote-request";
import { handleTestEmail } from "./routes/test-email";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);
  app.post("/api/send-quote-request", handleSendQuoteRequest);
  app.get("/api/test-email", handleTestEmail);

  return app;
}
