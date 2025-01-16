import { createContext, Dispatch, SetStateAction } from "react";
import type { Score } from '@/lib/types/types';


export const QuizContext = createContext<{
  scores: Score[];
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  addScore: (score: number) => void;

}>({
  scores: [],
  userName: "",
  setUserName: () => { },
  addScore: () => { },
});
