import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2 } from "lucide-react";

const Streak = ({ streak }) => {
  // const getStreakMessage = () => {
  //   if (streak >= 10) return "Unstoppable! 🔥";
  //   if (streak >= 7) return "Incredible! 🌟";
  //   if (streak >= 5) return "Amazing! ⭐";
  //   if (streak >= 3) return "Great job! 👏";
  //   return "";
  // };

  // const message = getStreakMessage();

  // if (!message) return null;

  if (streak < 2) return null;

  const messages = {
    2: "Great job! Keep it up!",
    3: "You're on fire! 🔥",
    4: "Unstoppable! 🌟",
    5: "Legendary! 👑",
  };

  return (
    <Alert className=" w-full mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-lg">
      <CheckCircle2 className="w-5 h-5" />
      <AlertTitle className="font-bold">
        {messages[Math.min(streak, 5)]}
      </AlertTitle>
      <AlertDescription className="text-sm">
        {streak} correct in a row!
      </AlertDescription>
    </Alert>
  );
};

export default Streak;
