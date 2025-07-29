import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuizResponseSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/quiz-responses", async (req, res) => {
    try {
      const validatedData = insertQuizResponseSchema.parse(req.body);
      const response = await storage.createQuizResponse(validatedData);
      res.json(response);
    } catch (error) {
      res.status(400).json({ error: "Invalid quiz response data" });
    }
  });

  app.get("/api/quiz-responses/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const response = await storage.getQuizResponse(id);
      
      if (!response) {
        return res.status(404).json({ error: "Quiz response not found" });
      }
      
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
