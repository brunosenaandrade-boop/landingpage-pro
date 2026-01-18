import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Seguro Pneu Pro | Sistema de Assistência para Pneus",
  description: "Sistema completo com 3 aplicativos profissionais para você criar seu negócio de assistência para pneus. Desenvolvimento sob medida.",
  keywords: ["assistência pneus", "app socorro pneu", "sistema assistência veicular"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-zinc-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
