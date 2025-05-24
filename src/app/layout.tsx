import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shahzaib Rehman | Senior Software Engineer",
  description: "Portfolio of Shahzaib Rehman, a Senior Software Engineer with expertise in web development and AI solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-black overflow-x-hidden`}>
          <Navbar />
          <main>
            {children}
          </main>

      </body>
    </html>
  );
}
