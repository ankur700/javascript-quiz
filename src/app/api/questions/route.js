// app/api/questions/route.js
import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { Data } from "@/lib/utils/data";

export async function GET() {
  try {
    const db = await getDb();

    // Check if questions table is empty
    const result = await db.get("SELECT COUNT(*) as count FROM questions");

    if (result.count <= 1) {
      console.log("Seeding initial questions...");
      // Seed the database with initial questions
      const stmt = await db.prepare(`
        INSERT INTO questions (question, image, options, answer, explanation)
        VALUES (?, ?, ?, ?, ?)
      `);

      for (const q of Data) {
        await stmt.run(
          q.question,
          q.image,
          JSON.stringify(q.options),
          q.answer,
          q.explanation
        );
      }

      await stmt.finalize();
    }

    // Fetch questions from database
    const dbQuestions = await db.all(
      "SELECT id, question, image, options FROM questions"
    );

    // Transform the data back to the original format
    const formattedQuestions = dbQuestions.map((q) => ({
      id: q.id,
      question: q.question,
      image: q.image,
      options: JSON.parse(q.options),
    }));

    return NextResponse.json(formattedQuestions);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch questions", details: error.message },
      { status: 500 }
    );
  }
}
