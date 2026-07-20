import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conception Boutique WooCommerce E-commerce",
  description:
    "Conception de boutiques en ligne WooCommerce professionnelles. WordPress, Stripe, PayPal, SEO optimisé. Développeur e-commerce freelance pour la France, en télétravail. Devis gratuit.",
  keywords: [
    "boutique WooCommerce",
    "conception e-commerce",
    "site e-commerce",
    "WordPress WooCommerce",
    "boutique en ligne",
    "Stripe",
    "PayPal",
    "e-commerce France",
  ],
  alternates: {
    canonical: "https://web-linecreator.com/services/boutique-woocommerce",
  },
  openGraph: {
    title: "Conception Boutique WooCommerce E-commerce | Web-LineCreator",
    description:
      "Boutiques en ligne WooCommerce professionnelles avec WordPress, Stripe et PayPal. SEO optimisé.",
    url: "https://web-linecreator.com/services/boutique-woocommerce",
  },
};

export default function WooCommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
