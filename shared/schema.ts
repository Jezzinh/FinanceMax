import { sql } from "drizzle-orm";
import { pgTable, text, varchar, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const quizResponses = pgTable("quiz_responses", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  age: text("age").notNull(),
  income: text("income").notNull(),
  sufficiency: text("sufficiency").notNull(),
  situation: text("situation").notNull(),
  barrier: text("barrier").notNull(),
  savings: text("savings").notNull(),
  expenses: json("expenses").$type<string[]>().notNull(),
});

export const insertQuizResponseSchema = createInsertSchema(quizResponses).omit({
  id: true,
});

export type InsertQuizResponse = z.infer<typeof insertQuizResponseSchema>;
export type QuizResponse = typeof quizResponses.$inferSelect;
