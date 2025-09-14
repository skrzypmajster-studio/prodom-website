import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PRODOM – Realizacja: Dom jednorodzinny Warszawa",
  description: "Szczegóły realizacji: Dom jednorodzinny w Warszawie – firma PRODOM.",
  robots: {
    index: false, // enable only for production environment
  }
};

export default function RealizationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
