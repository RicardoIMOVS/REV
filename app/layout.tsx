import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "REVOLUTION PHARMA | Ecosistema de suplementos",
  description:
    "Ecosistema de suplementos alimenticios para distribución, marca privada, ingredientes y BĀSE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
