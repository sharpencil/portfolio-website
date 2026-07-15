import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://youngryu.com"),
  title: {
    default: "Young Ryu, Ph.D. | Director of UX & Product Design",
    template: "%s | Young Ryu, Ph.D.",
  },
  description: "Portfolio of Young Ryu, Ph.D. — Director of UX, Senior UX Architect, and Cognitive Systems Engineer.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Young Ryu, Ph.D. | Director of UX & Product Design",
    description: "Portfolio of Young Ryu, Ph.D. — Director of UX, Senior UX Architect, and Cognitive Systems Engineer.",
    url: "https://youngryu.com",
    siteName: "Young Ryu, Ph.D. Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Young Ryu, Ph.D. | Director of UX & Product Design",
    description: "Portfolio of Young Ryu, Ph.D. — Director of UX, Senior UX Architect, and Cognitive Systems Engineer.",
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
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-white text-authority-navy`}
        suppressHydrationWarning
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
