"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticButton from "@/components/ui/MagneticButton";
import { siteConfig } from "@/data/siteConfig";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(".hero-line-inner", {
        yPercent: 120,
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out",
      })
        .from(
          roleRef.current,
          { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" },
          "-=0.7"
        )
        .from(
          statementRef.current,
          { opacity: 0, y: 24, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          actionsRef.current,
          { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 md:pt-36 pb-12 px-4 md:px-8 border-b border-[#F2EFE8]/10 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-2 md:right-8 top-28 select-none text-[16vw] font-display font-black text-[#F2EFE8]/[0.02] leading-none"
      >
        SURAKARTA
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-[#8E8D8A] mb-8">
        <div className="flex items-center gap-2">
          <span className="text-[#C6FF3D]">01</span>
          <span>/</span>
          <span>06</span>
          <span className="ml-2">— BERANDA</span>
        </div>
        <div ref={roleRef} className="flex items-center gap-2">
          <span>(WEB DEVELOPER • SISTEM LAYANAN PUBLIK)</span>
        </div>
      </div>

      <div className="my-auto py-6">
        <h1
          ref={headlineRef}
          className="font-display font-extrabold text-[15vw] sm:text-[13vw] lg:text-[11vw] leading-[0.88] tracking-tighter text-[#F2EFE8] uppercase select-none"
        >
          <div className="overflow-hidden">
            <span className="hero-line-inner inline-block">REDO</span>
          </div>
          <div className="overflow-hidden flex flex-wrap items-baseline gap-x-4">
            <span className="hero-line-inner inline-block text-[#8E8D8A]/60">
              HARDIANATHAN
            </span>
            <span className="hero-line-inner inline-block font-serif italic font-normal text-[0.45em] text-[#C6FF3D] lowercase tracking-normal">
              .dev
            </span>
          </div>
        </h1>

        <div className="mt-8 md:mt-12 max-w-3xl">
          <p
            ref={statementRef}
            className="text-lg md:text-2xl lg:text-3xl font-sans text-[#F2EFE8]/90 font-light leading-relaxed"
          >
            &ldquo;Saya membangun sistem layanan{" "}
            <span className="font-serif italic text-[#C6FF3D] font-normal">
              publik
            </span>{" "}
            yang benar-benar dipakai warga.&rdquo;
          </p>
        </div>
      </div>

      <div
        ref={actionsRef}
        className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-[#F2EFE8]/10"
      >
        <div className="flex flex-wrap items-center gap-4">
          <MagneticButton
            href="#proyek"
            cursorLabel="LIHAT"
            className="px-7 py-3.5 bg-[#C6FF3D] text-[#0B0B0C] font-mono text-xs uppercase font-bold tracking-widest hover:bg-[#b0f020] transition-colors"
          >
            Lihat Proyek ↓
          </MagneticButton>

          <MagneticButton
            href={siteConfig.contact.cvPath}
            download="CV_Redomas_Baegy_Hardianathan.pdf"
            cursorLabel="UNDUH"
            className="px-7 py-3.5 border border-[#F2EFE8]/25 text-[#F2EFE8] font-mono text-xs uppercase tracking-widest hover:border-[#C6FF3D] hover:text-[#C6FF3D] transition-colors"
          >
            Unduh CV (PDF) ↗
          </MagneticButton>
        </div>

        <div className="max-w-md font-mono text-xs text-[#8E8D8A] leading-relaxed">
          <p>
            Mahasiswa Informatika S1 semester {siteConfig.semester} di{" "}
            <span className="text-[#F2EFE8]">{siteConfig.university}</span>. Magang aktif di{" "}
            <span className="text-[#F2EFE8]">Diskominfo Surakarta</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
