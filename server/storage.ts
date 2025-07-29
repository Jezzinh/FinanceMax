import { type QuizResponse, type InsertQuizResponse } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createQuizResponse(response: InsertQuizResponse): Promise<QuizResponse>;
  getQuizResponse(id: string): Promise<QuizResponse | undefined>;
}

export class MemStorage implements IStorage {
  private quizResponses: Map<string, QuizResponse>;

  constructor() {
    this.quizResponses = new Map();
  }

  async createQuizResponse(insertResponse: InsertQuizResponse): Promise<QuizResponse> {
    const id = randomUUID();
    const response: QuizResponse = { ...insertResponse, id };
    this.quizResponses.set(id, response);
    return response;
  }

  async getQuizResponse(id: string): Promise<QuizResponse | undefined> {
    return this.quizResponses.get(id);
  }
}

export const storage = new MemStorage();
