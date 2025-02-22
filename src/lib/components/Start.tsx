import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/lib/hooks/useQuiz";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface StartProps {
  onStart: (data: { name: string; questionCount: number }) => void;
}

const Start: React.FC<StartProps> = ({ onStart }) => {
  const OPTIONS = [
    { value: "10", label: "10" },
    { value: "25", label: "25" },
    { value: "50", label: "50" },
    { value: "100", label: "100" },
    { value: "150", label: "150" },
  ];

  const { user, setUser } = useQuiz();
  const [name, setName] = useState<string>(user ?? "");
  const [questionCount, setQuestionCount] = useState<number>(10);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setUser(name);
    localStorage.setItem("user", name);
    onStart({ name, questionCount: questionCount });
  };

  return (
    <>
      <Card className="w-full max-w-md mx-auto mt-8">
        <CardHeader>
          <CardTitle className="text-center">Welcome to the Quiz!</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Name
              </label>
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
      <Alert className="w-full max-w-md mx-auto mt-4">
        <AlertTitle>Credit</AlertTitle>
        <AlertDescription>
          All of the questions are sourced from{" "}
          <a
            className="underline text-blue-300"
            target="_blank"
            href="https://github.com/lydiahallie/javascript-questions"
          >
            javascript-questions
          </a>
        </AlertDescription>
      </Alert>
    </>
  );
};

export default Start;
