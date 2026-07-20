import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Développement Application Android sur Mesure",
  description:
    "Conception d'applications Android natives et cross-platform. Design Material Design, publication Play Store, notifications push. Développeur freelance confirmé pour la France, en télétravail. Contactez-moi pour un devis.",
  keywords: [
    "application Android",
    "développement mobile",
    "app Android sur mesure",
    "React Native",
    "Kotlin",
    "Play Store",
    "application mobile France",
    "freelance mobile",
  ],
  alternates: {
    canonical: "https://web-linecreator.com/services/android",
  },
  openGraph: {
    title: "Développement Application Android sur Mesure | Web-LineCreator",
    description:
      "Conception d'applications Android performantes. Design Material Design, publication Play Store et support inclus.",
    url: "https://web-linecreator.com/services/android",
  },
};

export default function AndroidLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
