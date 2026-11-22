"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSurakartaTime } from "@/hooks/useSurakartaTime";
import { siteConfig } from "@/data/siteConfig";

export default function Navbar() {
  const { timeString, isClient } = useSurakartaTime();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Initial theme check
    const saved = localStorage.getItem("redo_theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("redo_theme", nextTheme);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#0B0B0C]/85 backdrop-blur-md border-[#F2EFE8]/10 py-3.5"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4 text-xs font-mono tracking-wider">
        {/* Left: Location & Surakarta Live Time */}
        <div className="flex items-center gap-2 text-[#8E8D8A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D] animate-pulse" />
          <span className="hidden sm:inline">{siteConfig.location.coordinates} •</span>
          <span className="text-[#F2EFE8] font-medium">{isClient ? timeString : "--:--:-- WIB"}</span>
        </div>

        {/* Center: Status Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 border border-[#F2EFE8]/10 rounded-full bg-[#141416]/50">
          <span className="w-2 h-2 rounded-full bg-[#C6FF3D]" />
          <span className="text-[11px] uppercase tracking-widest text-[#F2EFE8]/80">
            {siteConfig.status}
          </span>
        </div>

        {/* Right: Quick Links & Theme Toggle */}
        <nav aria-label="Navigasi Utama" className="flex items-center gap-5 sm:gap-7">
          <a
            href="#proyek"
            data-cursor="LIHAT"
            className="text-[#8E8D8A] hover:text-[#C6FF3D] transition-colors uppercase"
          >
            Proyek
          </a>
          <a
            href="#tentang"
            data-cursor="BACA"
            className="text-[#8E8D8A] hover:text-[#C6FF3D] transition-colors uppercase"
          >
            Tentang
          </a>
          <a
            href="#kontak"
            data-cursor="KONTAK"
            className="text-[#8E8D8A] hover:text-[#C6FF3D] transition-colors uppercase"
          >
            Kontak
          </a>

          {/* Theme switch button */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label={`Ubah ke ${theme === "dark" ? "light mode" : "dark mode"}`}
            className="px-2.5 py-1 border border-[#F2EFE8]/20 hover:border-[#C6FF3D] text-[10px] uppercase tracking-widest rounded-sm text-[#F2EFE8] hover:text-[#C6FF3D] transition-colors"
          >
            {theme === "dark" ? "LIGHT" : "DARK"}
          </button>
        </nav>
      </div>
    </header>
  );
}
