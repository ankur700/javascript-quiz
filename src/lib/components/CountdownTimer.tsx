import React, { useState, useEffect } from "react";
import { cn } from "@/components/lib/utils";
import { useQuiz } from "@/lib/hooks/useQuiz";

const CountdownTimer = () => {
  const [style, setStyle] = useState("");

  // The state for our timer
  const { timer } = useQuiz();

  useEffect(() => {
    if (timer !== "00:00:00") {
      const hourMinuteSeconds = timer.split(":");
      const minutes = hourMinuteSeconds[1];
      if (minutes === "00") {
        setStyle("text-red-500 animate-pulse");
      }
    }
  }, [timer]);

  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <p className={cn("text-2xl text-green-500 font-semibold", style)}>
        {timer}
      </p>
    </div>
  );
};

export default CountdownTimer;
