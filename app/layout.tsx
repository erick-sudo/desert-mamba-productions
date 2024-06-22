import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Base styles for media player and provider (~400B).
import "@vidstack/react/player/styles/base.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desert Mamba",
  description: "Desert Mamba Productions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-zinc-950" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
