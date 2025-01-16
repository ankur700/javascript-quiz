// app/api/verify/route.js
import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { questionId, selectedAnswer } = body;

    if (!questionId || selectedAnswer === undefined) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const db = await getDb();
    const question = await db.get(
      "SELECT answer, explanation FROM questions WHERE id = ?",
      [questionId]
    );

    if (!question) {
      return NextResponse.json(
        { error: "Question not found" },
        { status: 404 }
      );
    }

    const isCorrect = question.answer === selectedAnswer;

    return NextResponse.json({
      correct: isCorrect,
      answer: question.answer,
      explanation: question.explanation,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to verify answer" },
      { status: 500 }
    );
  }
}
