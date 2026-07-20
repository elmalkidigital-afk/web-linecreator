import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://web-linecreator.com"),
  title: {
    default: "Abderrahmane El Malki | Développeur Web Freelance SaaS & Apps — France",
    template: "%s | Web-LineCreator",
  },
  description:
    "Développeur web freelance confirmé pour la France : conception de sites web, applications SaaS, apps Android et boutiques WooCommerce. Concepteur de Woosenteur. Missions en régie (TJM) ou au forfait, en télétravail. Devis gratuit.",
  keywords: [
    "développeur web freelance",
    "développeur web France",
    "développeur freelance France",
    "conception site web",
    "application SaaS",
    "application Android",
    "boutique WooCommerce",
    "e-commerce",
    "Next.js",
    "React",
    "freelance France",
    "TJM développeur freelance",
    "développeur fullstack",
    "conception application mobile",
    "site vitrine",
    "maintenance web",
  ],
  authors: [{ name: "Abderrahmane El Malki" }],
  creator: "Abderrahmane El Malki",
  publisher: "Web-LineCreator",
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://web-linecreator.com",
  },
  openGraph: {
    title: "Abderrahmane El Malki | Développeur Web Freelance, SaaS & Apps",
    description:
      "Développeur web freelance spécialisé en conception de sites, applications SaaS, apps Android et boutiques e-commerce. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    url: "https://web-linecreator.com",
    siteName: "Web-LineCreator",
    images: [
      {
        url: "https://res.cloudinary.com/dk93srhfb/image/upload/v1770877614/grok_image_1770877529608_iv24ft.jpg",
        width: 1200,
        height: 630,
        alt: "Web-LineCreator - Développeur Web Freelance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abderrahmane El Malki | Développeur Web Freelance",
    description:
      "Développeur web freelance spécialisé en conception de sites, SaaS, apps Android et boutiques e-commerce.",
    images: [
      "https://res.cloudinary.com/dk93srhfb/image/upload/v1770877614/grok_image_1770877529608_iv24ft.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Web-LineCreator",
              url: "https://web-linecreator.com",
              logo: "https://res.cloudinary.com/dk93srhfb/image/upload/v1770877614/grok_image_1770877529608_iv24ft.jpg",
              image:
                "https://res.cloudinary.com/dk93srhfb/image/upload/v1770877614/grok_image_1770877529608_iv24ft.jpg",
              description:
                "Développeur web freelance confirmé pour la France, spécialisé en conception de sites web, applications SaaS, apps Android et boutiques WooCommerce. Missions en régie ou au forfait, en télétravail.",
              founder: {
                "@type": "Person",
                name: "Abderrahmane El Malki",
                jobTitle: "Développeur Web Fullstack",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "MA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                url: "https://wa.me/212699245542",
                availableLanguage: ["French", "Arabic"],
              },
              sameAs: [],
              serviceType: [
                "Développement Web",
                "Application SaaS",
                "Application Android",
                "Boutique WooCommerce",
                "Maintenance Web",
              ],
              areaServed: {
                "@type": "Country",
                name: "France",
              },
              priceRange: "$$",
              knowsAbout: [
                "Next.js",
                "React",
                "TypeScript",
                "Firebase",
                "Node.js",
                "WordPress",
                "WooCommerce",
                "Tailwind CSS",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
