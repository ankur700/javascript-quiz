export interface QuestionType {
  id: number;
  question: string;
  options: string[];
  image: string;
  answer: number;
  explanation: string;
}

export type GameState = "welcome" | "playing" | "finished";

export type Score = { name: string, score: number, date: Date }

export type OptionWithIndicesType = { text: string, originalIndex: number }