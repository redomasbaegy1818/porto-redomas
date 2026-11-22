"use client";

import { useEffect, useRef } from "react";

interface VelocityMarqueeProps {
  items: string[];
  baseVelocity?: number;
}

export default function VelocityMarquee({
  items,
  baseVelocity = 1.2,
}: VelocityMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const velocityMultiplier = useRef(1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY.current);
      lastScrollY.current = currentScrollY;
      velocityMultiplier.current = Math.min(6, 1 + delta * 0.08);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    let xPos = 0;
    let animationFrameId: number;

    const animate = () => {
      velocityMultiplier.current += (1 - velocityMultiplier.current) * 0.05;
      xPos -= baseVelocity * velocityMultiplier.current;

      if (track) {
        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(xPos) >= halfWidth) {
          xPos = 0;
        }
        track.style.transform = `translate3d(${xPos}px, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [baseVelocity]);

  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div
      ref={containerRef}
      className="overflow-hidden whitespace-nowrap py-4 border-y border-[#F2EFE8]/10 bg-[#0B0B0C] select-none"
    >
      <div
        ref={trackRef}
        className="inline-flex items-center gap-8 will-change-transform"
      >
        {displayItems.map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-8">
            <span className="font-display text-xl md:text-3xl font-semibold uppercase tracking-tight text-[#F2EFE8]/75 hover:text-[#C6FF3D] transition-colors">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#C6FF3D]" />
          </div>
        ))}
      </div>
    </div>
  );
}
