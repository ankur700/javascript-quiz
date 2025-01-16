import { clsx, type ClassValue } from "clsx"
import type { QuestionType, OptionWithIndicesType } from "@/lib/types/types";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const shuffleArray = (array: QuestionType[] | OptionWithIndicesType[]): QuestionType[] | OptionWithIndicesType[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return array instanceof Array && (array[0] as OptionWithIndicesType).text !== undefined ? shuffled as OptionWithIndicesType[] : shuffled as QuestionType[];
};