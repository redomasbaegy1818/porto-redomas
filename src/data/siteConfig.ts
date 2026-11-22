export interface SiteConfig {
  name: string;
  shortName: string;
  avatar: string;
  role: string;
  roleContext: string;
  status: string;
  differentiatingStatement: string;
  bio: string;
  university: string;
  semester: number;
  location: {
    city: string;
    coordinates: string;
    timezone: string;
  };
  contact: {
    email: string;
    github: string;
    linkedin: string;
    cvPath: string;
  };
  facts: {
    number: string;
    title: string;
    description: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Redomas Baegy Hardianathan",
  shortName: "Redo",
  avatar: "/images/profil-redomas.png",
  role: "Web Developer",
  roleContext: "Sistem Informasi Layanan Publik",
  status: "TERSEDIA UNTUK MAGANG & KERJA",
  differentiatingStatement: "Saya membangun sistem layanan publik yang benar-benar dipakai warga.",
  bio: "Saya mahasiswa Informatika semester 7 yang sedang magang di Diskominfo Surakarta. Di sana saya mengembangkan ULAS, tempat warga mengirim aduan dan melihat kejadian di kota mereka, serta LARAS, wadah info agenda dan acara di Surakarta yang saya bangun dengan Laravel. Saya suka proyek yang hasilnya benar-benar dipakai orang, dan sedang mengembangkan ULAS lebih jauh sebagai bahan skripsi.",
  university: "Universitas Amikom Yogyakarta",
  semester: 7,
  location: {
    city: "Surakarta / Yogyakarta",
    coordinates: "7°34'00\"S 110°49'44\"E",
    timezone: "Asia/Jakarta",
  },
  contact: {
    email: "redohardianathan77@gmail.com",
    github: "https://github.com/redomasbaegy1818",
    linkedin: "https://www.linkedin.com/in/redomas-baegy-hardianathan-1a12033a8",
    cvPath: "/CV_Redomas_Baegy_Hardianathan.pdf",
  },
  facts: [
    {
      number: "01",
      title: "Layanan Publik Nyata",
      description:
        "Fokus membangun aplikasi pemerintahan di Diskominfo Surakarta yang bersentuhan langsung dengan kebutuhan warga kota setiap hari.",
    },
    {
      number: "02",
      title: "Pengembangan Skripsi",
      description:
        "Mendalami riset dan arsitektur sistem ULAS lebih jauh untuk tugas akhir S1 Informatika di Universitas Amikom Yogyakarta.",
    },
    {
      number: "03",
      title: "Prinsip Praktis & Andal",
      description:
        "Memilih arsitektur berbasis kebutuhan nyata (Laravel & modern stack) yang terbukti stabil, mudah dirawat, dan cepat diakses pengguna.",
    },
  ],
};
