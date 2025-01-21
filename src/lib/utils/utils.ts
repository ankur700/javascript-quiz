import type { QuestionType, OptionWithIndicesType } from "@/lib/types/types";

export const shuffleArray = (array: QuestionType[] | OptionWithIndicesType[]): QuestionType[] | OptionWithIndicesType[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return (array[0] as OptionWithIndicesType).text !== undefined ? shuffled as OptionWithIndicesType[] : shuffled as QuestionType[];
};

export function getScorePercentage(score: number, questionCount: number) {
  return Number(((score / questionCount) * 100).toFixed(0));
}

export function formatter(date: Date) {
  const inputDate = new Date(date);
  const formatter = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "short",
    timeStyle: "short",
    hour12: true,
  });
  return formatter.format(inputDate);
}