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
  metadataBase: new URL('https://velocenow.com'),
  title: "VELOCE | World-Class Web Development Agency",
  description: "VELOCE builds functional, feature-rich, and high-performance websites. Premium UI/UX, AI integration, and full-stack development for the next generation of digital experiences.",
  keywords: ["web development", "UI/UX design", "AI integration", "premium websites", "VELOCE agency"],
  authors: [{ name: "VELOCE Studio" }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "VELOCE | World-Class Development Agency",
    description: "Engineering high-velocity digital experiences that redefine the boundaries of the modern web.",
    url: "https://velocenow.com",
    siteName: "VELOCE",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VELOCE | World-Class Web Development Agency",
    description: "Engineering high-velocity digital experiences.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}
      >
        {children}
      </body>
    </html>
  );
}
