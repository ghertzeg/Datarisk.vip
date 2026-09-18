import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/site/theme-provider";
import { SiteStoreBootstrap } from "@/components/site/store-bootstrap";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DATARISK MOLDOVA SRL — Cinematic studio · GDPR · Web · Apps",
  description:
    "Studio digital cinematic. Conformitate GDPR (Legea nr. 195/2024), dezvoltare web și aplicații mobile. Chișinău, Republica Moldova.",
  keywords: [
    "GDPR Moldova",
    "Legea 195/2024",
    "web development",
    "mobile apps",
    "Next.js",
    "compliance",
    "audit",
    "DPO",
    "DATARISK",
  ],
  authors: [{ name: "DATARISK MOLDOVA SRL" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "DATARISK MOLDOVA SRL — Cinematic digital studio",
    description:
      "GDPR compliance, web development and mobile apps — built with the same cinematic rigor.",
    siteName: "DATARISK MOLDOVA SRL",
    type: "website",
    locale: "ro_MD",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="dark" suppressHydrationWarning>
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="theme-color" content="#0f1115" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <SiteStoreBootstrap />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
