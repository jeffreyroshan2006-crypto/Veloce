import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://veloce.agency'),
  title: "VELOCE | World-Class Web Development Agency",
  description: "VELOCE builds functional, feature-rich, and high-performance websites. Premium UI/UX, AI integration, and full-stack development for the next generation of digital experiences.",
  keywords: ["web development", "UI/UX design", "AI integration", "premium websites", "VELOCE agency"],
  authors: [{ name: "VELOCE Studio" }],
  openGraph: {
    title: "VELOCE | World-Class Web Development Agency",
    description: "Engineering high-velocity digital experiences that redefine the boundaries of the modern web.",
    url: "https://veloce.agency",
    siteName: "VELOCE",
    images: [
      {
        url: "/og-image.jpg", // Placeholder for actual OG image
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
