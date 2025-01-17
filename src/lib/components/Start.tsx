import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/components/ui/card";
import { Input } from "@/components/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/components/ui/select";
import { Button } from "@/components/components/ui/button";
import { useQuiz } from "@/lib/hooks/useQuiz";

interface StartProps {
  onStart: (data: { name: string; questionCount: number }) => void;
}

const Start: React.FC<StartProps> = ({ onStart }) => {
  const OPTIONS = [
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "30", label: "30" },
    { value: "40", label: "40" },
  ];

  const { userName, setUserName } = useQuiz();
  const [name, setName] = useState<string>(userName ?? "");
  const [questionCount, setQuestionCount] = useState<number>(10);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setUserName(name);
    localStorage.setItem("quizUserName", name);
    onStart({ name, questionCount: questionCount });
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Welcome to the Quiz!</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <Input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Number of Questions
            </label>
            <Select
              defaultValue={OPTIONS[0].value}
              onValueChange={(value) => setQuestionCount(Number(value))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {OPTIONS.map((option) => {
                  return (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label} Questions
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Start Quiz
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Start;