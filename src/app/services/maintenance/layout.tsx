import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance & Support Web Mensuel",
  description:
    "Service de maintenance web mensuel : mises à jour WordPress, sauvegardes, monitoring 24/7, corrections de bugs et sécurité. Sans engagement. Développeur freelance pour la France, en télétravail.",
  keywords: [
    "maintenance web",
    "support web",
    "maintenance WordPress",
    "mise à jour site",
    "sauvegarde site",
    "monitoring web",
    "sécurité web",
    "maintenance web France",
  ],
  alternates: {
    canonical: "https://web-linecreator.com/services/maintenance",
  },
  openGraph: {
    title: "Maintenance & Support Web Mensuel | Web-LineCreator",
    description:
      "Maintenance web mensuelle : mises à jour, sauvegardes, monitoring 24/7 et sécurité. Sans engagement.",
    url: "https://web-linecreator.com/services/maintenance",
  },
};

export default function MaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
