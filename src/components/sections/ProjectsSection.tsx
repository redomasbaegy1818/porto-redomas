"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectHoverPreview from "@/components/ui/ProjectHoverPreview";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<{
    image: string;
    title: string;
  } | null>(null);

  return (
    <section id="proyek" className="py-24 px-4 md:px-8 border-b border-[#F2EFE8]/10 relative">
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#8E8D8A] flex items-center gap-2 mb-3">
            <span className="text-[#C6FF3D]">02</span>
            <span>/</span>
            <span>06</span>
            <span className="ml-2">— (PROYEK TERPILIH)</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight text-[#F2EFE8]">
            Sistem &amp; <span className="font-serif italic font-normal text-[#C6FF3D]">Aplikasi</span>
          </h2>
        </div>
        <p className="font-mono text-xs text-[#8E8D8A] max-w-sm leading-relaxed">
          Semua proyek di bawah dibangun dengan tujuan menyelesaikan masalah riil: dari aduan warga kota hingga agenda publik.
        </p>
      </div>

      <ProjectHoverPreview
        activeImage={activeProject ? activeProject.image : null}
        activeTitle={activeProject ? activeProject.title : null}
        isVisible={!!activeProject}
      />

      <div className="max-w-7xl mx-auto border-t border-[#F2EFE8]/10 divide-y divide-[#F2EFE8]/10">
        {projects.map((project) => (
          <div
            key={project.slug}
            onMouseEnter={() =>
              setActiveProject({
                image: project.previewImage,
                title: `${project.title} — ${project.organization}`,
              })
            }
            onMouseLeave={() => setActiveProject(null)}
            className="group py-10 md:py-14 transition-colors hover:bg-[#141416]/60 px-2 md:px-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start lg:items-center">
              <div className="lg:col-span-2 flex items-baseline gap-3 font-mono text-xs text-[#8E8D8A]">
                <span className="text-xl md:text-2xl font-bold text-[#C6FF3D] font-display">
                  {project.index}
                </span>
                <span className="uppercase tracking-wider">{project.year}</span>
              </div>

              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#8E8D8A]">
                    {project.organization}
                  </span>
                  <span className="text-[#C6FF3D]">•</span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#8E8D8A]">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-[#F2EFE8] group-hover:text-[#C6FF3D] transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-[#8E8D8A] mt-2 max-w-md line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="lg:col-span-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 border border-[#F2EFE8]/15 bg-[#0B0B0C] text-[#F2EFE8]/80 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="lg:col-span-2 flex lg:justify-end">
                <Link
                  href={`/proyek/${project.slug}`}
                  data-cursor="LIHAT"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-4 py-2.5 border border-[#F2EFE8]/20 group-hover:border-[#C6FF3D] group-hover:bg-[#C6FF3D] group-hover:text-[#0B0B0C] transition-all"
                >
                  <span>Detail</span>
                  <span className="text-sm">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
