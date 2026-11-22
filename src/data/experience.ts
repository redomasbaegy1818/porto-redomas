export interface ExperienceItem {
  period: string;
  role: string;
  institution: string;
  location: string;
  type: "Pekerjaan" | "Pendidikan";
  description: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    period: "2026 — Sekarang",
    role: "Magang IT Web Developer",
    institution: "Diskominfo Surakarta",
    location: "Surakarta, Jawa Tengah",
    type: "Pekerjaan",
    description:
      "Bertanggung jawab dalam pengembangan dan penyempurnaan sistem informasi layanan masyarakat di lingkungan Pemerintah Kota Surakarta.",
    highlights: [
      "Mengembangkan ULAS (Unit Layanan Aduan Surakarta) untuk pengelolaan laporan dan pemantauan kejadian kota.",
      "Membangun portal LARAS (Layanan Agenda & Ragam Acara Surakarta) berbasis Laravel dan MySQL.",
      "Bekerja sama dengan tim teknis Diskominfo dalam pemeliharaan basis data dan antarmuka web.",
    ],
  },
  {
    period: "2023 — Sekarang",
    role: "S1 Informatika (Semester 7)",
    institution: "Universitas Amikom Yogyakarta",
    location: "Yogyakarta, D.I. Yogyakarta",
    type: "Pendidikan",
    description:
      "Fokus pada rekayasa perangkat lunak, arsitektur basis data, dan pengembangan aplikasi berbasis web.",
    highlights: [
      "Mengangkat sistem layanan aduan publik (ULAS) sebagai subjek penelitian tugas akhir/skripsi.",
      "Mengembangkan berbagai proyek akademik berbasis web frontend dan backend.",
    ],
  },
];
