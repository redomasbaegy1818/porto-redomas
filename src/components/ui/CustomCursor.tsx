"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsPointerFine(mediaQuery.matches);

    if (!mediaQuery.matches) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.25, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.25, ease: "power3" });

    const dotXTo = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power2" });
    const dotYTo = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power2" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      xTo(e.clientX);
      yTo(e.clientY);
      dotXTo(e.clientX);
      dotYTo(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else {
        const interactiveTarget = target.closest("a, button, input, [role='button']");
        if (interactiveTarget) {
          setCursorText("");
          setIsHovered(true);
        } else {
          setCursorText("");
          setIsHovered(false);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isPointerFine) return null;

  return (
    <>
      <div
        ref={cursorRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-[999] rounded-full transition-opacity duration-300 flex items-center justify-center ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          cursorText
            ? "w-20 h-20 bg-[#C6FF3D] text-[#0B0B0C] shadow-lg"
            : isHovered
            ? "w-12 h-12 bg-[#C6FF3D]/25 border border-[#C6FF3D]"
            : "w-8 h-8 border border-[#F2EFE8]/30"
        }`}
        style={{
          transitionProperty: "width, height, background-color, border-color, opacity",
          transitionDuration: "0.25s",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <span
          ref={textRef}
          className={`font-mono text-[10px] uppercase font-bold tracking-widest select-none transition-transform duration-200 ${
            cursorText ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          {cursorText}
        </span>
      </div>

      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-[1000] w-1.5 h-1.5 rounded-full bg-[#C6FF3D] transition-opacity duration-200 ${
          isVisible && !cursorText ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
