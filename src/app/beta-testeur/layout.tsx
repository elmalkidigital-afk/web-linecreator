import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programme Beta Testeur",
  description:
    "Devenez beta-testeur des applications Android en cours de développement : accédez en avant-première, testez et gardez l'application après sa sortie officielle.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function BetaTesteurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
