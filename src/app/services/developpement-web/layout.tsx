import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conception Site Web Professionnel sur Mesure",
  description:
    "Conception de sites web professionnels : site vitrine, one page, site business multilangue. Design moderne, SEO optimisé. Développeur web freelance confirmé pour la France, en télétravail.",
  keywords: [
    "conception site web",
    "site vitrine",
    "site web professionnel",
    "développement web",
    "site one page",
    "site multilangue",
    "web design",
    "freelance web France",
  ],
  alternates: {
    canonical: "https://web-linecreator.com/services/developpement-web",
  },
  openGraph: {
    title: "Conception Site Web Professionnel | Web-LineCreator",
    description:
      "Sites web professionnels sur mesure : vitrine, one page, business multilangue. Design moderne et SEO optimisé.",
    url: "https://web-linecreator.com/services/developpement-web",
  },
};

export default function DevWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
