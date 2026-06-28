import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Haaris Wasti — Robotics Engineering",
  description: "Personal portfolio of Haaris Wasti, Robotics Engineering student at UC Santa Cruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#020b18] text-slate-200">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
