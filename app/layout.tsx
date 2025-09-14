import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/Navbar";
import { MaintenanceModePage } from "./_pages/maintenance/MaintenanceModePage";

const openSansFont = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin-ext"],
  weight: ['400', '500', '700', '800']
});

export const metadata: Metadata = {
  title: "PRODOM – Budowa domów murowanych i szkieletowych od podstaw",
  description: "PRODOM – kompleksowa budowa domów murowanych i szkieletowych: ciesielstwo, dekarstwo, pokrycia dachowe, okucia, parapety, rynny oraz sprzedaż metali kolorowych. Od projektu po wykończenie.",
  robots: {
    index: false, // enable only for production environment
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!!process.env.MAINTENANCE_MODE_ENABLED) {
    return <MaintenanceModePage />;
  }


  return (
    <html lang="pl">
      <body
        className={`${openSansFont.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
