import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Site } from "@/lib/utils/config";
import Navbar from "@/lib/components/Navbar";
import { QuizProvider } from "@/lib/components/QuizProvider";
import { ThemeProvider } from "@/lib/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: Site.title,
  description: Site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QuizProvider>
            <Navbar />
            <main className="w-full h-full flex items-center justify-center">
              {children}
            </main>
            <Toaster />
          </QuizProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
