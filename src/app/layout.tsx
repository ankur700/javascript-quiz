import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Site } from "@/lib/utils/config";
import Navbar from "@/lib/components/Navbar";
import { QuizProvider } from "@/lib/components/QuizProvider";
import { ThemeProvider } from "@/lib/components/theme-provider";
import { Toaster } from "@/components/components/ui/toaster";

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
            <main className="w-full">
              <div className="container max-w-5xl w-full mx-auto gap-4 p-4">
                <div className="min-h-[100vh] flex-1 w-full rounded-xl md:min-h-min" >
                  {children}
                </div>
              </div>
            </main>
            <Toaster />
          </QuizProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
