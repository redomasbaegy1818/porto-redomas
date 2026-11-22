"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

interface IntroLoaderProps {
  onComplete?: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasTriggeredRef = useRef(false);

  const finishLoader = () => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    if (containerRef.current) {
      gsap.to(containerRef.current, {
        yPercent: -100,
        duration: 0.85,
        ease: "power4.inOut",
        onComplete: () => {
          setIsFinished(true);
          onComplete?.();
          document.body.classList.add("loaded");
        },
      });
    } else {
      setIsFinished(true);
      onComplete?.();
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsFinished(true);
      onComplete?.();
      return;
    }

    const startTime = performance.now();
    const duration = 1100;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * 100);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(100);
        setTimeout(finishLoader, 150);
      }
    };

    const animFrame = requestAnimationFrame(step);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.code === "Space") {
        finishLoader();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (isFinished) return null;

  return (
    <aside
      aria-label="Memuat portofolio"
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#0B0B0C] text-[#F2EFE8] flex flex-col justify-between p-6 md:p-12 select-none border-b border-[#C6FF3D]/20"
    >
      <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest text-[#8E8D8A]">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#C6FF3D] animate-ping" />
          <span>REDOMAS BAECY HARDIANATHAN</span>
        </div>
        <button
          onClick={finishLoader}
          type="button"
          aria-label="Lewati intro loading"
          className="hover:text-[#C6FF3D] transition-colors border border-[#F2EFE8]/20 px-3 py-1 rounded-sm text-[11px] tracking-wider"
        >
          LEWATI [ESC]
        </button>
      </div>

      <div className="my-auto text-center">
        <div className="text-[12vw] font-display font-bold leading-none tracking-tighter text-[#F2EFE8] flex items-center justify-center">
          <span>{count.toString().padStart(2, "0")}</span>
          <span className="text-[#C6FF3D] text-[6vw] font-mono ml-2">%</span>
        </div>
        <p className="font-mono text-xs md:text-sm tracking-widest text-[#8E8D8A] mt-4 uppercase">
          MEMPERSIAPKAN SISTEM INFORMASI LAYANAN PUBLIK
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end text-[11px] font-mono text-[#8E8D8A] tracking-wider border-t border-[#F2EFE8]/10 pt-4 gap-2">
        <div>
          <span>LOKASI: SURAKARTA (7°34&apos;00&quot;S 110°49&apos;44&quot;E)</span>
        </div>
        <div>
          <span>DISKOMINFO SURAKARTA • AMIKOM YOGYAKARTA</span>
        </div>
      </div>
    </aside>
  );
}
