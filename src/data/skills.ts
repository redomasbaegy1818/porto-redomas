export interface SkillCategory {
  category: string;
  description: string;
  items: {
    name: string;
    level: string;
    note: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Backend & Basis Data",
    description: "Fondasi logika sistem, manajemen relasi data, dan keamanan akses layanan publik.",
    items: [
      { name: "PHP", level: "Utama", note: "Pemrograman backend sistematis" },
      { name: "Laravel", level: "Utama", note: "Framework MVC untuk ULAS & LARAS" },
      { name: "MySQL", level: "Utama", note: "Desain skema, relasi, dan optimasi query" },
    ],
  },
  {
    category: "Frontend & Antarmuka",
    description: "Perancangan tampilan web yang fungsional, bersih, dan responsif di berbagai perangkat.",
    items: [
      { name: "HTML5", level: "Inti", note: "Struktur semantik & aksesibilitas" },
      { name: "CSS3", level: "Inti", note: "Layout flexbox, grid, dan animasi CSS" },
      { name: "JavaScript", level: "Inti", note: "Interaktivitas DOM dan logika klien" },
      { name: "Tailwind CSS", level: "Utama", note: "Utility-first styling yang modular & cepat" },
    ],
  },
  {
    category: "Tools, Version Control & Workflow",
    description: "Perangkat penunjang produktivitas dan kolaborasi pengembangan perangkat lunak.",
    items: [
      { name: "Git", level: "Workflow", note: "Version control & manajemen branch" },
      { name: "GitHub", level: "Workflow", note: "Penyimpanan repositori & kolaborasi" },
      { name: "VS Code", level: "Editor", note: "Lingkungan pengembangan harian" },
    ],
  },
];

export const skillsMarqueeList: string[] = [
  "Laravel",
  "PHP",
  "MySQL",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Git",
  "GitHub",
  "VS Code",
  "Public Service Information Systems",
  "Relational Database",
];
