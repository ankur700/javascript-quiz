"use client";
import { useState, useEffect } from "react";
import { useQuiz } from "@/lib/hooks/useQuiz";
import Start from "@/lib/components/Start";
import Question from "@/lib/components/Question";
import Sidebar from "@/lib/components/Sidebar";
import End from "@/lib/components/End";
import { shuffleArray, getScorePercentage } from "@/lib/utils/utils";
import type { QuestionType, GameState } from "@/lib/types/types";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { useToast } from "@/lib/hooks/use-toast";
import { useMobile } from "@/lib/hooks/useMobile";
import CountdownTimer from "@/components/CountdownTimer";

const App = () => {
  const [gameState, setGameState] = useState<GameState>("start"); // start, playing, finished
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [streak, setStreak] = useState<number>(0);
  const [bestStreak, setBestStreak] = useState<number>(0);
  const { addScore, scores, timeOut, startTimer, stopTimer } = useQuiz();

  const [questions, setQuestions] = useState<QuestionType[] | null>(null);
  const { toast } = useToast();
  const { isMobile } = useMobile();

  const startQuiz = async ({ questionCount }: { questionCount: number }) => {
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
      startTimer(questionCount * 30);
      setStreak(0);
      setBestStreak(0);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    }
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setBestStreak(Math.max(bestStreak, newStreak));
      setScore(score + 1);
      if (
        score >
        Math.max(...scores.map((item) => item.score)) * (questionCount / 100)
      ) {
        toast({
          title: "New best score",
          description: `Congratulations, new personal best score ${(
            (score + 1) *
            (questionCount / 100)
          ).toFixed(0)}%`,
        });
      }
    } else {
      setStreak(0);
    }

    if (currentQuestion + 1 >= questionCount) {
      const finalScore = (
        ((score + (isCorrect ? 1 : 0)) / questionCount) *
        100
      ).toFixed(0);
      addScore(Number(finalScore));
      setGameState("finished");
      stopTimer();
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const resetQuiz = () => {
    setGameState("start");
    setCurrentQuestion(0);
    setScore(0);
  };

  useEffect(() => {
    if (timeOut) {
      setGameState("finished");
      // addScore(score);
    }
  }, [timeOut]);

  return (
    <div className="max-w-7xl w-full mx-auto p-4">
      {gameState === "start" && <Start onStart={startQuiz} />}

      {gameState === "playing" && questions && questions[currentQuestion] && (
        <div id="timeout" className="grid md:grid-cols-7 md:gap-10">
          <section className="md:col-span-5">
            <div className="text-center">
              <h1 className="text-2xl font-bold">
                Question {currentQuestion + 1} of {questionCount}
              </h1>
            </div>
            {isMobile && (
              <Sidebar streak={streak} bestStreak={bestStreak}>
                <CountdownTimer />
              </Sidebar>
            )}
            <Question
              key={questions[currentQuestion].id}
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          </section>
          {!isMobile && (
            <section className="md:col-span-2 mt-6">
              <Sidebar streak={streak} bestStreak={bestStreak}>
                <CountdownTimer />
              </Sidebar>
            </section>
          )}
        </div>
      )}

      {gameState === "finished" && (
        <End
          score={getScorePercentage(score, questionCount)}
          reset={resetQuiz}
          timeOut={timeOut}
          text={`Attempted ${currentQuestion + 1} of ${questionCount}`}
        />
      )}

      {gameState === "finished" &&
        getScorePercentage(score, questionCount) >= 80 && (
          <Fireworks autorun={{ speed: 3 }} />
        )}
    </div>
  );
};

export default App;
