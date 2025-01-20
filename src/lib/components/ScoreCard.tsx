"use client";

import { useQuiz } from "@/lib/hooks/useQuiz";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ScoredCard = () => {
  const { scores } = useQuiz();

  return (
    <Table className="bg-background/10 shadow backdrop-blur-md">
      <TableCaption className="text-md">
        A list of your recent scores.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">SN.</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {scores.map((score, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="font-medium">
              <time>{score.date}</time>
            </TableCell>
            <TableCell>{score.name}</TableCell>
            <TableCell>{score.score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ScoredCard;
