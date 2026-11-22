"use client";

import { useState, useEffect } from "react";

export function useSurakartaTime() {
  const [timeString, setTimeString] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("id-ID", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setTimeString(`${formatter.format(now)} WIB`);
      } catch {
        setTimeString("--:--:-- WIB");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return { timeString: isClient ? timeString : "--:--:-- WIB", isClient };
}
