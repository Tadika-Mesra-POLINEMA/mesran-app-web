"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  time: number;
  className?: string;
}

export const CountdownTimer = ({
  time,
  className = "",
}: CountdownTimerProps) => {
  const [remainingTime, setRemainingTime] = useState<number>(time);

  useEffect(() => {
    if (remainingTime <= 0) return;

    const timer = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  return (
    <div className={`px-4 py-2 rounded-full bg-neutral-10 ${className}`}>
      <p>00:{remainingTime > 0 ? remainingTime : "00"}</p>
    </div>
  );
};
