import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

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
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-black overflow-x-hidden antialiased`}>
          <Navbar />
          <main>
            {children}
          </main>
      </body>
    </html>
  );
}
