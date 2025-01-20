import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/lib/components/ui/card";
import Streak from "@/lib/components/Streak";
// import Timer from "@/lib/components/timer";

type ComponentProps = {
  streak: number;
  bestStreak: number;
  children: React.ReactNode;
};

export default function Sidebar({
  streak,
  bestStreak,
  children,
}: ComponentProps) {
  return (
    <Card className="w-full max-w-lg mx-auto mt-8">
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
