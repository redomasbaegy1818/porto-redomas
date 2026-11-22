"use client";

import { useState } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import { siteConfig } from "@/data/siteConfig";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="kontak" className="py-28 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-widest text-[#8E8D8A] flex items-center gap-2 mb-6">
          <span className="text-[#C6FF3D]">06</span>
          <span>/</span>
          <span>06</span>
          <span className="ml-2">— (KONTAK &amp; KOLABORASI)</span>
        </div>

        <div className="mb-14">
          <h2 className="font-display font-extrabold text-[10vw] sm:text-[8vw] lg:text-[6.5vw] leading-[0.92] tracking-tighter text-[#F2EFE8] uppercase">
            Ayo bikin{" "}
            <span className="font-serif italic font-normal text-[#C6FF3D] lowercase tracking-normal">
              sesuatu
            </span>{" "}
            bareng.
          </h2>
          <p className="font-sans text-base md:text-xl text-[#8E8D8A] mt-6 max-w-2xl leading-relaxed">
            Terbuka untuk kesempatan magang, proyek sistem informasi, atau posisi web developer. Mari diskusikan bagaimana kita dapat bekerja sama.
          </p>
        </div>

        <div className="p-8 md:p-12 border border-[#F2EFE8]/15 bg-[#141416]/60 rounded-sm mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8E8D8A] block mb-2">
              EMAIL RESMI
            </span>
            <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#F2EFE8] tracking-tight">
              {siteConfig.contact.email}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MagneticButton
              onClick={copyEmail}
              cursorLabel="SALIN"
              className={`px-6 py-3.5 font-mono text-xs uppercase font-bold tracking-widest transition-all ${copied
                  ? "bg-white text-[#0B0B0C]"
                  : "bg-[#C6FF3D] text-[#0B0B0C] hover:bg-[#b0f020]"
                }`}
            >
              {copied ? "✓ Tersalin ke Clipboard" : "Salin Email"}
            </MagneticButton>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              data-cursor="KIRIM"
              className="px-6 py-3.5 border border-[#F2EFE8]/25 text-[#F2EFE8] font-mono text-xs uppercase tracking-widest hover:border-[#C6FF3D] hover:text-[#C6FF3D] transition-colors"
            >
              Buka Email App ↗
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#F2EFE8]/10 font-mono text-xs uppercase tracking-wider">
          <div className="border border-[#F2EFE8]/10 p-5 hover:border-[#C6FF3D]/50 transition-colors">
            <span className="text-[#8E8D8A] block mb-2">01 / GITHUB</span>
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="KUNJUNGI"
              className="text-[#F2EFE8] hover:text-[#C6FF3D] text-sm font-bold flex items-center justify-between"
            >
              <span>redomasbaegy1818</span>
              <span>↗</span>
            </a>
          </div>

          <div className="border border-[#F2EFE8]/10 p-5 hover:border-[#C6FF3D]/50 transition-colors">
            <span className="text-[#8E8D8A] block mb-2">02 / LINKEDIN</span>
            <a
              href={siteConfig.contact.linkedin.startsWith("http") ? siteConfig.contact.linkedin : `https://${siteConfig.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="KUNJUNGI"
              className="text-[#F2EFE8] hover:text-[#C6FF3D] text-sm font-bold flex items-center justify-between"
            >
              <span>Redomas Baegy Hardianathan</span>
              <span>↗</span>
            </a>
          </div>

          <div className="border border-[#F2EFE8]/10 p-5 hover:border-[#C6FF3D]/50 transition-colors">
            <span className="text-[#8E8D8A] block mb-2">03 / CURRICULUM VITAE</span>
            <a
              href={siteConfig.contact.cvPath}
              download="CV_Redomas_Baegy_Hardianathan.pdf"
              data-cursor="UNDUH"
              className="text-[#F2EFE8] hover:text-[#C6FF3D] text-sm font-bold flex items-center justify-between"
            >
              <span>Unduh PDF</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
