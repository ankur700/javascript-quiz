import { createContext, Dispatch, SetStateAction } from "react";
import type { Score } from '@/lib/types/types';


export const QuizContext = createContext<{
  scores: Score[];
  setScores: Dispatch<SetStateAction<Score[]>>
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
  addScore: (score: number) => void;
  timer: string;
  setTimer: Dispatch<SetStateAction<string>>;
  startTimer: (seconds: number) => void;
  pauseTimer: () => void;
  resumeTimer: () => void;
  stopTimer: () => void;
  timeOut: boolean;
  setTimeOut: Dispatch<SetStateAction<boolean>>

}>({
  scores: [],
  setScores: () => { },
  user: "",
  setUser: () => { },
  addScore: () => { },
  timer: "",
  setTimer: () => { },
  startTimer: () => { },
  pauseTimer: () => { },
  resumeTimer: () => { },
  stopTimer: () => { },
  timeOut: false,
  setTimeOut: () => { }
});
