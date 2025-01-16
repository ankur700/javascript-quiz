"use client";
import { useState } from "react";
import { useQuiz } from "@/lib/hooks/useQuiz";
import Start from "@/lib/components/Start";
import Question from "@/lib/components/Question";
import { shuffleArray } from "@/lib/utils/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/components/ui/card";
import { Button } from "@/components/components/ui/button";
import type { QuestionType, GameState } from "@/lib/types/types";

const App = () => {
  const [gameState, setGameState] = useState<GameState>("welcome"); // welcome, playing, finished
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [questionCount, setQuestionCount] = useState<number>(5);
  const { addScore } = useQuiz();
  const [questions, setQuestions] = useState<QuestionType[] | null>(null);
  const startQuiz = async ({
    questionCount,
  }: {
    name: string;
    questionCount: number;
  }) => {
    try {
      const response = await fetch("/api/questions");
      const allQuestions = await response.json();

      // Shuffle all questions and take the requested number
      const shuffledQuestions = shuffleArray(allQuestions).slice(
        0,
        questionCount
      ) as QuestionType[];

      setQuestions(shuffledQuestions);
      setQuestionCount(questionCount);
      setGameState("playing");
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    }
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 >= questionCount) {
      const finalScore = ((score + (isCorrect ? 1 : 0)) / questionCount) * 100;
      addScore(finalScore);
      setGameState("finished");
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const resetQuiz = () => {
    setGameState("welcome");
    setCurrentQuestion(0);
    setScore(0);
  };
  return (
    <div className="col-span-4 container mx-auto px-4 py-8">
      {gameState === "welcome" && <Start onStart={startQuiz} />}

      {gameState === "playing" && questions && questions[currentQuestion] && (
        <div className="mt-6">
          <div className="text-center font-semibold mb-4">
            Question {currentQuestion + 1} of {questionCount}
          </div>
          <Question
            key={questions[currentQuestion].id}
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
          />
        </div>
      )}

      {gameState === "finished" && (
        <Card className="w-full max-w-md mx-auto mt-8">
          <CardHeader>
            <CardTitle>Quiz Complete!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              Your score: {((score / questionCount) * 100).toFixed(1)}%
            </p>
            <Button onClick={resetQuiz} className="w-full">
              Try Again
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default App;
