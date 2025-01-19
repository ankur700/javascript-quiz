
import React, { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import {cn} from "@/components/lib/utils"

const Timer = ({seconds, setTimeEnd}: {seconds: number, setTimeEnd: Dispatch<SetStateAction<boolean>>}) => {
  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref = useRef<ReturnType<typeof setTimeout>>(null);
  const [style, setStyle] = useState('')

  // The state for our timer
  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e: string) => {
    const total =
      Date.parse(e) - Date.parse(new Date().toLocaleString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor(
      (total / 1000 / 60) % 60
    );
    const hours = Math.floor(
      (total / 1000 / 60 / 60) % 24
    );
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e: string) => {
    let { total, hours, minutes, seconds } =
      getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable

      if(minutes < 5) {
        setStyle('text-red-500 animate-pulse');
      }

      if(minutes === 0 && seconds === 0){
        setTimeEnd(true);
      }

      setTimer(
        (hours > 9 ? hours : "0" + hours) +
        ":" +
        (minutes > 9
          ? minutes
          : "0" + minutes) +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e: Date) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("00:00:00");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e.toLocaleString());
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + seconds);
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {

    clearTimer(getDeadTime());
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <p className={cn("text-lg", style)}>{timer}</p>
    </div>
  );
};

export default Timer;
