"use client";
import { useState } from "react";
import { QuizContext } from "@/lib/context/quizContext";

export const QuizProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [scores, setScores] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("quizScores");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [userName, setUserName] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("quizUserName") || "";
    }
    return "";
  });

  const addScore = (score: number) => {
    const newScores = [
      { name: userName, score, date: new Date().toISOString() },
      ...scores,
    ].slice(0, 5);

    setScores(newScores);
    localStorage.setItem("quizScores", JSON.stringify(newScores));
  };

  const value = {
    scores,
    userName,
    setUserName,
    addScore,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
