"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 h-[2px] bg-[#C6FF3D] z-50 transition-all duration-75 pointer-events-none"
        style={{ width: `${progress}%` }}
      />
      <div
        aria-hidden="true"
        className="fixed right-0 top-0 w-[2px] h-full bg-white/5 z-40 pointer-events-none hidden md:block"
      >
        <div
          className="w-full bg-[#C6FF3D] transition-all duration-75"
          style={{ height: `${progress}%` }}
        />
      </div>
    </>
  );
}
