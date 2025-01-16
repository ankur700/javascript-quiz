// lib/db.js
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

let db = null;

export async function getDb() {
  if (db) {
    return db;
  }

  // Use absolute path for database file
  const dbPath = path.join(process.cwd(), "./src/lib/quiz.db");

  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    // Create questions table if it doesn't exist
    await db.exec(`
      CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question TEXT NOT NULL,
        image TEXT,
        options TEXT NOT NULL,
        answer INTEGER NOT NULL,
        explanation TEXT
      )
    `);

    return db;
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
}
