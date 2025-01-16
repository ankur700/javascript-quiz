import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/components/ui/card";
import { useQuiz } from "@/lib/hooks/useQuiz";

const ScoredCard = () => {
  const { scores } = useQuiz();

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Recent Scores</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {scores.map((score, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 bg-gray-50 rounded"
            >
              <span>{index + 1}</span>
              <span>{score.score}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ScoredCard;
