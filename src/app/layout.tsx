import type { Metadata } from "next";
import { Syne, Instrument_Serif, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.differentiatingStatement,
  metadataBase: new URL("https://porto-redomas.vercel.app"),
  openGraph: {
    title: `${siteConfig.name} — Web Developer Layanan Publik`,
    description: siteConfig.differentiatingStatement,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${syne.variable} ${instrumentSerif.variable} ${inter.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-grain antialiased select-auto">
        {children}
      </body>
    </html>
  );
}
