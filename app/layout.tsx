import type { Metadata } from "next";
import Head from "next/head";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";
import Script from "next/script";

const openSansFont = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin-ext"],
  weight: ['400', '500', '700', '800']
});

export const metadata: Metadata = {
  title: "PRODOM – Budowa domów murowanych i szkieletowych od podstaw",
  description: "Firma PRODOM to doświadczony wykonawca domów murowanych i szkieletowych. Oferujemy kompleksowe usługi: ciesielstwo, dekarstwo, pokrycia dachowe, okucia, parapety, rynny oraz sprzedaż metali kolorowych. Budujemy solidnie i na czas.",
  authors: [{ name: "PRODOM RAFAŁ KWAŚNY" }],
  keywords: [
    "budowa domów",
    "budowa domów jawiszowice",
    "budowa domów brzeszcze",
    "domy murowane",
    "domy szkieletowe",
    "dekarstwo",
    "ciesielstwo",
    "pokrycia dachowe",
    "parapety",
    "okucia",
    "rynny",
    "producent rynien",
    "metale kolorowe",
    "firma budowlana",
    "PRODOM"
  ],
  openGraph: {
    title: "PRODOM – Budowa domów murowanych i szkieletowych od podstaw",
    description: "Kompleksowa realizacja inwestycji – od projektu po dach. Sprawdź nasze realizacje i poznaj jakość, na której możesz polegać.",
    images: `${process.env.NEXT_PUBLIC_PAGE_URL}/images/realizacje/realizacja_63.jpg`,
    url: process.env.NEXT_PUBLIC_PAGE_URL,
    type: "website",
    locale: "pl_PL",
  },
  robots: {
    index: !!process.env.ROBOTS_INDEX_ENABLED,
    follow: true,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_PAGE_URL}/`,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <script type="application/ld+json" src="/schema.json"></script>
      </head>
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
