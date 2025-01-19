import React from "react";
import { useQuiz } from "@/lib/hooks/useQuiz";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/components/ui/table"



const ScoredCard = () => {
  const { scores } = useQuiz();
  function formatDateTime(date: Date){
    const inputDate = new Date(date);
    const formatedDate = inputDate.toLocaleDateString();
    const formatedTime = inputDate.toLocaleTimeString();
    return `${formatedDate}, ${formatedTime}`
  }
  return (
    <Table>
      <TableCaption>A list of your recent scores.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {scores.map((score, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{formatDateTime(score.date)}</TableCell>
            <TableCell>{score.name}</TableCell>
            <TableCell>{score.score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ScoredCard;
