import type { Metadata } from "next";
import { Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const kalam = Kalam({
  subsets: ["latin"],
  variable: "--font-kalam",
  weight: ["400", "700"],
  display: "swap",
});

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  variable: "--font-patrick-hand",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arion AI — Recruiting Intelligence Built on Correctness",
  description:
    "Arion scores interview answers on factual correctness, not keyword matching or fluency. Stop advancing the wrong candidates. Built for staffing firms.",
  keywords: ["recruiting AI", "interview screening", "staffing software", "hiring intelligence"],
  openGraph: {
    title: "Arion AI — Recruiting Intelligence Built on Correctness",
    description: "Stop advancing the wrong candidates. Arion scores interview answers on correctness, not fluency.",
    url: "https://arionaisolutions.com",
    siteName: "Arion AI",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kalam.variable} ${patrickHand.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col text-[#2d2d2d]">
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
