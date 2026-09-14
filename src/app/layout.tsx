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
  title: "DATARISK MOLDOVA — Evaluarea conformității cu Legea nr. 195/2024",
  description:
    "Servicii de evaluare a conformității în domeniul protecției datelor cu caracter personal (Legea nr. 195/2024 a Republicii Moldova). Audit, documente, asistență.",
  keywords: [
    "protecția datelor",
    "date cu caracter personal",
    "Legea 195/2024",
    "conformitate",
    "audit",
    "DPO",
    "Moldova",
    "GDPR Moldova",
  ],
  authors: [{ name: "DATARISK MOLDOVA" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "DATARISK MOLDOVA — Evaluare a conformității",
    description:
      "Arătăm ce este demonstrat și nu numim încălcare ceea ce nu este demonstrat.",
    siteName: "DATARISK MOLDOVA",
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
    <html lang="ro" suppressHydrationWarning>
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="theme-color" content="#0f1115" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
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
