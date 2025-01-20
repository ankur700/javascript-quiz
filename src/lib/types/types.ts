export interface QuestionType {
  id: number;
  question: string;
  options: string[];
  image: string;
  answer: number;
  explanation: string;
}

export type GameState = "start" | "playing" | "finished";

export type Score = { name: string, score: number, date: string }

export type OptionWithIndicesType = { text: string, originalIndex: number }