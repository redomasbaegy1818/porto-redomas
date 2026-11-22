import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SmoothScroll from "@/components/layout/SmoothScroll";
import MagneticButton from "@/components/ui/MagneticButton";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Proyek Tidak Ditemukan" };

  return {
    title: `${project.title} — ${project.organization} | Redomas Baegy`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <SmoothScroll>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main className="min-h-screen pt-28 md:pt-36 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <Link
            href="/#proyek"
            data-cursor="KEMBALI"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#8E8D8A] hover:text-[#C6FF3D] transition-colors border border-[#F2EFE8]/15 px-4 py-2 rounded-xs"
          >
            <span>← Kembali ke Semua Proyek</span>
          </Link>
        </div>

        <header className="border-b border-[#F2EFE8]/10 pb-12 mb-16">
          <div className="flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-widest text-[#8E8D8A] mb-4">
            <span className="text-[#C6FF3D] font-bold text-base">{project.index}</span>
            <span>•</span>
            <span>{project.organization}</span>
            <span>•</span>
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-8xl tracking-tight uppercase text-[#F2EFE8]">
            {project.title}
          </h1>

          <p className="font-serif italic text-2xl md:text-3xl text-[#C6FF3D] font-normal mt-3">
            {project.subtitle}
          </p>

          <p className="font-sans text-lg md:text-xl text-[#F2EFE8]/80 max-w-3xl mt-6 leading-relaxed">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-8">
            <span className="font-mono text-xs text-[#8E8D8A] uppercase tracking-wider mr-2">
              Stack:
            </span>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1 border border-[#F2EFE8]/20 bg-[#141416] text-[#F2EFE8] rounded-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        <section aria-label="Visual Preview Proyek" className="mb-20">
          <div className="relative aspect-video w-full rounded-sm border border-[#F2EFE8]/20 bg-[#141416] overflow-hidden">
            <Image
              src={project.previewImage}
              alt={`Preview visual dari ${project.title}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 space-y-16">
            <article className="border-t border-[#F2EFE8]/15 pt-8">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#8E8D8A] mb-3">
                <span className="text-[#C6FF3D]">01</span>
                <span>/</span>
                <span>LATAR BELAKANG &amp; MASALAH</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-[#F2EFE8] mb-4">
                Tantangan yang Dihadapi
              </h2>
              <p className="font-sans text-base md:text-lg text-[#F2EFE8]/90 leading-relaxed">
                {project.problem}
              </p>
            </article>

            <article className="border-t border-[#F2EFE8]/15 pt-8">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#8E8D8A] mb-3">
                <span className="text-[#C6FF3D]">02</span>
                <span>/</span>
                <span>SOLUSI SISTEM</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-[#F2EFE8] mb-4">
                Pendekatan Rekayasa
              </h2>
              <p className="font-sans text-base md:text-lg text-[#F2EFE8]/90 leading-relaxed">
                {project.solution}
              </p>
            </article>

            <article className="border-t border-[#F2EFE8]/15 pt-8">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#8E8D8A] mb-3">
                <span className="text-[#C6FF3D]">03</span>
                <span>/</span>
                <span>PERAN &amp; KONTRIBUSI SAYA</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-[#F2EFE8] mb-4">
                Tanggung Jawab Teknis
              </h2>
              <p className="font-sans text-base md:text-lg text-[#F2EFE8]/90 leading-relaxed">
                {project.role}
              </p>
            </article>

            <article className="border-t border-[#F2EFE8]/15 pt-8">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#8E8D8A] mb-3">
                <span className="text-[#C6FF3D]">04</span>
                <span>/</span>
                <span>HASIL &amp; DAMPAK</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-[#F2EFE8] mb-4">
                Implementasi Nyata
              </h2>
              <p className="font-sans text-base md:text-lg text-[#F2EFE8]/90 leading-relaxed mb-6">
                {project.results}
              </p>

              {project.link ? (
                <MagneticButton
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  cursorLabel="KUNJUNGI"
                  className="px-6 py-3 bg-[#C6FF3D] text-[#0B0B0C] font-mono text-xs uppercase font-bold tracking-widest hover:bg-[#b0f020]"
                >
                  Buka Tautan Sistem ↗
                </MagneticButton>
              ) : (
                <div className="inline-flex items-center gap-2 p-3 border border-[#F2EFE8]/15 bg-[#141416] text-[#8E8D8A] font-mono text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#C6FF3D]/70 animate-pulse" />
                  <span>Tautan produksi / demo akan segera diperbarui.</span>
                </div>
              )}
            </article>
          </div>

          <aside aria-label="Metadata Proyek" className="lg:col-span-4">
            <div className="p-6 border border-[#F2EFE8]/15 bg-[#141416]/50 rounded-sm sticky top-28 space-y-6 font-mono text-xs">
              <div>
                <span className="text-[#8E8D8A] uppercase tracking-widest block mb-1">
                  KLIEN / INSTANSI
                </span>
                <span className="text-[#F2EFE8] text-sm font-bold">
                  {project.organization}
                </span>
              </div>

              <div className="border-t border-[#F2EFE8]/10 pt-4">
                <span className="text-[#8E8D8A] uppercase tracking-widest block mb-1">
                  TAHUN PEMBUATAN
                </span>
                <span className="text-[#F2EFE8] text-sm font-bold">
                  {project.year}
                </span>
              </div>

              <div className="border-t border-[#F2EFE8]/10 pt-4">
                <span className="text-[#8E8D8A] uppercase tracking-widest block mb-1">
                  STATUS
                </span>
                <span className="text-[#C6FF3D] text-sm font-bold">
                  Aktif &amp; Terus Dikembangkan
                </span>
              </div>

              <div className="border-t border-[#F2EFE8]/10 pt-4">
                <span className="text-[#8E8D8A] uppercase tracking-widest block mb-2">
                  BAGIKAN PROYEK
                </span>
                <Link
                  href="/#kontak"
                  className="block w-full text-center py-2.5 border border-[#C6FF3D] text-[#C6FF3D] hover:bg-[#C6FF3D] hover:text-[#0B0B0C] font-bold uppercase tracking-wider transition-colors"
                >
                  Diskusikan Proyek Serupa
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <nav aria-label="Navigasi Proyek Lain" className="mt-28 pt-12 border-t border-[#F2EFE8]/15 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href={`/proyek/${prevProject.slug}`}
            data-cursor="PREV"
            className="p-6 border border-[#F2EFE8]/10 bg-[#141416]/30 hover:border-[#C6FF3D]/50 transition-colors group"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[#8E8D8A] block mb-2">
              ← PROYEK SEBELUMNYA
            </span>
            <div className="font-display text-2xl font-bold uppercase text-[#F2EFE8] group-hover:text-[#C6FF3D] transition-colors">
              {prevProject.title}
            </div>
            <p className="font-sans text-xs text-[#8E8D8A] mt-1">
              {prevProject.category}
            </p>
          </Link>

          <Link
            href={`/proyek/${nextProject.slug}`}
            data-cursor="NEXT"
            className="p-6 border border-[#F2EFE8]/10 bg-[#141416]/30 hover:border-[#C6FF3D]/50 transition-colors group md:text-right"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[#8E8D8A] block mb-2">
              PROYEK SELANJUTNYA →
            </span>
            <div className="font-display text-2xl font-bold uppercase text-[#F2EFE8] group-hover:text-[#C6FF3D] transition-colors">
              {nextProject.title}
            </div>
            <p className="font-sans text-xs text-[#8E8D8A] mt-1">
              {nextProject.category}
            </p>
          </Link>
        </nav>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
