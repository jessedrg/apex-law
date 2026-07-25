"use client";

import { useEffect, useState } from "react";

function fmt(date: Date, tz: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hour: "numeric",
      minute: "2-digit",
    }).format(date);
  } catch {
    return "";
  }
}

export default function Clocks() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 20000);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="clocks">
      <span>NYC {now ? fmt(now, "America/New_York") : "—"}</span>
      <span>SFO {now ? fmt(now, "America/Los_Angeles") : "—"}</span>
    </span>
  );
}
