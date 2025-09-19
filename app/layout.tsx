import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";

const openSansFont = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin-ext"],
  weight: ['400', '500', '700', '800']
});

export const metadata: Metadata = {
  title: "PRODOM – Budowa domów murowanych i szkieletowych od podstaw",
  description: "PRODOM – kompleksowa budowa domów murowanych i szkieletowych: ciesielstwo, dekarstwo, pokrycia dachowe, okucia, parapety, rynny oraz sprzedaż metali kolorowych. Od projektu po wykończenie.",
  robots: {
    index: !!process.env.ROBOTS_INDEX_ENABLED,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${openSansFont.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
