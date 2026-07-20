import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/navigation/Navbar";
import { Loader } from "@/components/loader/Loader";
import { SpotlightCursor } from "@/components/cursor/SpotlightCursor";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MANTRIX — Intelligent Digital Systems",
  description:
    "We engineer intelligent digital systems that help ambitious businesses grow faster.",
};

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <ThemeProvider>
//           <Loader />
//           <Background />
//           <SpotlightCursor />
//           <Navbar />
//           < div className="relative z-10">{children}</div>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider>
          <Loader />
          <Background />
          <SpotlightCursor />
          <Navbar />

          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}