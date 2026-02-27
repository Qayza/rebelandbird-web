import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rebel and Bird — Agentic-first studio",
  description:
    "Vi skapar digitala upplevelser som gör verklig skillnad. UX-design, tjänstedesign, AI, agentic services och utveckling.",
  openGraph: {
    title: "Rebel and Bird",
    description: "Agentic-first studio",
    url: "https://www.rebelandbird.com",
    siteName: "Rebel and Bird",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="dark">
      <body className={`${orbitron.variable} ${inter.variable} antialiased bg-arcade-black text-white`}>
        {children}
      </body>
    </html>
  );
}
