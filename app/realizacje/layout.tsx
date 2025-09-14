import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PRODOM – Realizacje",
  description: "Realizacje firmy PRODOM – zobacz nasze domy murowane i szkieletowe, dachy, okucia i inne projekty.",
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
