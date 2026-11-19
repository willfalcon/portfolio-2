"use client";

import { useEffect, useState } from "react";

const formatTime = () =>
  new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Chicago",
    timeZoneName: "shortGeneric",
  });

export default function LocalTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    setTime(formatTime());
    const id = setInterval(() => setTime(formatTime()), 15_000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="font-mono text-sm text-ink-muted">{time ?? "\u00a0"}</span>
  );
}
