import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/navigation/Navbar";
import { Loader } from "@/components/loader/Loader";
import { SpotlightCursor } from "@/components/cursor/SpotlightCursor";
import { PageTransition } from "@/components/layout/PageTransition";
import { MobileFloatingCTA } from "@/components/navigation/MobileFloatingCTA";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE_URL = "https://manmeetcodes.in";
const SITE_TITLE = "MANTRIX — Intelligent Digital Systems";
const SITE_DESCRIPTION =
  "We engineer intelligent digital systems that help ambitious businesses grow faster.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — MANTRIX",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "MANTRIX",
    "software agency",
    "AI systems",
    "web development",
    "SaaS development",
    "CRM development",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "MANTRIX",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Runs synchronously before <body> paints. Prevents the loader
            flash: without this, SSR can't know sessionStorage, so the raw
            HTML paints Hero first and the loader pops in after hydration.
            This tags <html> before any content is visible, so CSS can hide
            the loader instantly with zero flash, on both first and repeat
            visits. */}
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function () {
        try {
          const seen =
            sessionStorage.getItem("mantrix-loader-seen") === "true";

          document.documentElement.setAttribute(
            "data-loader-seen",
            seen ? "true" : "false"
          );
        } catch (e) {
          document.documentElement.setAttribute(
            "data-loader-seen",
            "false"
          );
        }
      })();
    `,
  }}
/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          
           <a
            href="#main-content"
            className="fixed left-4 top-4 z-[var(--z-toast)] -translate-y-24 rounded-[var(--radius-md)] bg-[var(--color-accent)] px-4 py-2 text-small font-medium text-[var(--color-black)] transition-transform duration-250 focus:translate-y-0"
          >
            Skip to content
          </a>
          <Loader />
          <Background />
          <SpotlightCursor />
          <Navbar />
          <div id="main-content" className="relative z-10 pb-24 md:pb-0">
            <PageTransition>
              {children}
              </PageTransition>
          </div>
          <MobileFloatingCTA />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}