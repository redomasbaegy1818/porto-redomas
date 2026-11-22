"use client";

import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export default function AboutSection() {
  return (
    <section id="tentang" className="py-24 px-4 md:px-8 border-b border-[#F2EFE8]/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="font-mono text-xs uppercase tracking-widest text-[#8E8D8A] flex items-center gap-2 mb-3">
            <span className="text-[#C6FF3D]">03</span>
            <span>/</span>
            <span>06</span>
            <span className="ml-2">— (TENTANG SAYA)</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight text-[#F2EFE8]">
            Konteks &amp; <span className="font-serif italic font-normal text-[#C6FF3D]">Prinsip</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-sm border border-[#F2EFE8]/20 bg-[#141416] overflow-hidden p-3 flex flex-col justify-between group">
              <div className="flex justify-between items-center text-[10px] font-mono text-[#8E8D8A] uppercase tracking-widest border-b border-[#F2EFE8]/10 pb-2">
                <span>[PORTRAIT_REF.01]</span>
                <span>{siteConfig.location.coordinates}</span>
              </div>

              <div className="relative flex-1 my-3 bg-[#0B0B0C] flex flex-col items-center justify-center border border-[#F2EFE8]/10 overflow-hidden">
                <Image
                  src={siteConfig.avatar || "/images/me.svg"}
                  alt={`Foto ${siteConfig.name}`}
                  fill
                  className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/80 via-transparent to-transparent flex flex-col justify-end p-4">
                  <span className="font-display text-xl font-bold uppercase tracking-wider text-[#F2EFE8]">
                    {siteConfig.name}
                  </span>
                  <span className="font-mono text-xs text-[#C6FF3D] mt-0.5 tracking-widest">
                    {siteConfig.role}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-[#8E8D8A] uppercase tracking-wider border-t border-[#F2EFE8]/10 pt-2">
                <span>SEMESTER {siteConfig.semester}</span>
                <span>{siteConfig.university}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="font-sans text-xl md:text-2xl text-[#F2EFE8] font-light leading-relaxed mb-8">
                {siteConfig.bio}
              </p>

              <div className="border-t border-[#F2EFE8]/15 pt-8">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#8E8D8A] mb-6">
                  TIGA FAKTA SPESIFIK:
                </h3>

                <div className="space-y-6">
                  {siteConfig.facts.map((fact) => (
                    <div
                      key={fact.number}
                      className="grid grid-cols-1 sm:grid-cols-12 gap-4 pb-6 border-b border-[#F2EFE8]/10 last:border-b-0"
                    >
                      <div className="sm:col-span-2 font-mono text-lg font-bold text-[#C6FF3D]">
                        {fact.number}
                      </div>
                      <div className="sm:col-span-10">
                        <h4 className="font-display text-lg font-bold text-[#F2EFE8] uppercase mb-1">
                          {fact.title}
                        </h4>
                        <p className="font-sans text-sm text-[#8E8D8A] leading-relaxed">
                          {fact.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
