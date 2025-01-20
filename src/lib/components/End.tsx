import React from "react";
import ScoreFeedback from "@/lib/components/ScoreFeedback";
import ScoreCard from "@/lib/components/ScoreCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/lib/hooks/useQuiz";
export default function End({
  score,
  reset,
  timeOut,
  text,
}: {
  score: number;
  reset: () => void;
  timeOut: boolean;
  text: string;
}) {
  const { addScore } = useQuiz();

  return (
    <div className="grid md:grid-cols-5">
      <section className="md:col-span-3">
        <Card className="w-full z-30 bg-background/10 shadow backdrop-blur-md max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-center">
              {timeOut && <p>Time up</p>}
              <ScoreFeedback score={score} />
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            {timeOut && <p className="text-lg mb-1">{text}</p>}
            <p className="text-lg mb-4">You scored: {score}%</p>
            <div className="space-y-4 space-x-4">
              <Button
                onClick={reset}
                className={timeOut ? "w-[1/2]" : "w-full"}
              >
                Play Again
              </Button>
              {timeOut && (
                <Button
                  onClick={() => {
                    addScore(score);
                    reset();
                  }}
                  className={timeOut ? "w-[1/2]" : "w-full"}
                >
                  Add this Score
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="md:col-span-2 ">
        <ScoreCard />
      </section>
    </div>
  );
}
