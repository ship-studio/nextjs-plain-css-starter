import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/main.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Northwind — plain-CSS Next.js starter",
  description:
    "A Next.js starter styled with plain, class-based CSS — no Tailwind, no UI framework.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
