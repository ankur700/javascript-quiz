"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/components/ui/card";
import { Button } from "@/components/components/ui/button";
import Image from "next/image";
import type { QuestionType, OptionWithIndicesType } from "@/lib/types/types";
import {shuffleArray } from '@/lib/utils/utils';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/components/ui/alert-dialog";
import { MessageCircleQuestion } from "lucide-react";

const Question = ({
  question,
  onAnswer,
}: {
  question: QuestionType;
  onAnswer: (isCorrect: boolean) => void;
}) => {
  const [answered, setAnswered] = useState<boolean>(false);
  const [answer, setAnswer] = useState<{
    correct: boolean;
    answer: number;
    explanation: string;
  }>();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const [shuffledOptions] = useState(() => {
    const optionsWithIndices = question.options.map((opt, idx) => ({
      text: opt,
      originalIndex: idx + 1
    }));
    return shuffleArray(optionsWithIndices) as OptionWithIndicesType[];
  });

  const handleAnswerClick = async (answerIndex: number) => {
    if (answered) return;
    setSelectedIndex(answerIndex);
    try {
      const response = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questionId: question.id,
          selectedAnswer: answerIndex,
        }),
      });

      const result = await response.json();
      setAnswer(result);
      setAnswered(true);

      const audio = new Audio(result.correct ? '/sounds/mixkit-achievement-bell-600.wav' : '/sounds/Incorrect-sound-effect.mp3');
      audio.play();

    } catch (error) {
      console.error("Failed to verify answer:", error);
    }
  };

  const getVariant = (index: number) => {
    if (answered && answer && index === selectedIndex) {
      return answer.correct ? "success" : "destructive";
    } else if (answered && answer && index === answer.answer) {
      return "success";
    }
    return "outline";
  };

  return (
    <Card className="w-full max-w-3xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>{question.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {question.image && (
          <Image
            src={`/images/${question.image}`}
            alt="Question illustration"
            className="mx-auto max-w-full w-full h-auto"
            width="600"
            height="400"
          />
        )}
        <div className="grid grid-cols-2 gap-4 place-content-center">
          {shuffledOptions.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswerClick(option.originalIndex)}
              className={`w-full text-left self-center justify-start option`}
              variant={getVariant(option.originalIndex)}
              disabled={answered}
            >
              {index+1}. <div dangerouslySetInnerHTML={{ __html: option.text }} />
            </Button>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" disabled={!answered}>
              Explanation <MessageCircleQuestion />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                {answer?.correct ? "Correct " : "Wrong "} Answer
              </AlertDialogTitle>
              <AlertDialogDescription>
                {answer && (
                  <div
                    className="text-foreground"
                    dangerouslySetInnerHTML={{ __html: answer.explanation }}
                  />
                )}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Button
          disabled={!answered}
          onClick={() => answer && onAnswer(answer.correct)}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Question;
