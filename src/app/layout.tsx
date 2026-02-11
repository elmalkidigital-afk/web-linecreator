import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abderrahmane El Malki | Développeur Web, SaaS & Apps",
  description:
    "Développeur web freelance spécialisé en création de sites, applications SaaS, apps Android et boutiques e-commerce. Créateur de Woosenteur v2.",
  keywords: [
    "développeur web",
    "freelance",
    "SaaS",
    "application Android",
    "e-commerce",
    "WooCommerce",
    "Shopify",
    "Next.js",
    "React",
  ],
  openGraph: {
    title: "Abderrahmane El Malki | Développeur Web, SaaS & Apps",
    description:
      "Développeur web freelance spécialisé en création de sites, applications SaaS, apps Android et boutiques e-commerce.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
