"use client";

import VelocityMarquee from "@/components/ui/VelocityMarquee";
import { skillsData, skillsMarqueeList } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 border-b border-[#F2EFE8]/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="font-mono text-xs uppercase tracking-widest text-[#8E8D8A] flex items-center gap-2 mb-3">
          <span className="text-[#C6FF3D]">04</span>
          <span>/</span>
          <span>06</span>
          <span className="ml-2">— (KEMAMPUAN TEKNIS)</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight text-[#F2EFE8]">
          Stack &amp; <span className="font-serif italic font-normal text-[#C6FF3D]">Perangkat</span>
        </h2>
        <p className="font-mono text-xs text-[#8E8D8A] mt-4 max-w-xl leading-relaxed">
          Dipilih secara terukur berdasarkan kebutuhan riil sistem informasi yang stabil, bukan sekadar mengikuti tren sesaat.
        </p>
      </div>

      <div className="my-10">
        <VelocityMarquee items={skillsMarqueeList} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="border border-[#F2EFE8]/15 bg-[#141416]/40 p-6 flex flex-col justify-between rounded-sm"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#F2EFE8]/15 pb-4 mb-4">
                  <h3 className="font-display text-lg font-bold uppercase text-[#F2EFE8]">
                    {category.category}
                  </h3>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D]" />
                </div>
                <p className="font-sans text-xs text-[#8E8D8A] mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-3 border border-[#F2EFE8]/10 bg-[#0B0B0C] flex flex-col gap-1 hover:border-[#C6FF3D]/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-base font-bold text-[#F2EFE8]">
                          {item.name}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#C6FF3D] border border-[#C6FF3D]/30 px-1.5 py-0.5 rounded-xs">
                          {item.level}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-[#8E8D8A]">
                        {item.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
