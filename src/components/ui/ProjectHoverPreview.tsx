"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

interface ProjectHoverPreviewProps {
  activeImage: string | null;
  activeTitle: string | null;
  isVisible: boolean;
}

export default function ProjectHoverPreview({
  activeImage,
  activeTitle,
  isVisible,
}: ProjectHoverPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isPointerFine = useRef(false);

  useEffect(() => {
    isPointerFine.current = window.matchMedia("(pointer: fine)").matches;
    if (!isPointerFine.current) return;

    const container = containerRef.current;
    if (!container) return;

    const xTo = gsap.quickTo(container, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(container, "y", { duration: 0.35, ease: "power3.out" });
    const rotateTo = gsap.quickTo(container, "rotation", { duration: 0.35, ease: "power3.out" });

    let prevX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - prevX;
      prevX = e.clientX;

      const tilt = Math.max(-12, Math.min(12, deltaX * 0.4));
      xTo(e.clientX + 30);
      yTo(e.clientY - 120);
      rotateTo(tilt);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-300 hidden md:block ${
        isVisible && activeImage ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{
        transformOrigin: "center center",
      }}
    >
      <div className="w-[320px] h-[200px] lg:w-[380px] lg:h-[240px] rounded-sm overflow-hidden border border-[#C6FF3D]/40 bg-[#141416] shadow-2xl relative">
        {activeImage && (
          <Image
            src={activeImage}
            alt={activeTitle || "Project Preview"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 380px"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/80 via-transparent to-transparent flex items-end p-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C6FF3D]">
            {activeTitle}
          </span>
        </div>
      </div>
    </div>
  );
}
