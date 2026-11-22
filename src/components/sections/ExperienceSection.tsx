"use client";

import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="pengalaman" className="py-24 px-4 md:px-8 border-b border-[#F2EFE8]/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="font-mono text-xs uppercase tracking-widest text-[#8E8D8A] flex items-center gap-2 mb-3">
            <span className="text-[#C6FF3D]">05</span>
            <span>/</span>
            <span>06</span>
            <span className="ml-2">— (PENGALAMAN &amp; PENDIDIKAN)</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight text-[#F2EFE8]">
            Jejak &amp; <span className="font-serif italic font-normal text-[#C6FF3D]">Pendidikan</span>
          </h2>
        </div>

        <div className="relative border-l border-[#F2EFE8]/15 ml-2 md:ml-6 pl-6 md:pl-12 space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0B0B0C] border-2 border-[#C6FF3D] group-hover:bg-[#C6FF3D] transition-colors" />

              <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#8E8D8A] mb-2">
                <span className="text-[#C6FF3D] font-bold">{exp.period}</span>
                <span>•</span>
                <span>{exp.location}</span>
                <span className="px-2 py-0.5 border border-[#F2EFE8]/15 rounded-xs text-[10px]">
                  {exp.type}
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-4xl font-extrabold uppercase text-[#F2EFE8] tracking-tight">
                {exp.role}
              </h3>
              <h4 className="font-sans text-base text-[#C6FF3D] font-medium mt-1 mb-4">
                {exp.institution}
              </h4>

              <p className="font-sans text-sm md:text-base text-[#8E8D8A] max-w-2xl leading-relaxed mb-4">
                {exp.description}
              </p>

              <ul className="space-y-2 max-w-2xl">
                {exp.highlights.map((item, hIdx) => (
                  <li
                    key={hIdx}
                    className="flex items-start gap-3 font-sans text-sm text-[#F2EFE8]/80 leading-relaxed"
                  >
                    <span className="text-[#C6FF3D] font-mono text-xs mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
