"use client";
import { useState, useRef, useEffect } from "react";
import { QuizContext } from "@/lib/context/quizContext";
import type { Score } from "@/lib/types/types";
import { formatter } from "@/lib/utils/utils";

export const QuizProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [scores, setScores] = useState<Score[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("scores");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [timer, setTimer] = useState("00:00:00");
  const [timeOut, setTimeOut] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const [isRunning, setIsRunning] = useState(false);

  const [user, setUser] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("user") ?? "";
    }
    return "";
  });

  const addScore = (score: number) => {
    const newScores = [
      {
        name: user,
        score,
        date: formatter(new Date()),
      },
      ...scores,
    ].slice(0, 5);

    setScores(newScores);
    localStorage.setItem("scores", JSON.stringify(newScores));
  };

  const startTimer = (initialTimeInSeconds = 3600) => {
    if (!isRunning) {
      setIsRunning(true);
      let timeLeft = initialTimeInSeconds;

      timerRef.current = setInterval(() => {
        timeLeft -= 1;

        if (timeLeft <= 0 && timerRef.current) {
          clearInterval(timerRef.current);
          setIsRunning(false);
          setTimeOut(true);
          setTimer("00:00:00");
          return;
        }

        const hrs = Math.floor(timeLeft / 3600);
        const mins = Math.floor((timeLeft % 3600) / 60);
        const secs = timeLeft % 60;
        setTimer(
          `${String(hrs).padStart(2, "0")}:${String(mins).padStart(
            2,
            "0"
          )}:${String(secs).padStart(2, "0")}`
        );
      }, 1000);
    }
  };

  const pauseTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const resumeTimer = () => {
    if (!isRunning && timer !== "00:00:00") {
      const [hrs, mins, secs] = timer.split(":").map(Number);
      const totalSeconds = hrs * 3600 + mins * 60 + secs;
      startTimer(totalSeconds);
    }
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsRunning(false);
    setTimer("00:00:00");
    setTimeOut(false);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const value = {
    scores,
    setScores,
    user,
    setUser,
    addScore,
    timer,
    setTimer,
    startTimer,
    pauseTimer,
    resumeTimer,
    stopTimer,
    timeOut,
    setTimeOut,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
