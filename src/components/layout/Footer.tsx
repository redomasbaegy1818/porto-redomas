"use client";

import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-[#F2EFE8]/10 py-12 px-4 md:px-8 bg-[#0B0B0C] text-[#8E8D8A] font-mono text-xs tracking-wider">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-[#F2EFE8] font-medium tracking-normal font-sans">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p className="text-[11px] text-[#8E8D8A] mt-1">
            Dirancang dengan prinsip editorial dark mode, fungsionalitas publik, dan perhatian tinggi pada detail.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <span>SURAKARTA, JAWA TENGAH</span>
          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Kembali ke atas halaman"
            className="text-[#F2EFE8] hover:text-[#C6FF3D] transition-colors uppercase border-b border-[#F2EFE8]/20 hover:border-[#C6FF3D] pb-0.5"
          >
            KEMBALI KE ATAS ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
