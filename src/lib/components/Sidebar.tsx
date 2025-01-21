import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/lib/components/ui/card";
import Streak from "@/lib/components/Streak";
import React from "react";
import { cn } from "@/components/lib/utils";

type ComponentProps = {
  streak: number;
  bestStreak: number;
  className?: string;
  children: React.ReactNode;
};

export default function Sidebar({
  streak,
  bestStreak,
  className,
  children,
}: ComponentProps) {
  return (
    <Card className={cn("w-full max-w-lg mx-auto mt-8", className)}>
      <CardHeader className="text-lg text-center text-foreground font-semibold">
        <CardTitle>
          Current Streak: {streak} | Best Streak: {bestStreak}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {streak >= 2 && <Streak streak={streak} />}
        {children}
        {/* <Timer seconds={timeLeft} /> */}
      </CardContent>
    </Card>
  );
}
