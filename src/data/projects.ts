export interface Project {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  organization: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  results: string;
  techStack: string[];
  link?: string;
  previewImage: string;
  accentWord?: string;
}

export const projects: Project[] = [
  {
    slug: "ulas",
    index: "01",
    title: "ULAS",
    subtitle: "Unit Layanan Aduan Surakarta",
    category: "Sistem Informasi Publik",
    year: "2024",
    organization: "Diskominfo Surakarta",
    summary:
      "Platform terpusat bagi warga Surakarta untuk menyampaikan aduan langsung dan memantau status kejadian di sekitar kota secara transparan.",
    problem:
      "Warga membutuhkan jalur komunikasi resmi dan terpercaya untuk melapor serta memantau penanganan berbagai kejadian di Kota Surakarta secara terbuka tanpa birokrasi berbelit.",
    solution:
      "Sistem informasi interaktif yang dilengkapi modul pengiriman aduan terverifikasi, pelacakan proses penanganan oleh OPD terkait, serta peta dan daftar kejadian aktual di seluruh wilayah Kota Surakarta.",
    role: "Full-stack Developer (Backend & Frontend). Merancang alur data pelaporan, integrasi basis data, implementasi antarmuka responsif, dan dashboard penanganan aduan.",
    results:
      "Sistem aktif berjalan untuk melayani masyarakat Surakarta dan saat ini sedang saya kembangkan arsitekturnya lebih mendalam sebagai topik penelitian skripsi.",
    techStack: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    link: "http://localhost:8000/",
    previewImage: "/images/hasil-ulas.png",
    accentWord: "Aduan",
  },
  {
    slug: "laras",
    index: "02",
    title: "LARAS",
    subtitle: "Layanan Agenda & Ragam Acara Surakarta",
    category: "Katalog & Agenda Kota",
    year: "2024",
    organization: "Diskominfo Surakarta",
    summary:
      "Katalog digital satu pintu yang memuat agenda kebudayaan, kesenian, dan acara resmi kota Surakarta untuk masyarakat dan wisatawan.",
    problem:
      "Informasi agenda dan acara di Kota Surakarta sebelumnya tersebar di berbagai kanal terpisah dan media sosial, menyulitkan masyarakat maupun wisatawan untuk menemukan jadwal yang valid dan terorganisir.",
    solution:
      "Membangun portal informasi agenda terpusat berbasis web yang memungkinkan masyarakat menelusuri acara berdasarkan tanggal, kategori, dan lokasi secara cepat dan intuitif.",
    role: "Full-stack Developer (Backend & Frontend). Merancang struktur database agenda, filter pencarian waktu/kategori, dan antarmuka katalog ramah gawai.",
    results:
      "Platform terpusat yang memudahkan publik dan instansi dalam mempublikasikan serta memantau kalender kegiatan kota.",
    techStack: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    link: "https://laras.alapozk.tech/",
    previewImage: "/images/hasil-laras.jpeg",
    accentWord: "Agenda",
  },
  {
    slug: "eskimo",
    index: "03",
    title: "ESKIMO",
    subtitle: "Landing Page Pengenalan Layanan",
    category: "Web Presentation",
    year: "2024",
    organization: "Project Kampus",
    summary:
      "Landing page interaktif satu halaman yang memperkenalkan fungsi dan nilai utama layanan ESKIMO kepada pengguna baru secara jernih.",
    problem:
      "Layanan ESKIMO belum memiliki halaman pengenalan resmi yang ringkas dan terstruktur, sehingga pengguna yang baru pertama kali mendengar layanan ini kesulitan memahami fungsi serta cara memulainya.",
    solution:
      "Merancang dan mengembangkan landing page responsif satu halaman yang memaparkan tujuan, keunggulan fitur, petunjuk akses, serta ajakan bertindak (call to action) yang tegas dan langsung ke sasaran.",
    role: "Front-end Developer & UI Designer. Menerjemahkan kebutuhan konseptual menjadi desain visual antarmuka dan mengembangkannya secara menyeluruh hingga tahap implementasi kode siap pakai.",
    results:
      "Halaman pengenalan modern yang siap dipakai sebagai pintu gerbang utama onboarding bagi pengguna baru layanan ESKIMO.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    link: "https://www.figma.com/design/R7bM9CVYsUhUrnu7WyC53d/Website-Eskimo?node-id=0-1&t=orYcCE1jOozrpcuP-1",
    previewImage: "/images/hasil-eskimo.png",
    accentWord: "Landing",
  },
];
