import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de Web-LineCreator : données collectées, cookies, hébergement et droits RGPD.",
  alternates: {
    canonical: "https://web-linecreator.com/confidentialite",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ConfidentialiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
