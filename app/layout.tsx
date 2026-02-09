import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL('https://veloce.agency'),
  title: "VELOCE | World-Class Web Development Agency",
  description: "VELOCE builds functional, feature-rich, and high-performance websites. Premium UI/UX, AI integration, and full-stack development for the next generation of digital experiences.",
  keywords: ["web development", "UI/UX design", "AI integration", "premium websites", "VELOCE agency"],
  authors: [{ name: "VELOCE Studio" }],
  openGraph: {
    title: "VELOCE | World-Class Development Agency",
    description: "Engineering high-velocity digital experiences that redefine the boundaries of the modern web.",
    url: "https://veloce.agency",
    siteName: "VELOCE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VELOCE | World-Class Web Development Agency",
    description: "Engineering high-velocity digital experiences.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
