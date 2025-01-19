import { createContext, Dispatch, SetStateAction } from "react";
import type { Score } from '@/lib/types/types';


export const QuizContext = createContext<{
  scores: Score[];
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  addScore: (score: number) => void;

}>({
  scores: [{name: '', score: 0, date: new Date() }],
  userName: "",
  setUserName: () => { },
  addScore: () => { },
});
