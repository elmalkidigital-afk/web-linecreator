import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Développement Application SaaS sur Mesure",
  description:
    "Conception d'applications SaaS personnalisées avec Next.js, React, Firebase et IA. Du MVP au produit scalable. Développeur freelance au Maroc. Appelez-moi pour un devis gratuit.",
  keywords: [
    "application SaaS",
    "développement SaaS",
    "SaaS sur mesure",
    "MVP SaaS",
    "Next.js",
    "Firebase",
    "application web",
    "freelance SaaS Maroc",
  ],
  alternates: {
    canonical: "https://web-linecreator.com/services/saas",
  },
  openGraph: {
    title: "Développement Application SaaS sur Mesure | Web-LineCreator",
    description:
      "Conception d'applications SaaS personnalisées. Du MVP au produit scalable avec Next.js, React et Firebase.",
    url: "https://web-linecreator.com/services/saas",
  },
};

export default function SaaSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
