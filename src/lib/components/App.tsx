"use client";
import { useState, useEffect } from "react";
import { useQuiz } from "@/lib/hooks/useQuiz";
import Start from "@/lib/components/Start";
import Question from "@/lib/components/Question";
import Streak from '@/lib/components/Streak';
import ScoreFeedback from '@/lib/components/ScoreFeedback';
import { shuffleArray } from "@/lib/utils/utils";
import ScoreCard from "@/lib/components/ScoreCard";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/components/ui/card";
import Timer from "@/lib/components/timer";
import { Button } from "@/components/components/ui/button";
import type { QuestionType, GameState } from "@/lib/types/types";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { useToast } from "@/components/hooks/use-toast"


const App = () => {
  const [gameState, setGameState] = useState<GameState>("welcome"); // welcome, playing, finished
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const { addScore, scores } = useQuiz();
  const [questions, setQuestions] = useState<QuestionType[] | null>(null);
  const [timeEnd, setTimeEnd] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [bestScore, setBestScore] = useState(false)
  const [showFireWorks, setShowFireWorks] = useState(false);
  const { toast } = useToast()

  const startQuiz = async ({
    questionCount,
  }: {
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
      setTimeLeft(questionCount * 30);
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
      if(score > (Math.max(...scores.map((item) => item.score)) * (questionCount/100))){
        setBestScore(true);
      }
    } else {
      setStreak(0);
    }

    if (currentQuestion + 1 >= questionCount || timeEnd) {
      console.log(timeEnd);
      const finalScore = ((score + (isCorrect ? 1 : 0)) / questionCount) * 100;
      addScore(finalScore);
      setGameState("finished");
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  function scorePercentage() {
    return ((score / questionCount) * 100).toFixed(0);
  }

  const resetQuiz = () => {
    setGameState("welcome");
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(0);
    setShowFireWorks(false);

  };


  useEffect(() => {
    if(timeEnd){
      const finalScore = (score / questionCount) * 100;
      addScore(finalScore);
      setGameState("finished");
    }

    if(bestScore){
      toast({
        title: "New best score",
        description: `Congratulations, new personal best score ${scorePercentage()}`,
      })
    }

    if(gameState === 'finished' && scorePercentage() >= "80"){
      setShowFireWorks(true);
    }
  }, [timeEnd, bestScore, score, gameState]);



  return (
    <div className="container mx-auto p-4">
      {gameState === "welcome" && <Start onStart={startQuiz} />}

      {gameState === "playing" && questions && questions[currentQuestion] && (
        <div className="">
          <div className="text-center ">
            <h1 className="text-2xl font-bold">Question {currentQuestion + 1} of {questionCount}</h1>
            <div className="text-sm text-foreground font-semibold">
              Current Streak: {streak} | Best Streak: {bestStreak}
            </div>
            <Timer seconds={timeLeft} setTimeEnd={setTimeEnd} />
          </div>

          <Question
            key={questions[currentQuestion].id}
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
          />
        </div>
      )}

      {streak >= 2 && <Streak streak={streak} />}

      {gameState === "finished" && (
        <div className="grid md:grid-cols-5">
          <section className="md:col-span-3">
            <Card className="w-full max-w-md mx-auto mt-8">
              <CardHeader>
                <CardTitle>Quiz Complete!</CardTitle>
              </CardHeader>
              <CardContent>
                {gameState === 'finished' && (
                  <ScoreFeedback scorePercent={Number(scorePercentage())} />
                )}
                <p className="text-lg mb-4">
                  Your score: {scorePercentage()}%
                </p>
                <Button onClick={resetQuiz} className="w-full">
                  Play Again
                </Button>
              </CardContent>
            </Card>
          </section>

          <section className="md:col-span-2">
            <ScoreCard />
          </section>
        </div>

      )}

      {showFireWorks && (
        <Fireworks autorun={{ speed: 3 }} />
      )}
    </div>
  );
};

export default App;
