"use client";

import { motion } from "framer-motion";
import {
  Check,
  Zap,
  MessageCircle,
  Shield,
  Palette,
  Users,
  Globe,
  CreditCard,
  Search,
  Headphones,
  Video,
  Server,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const features = [
  {
    icon: Globe,
    title: "Domaine + Hébergement",
    description: "Nom de domaine personnalisé et hébergement performant inclus pour 1 an.",
  },
  {
    icon: Shield,
    title: "Sécurité SSL",
    description: "Certificat SSL gratuit et sécurisation complète de votre boutique.",
  },
  {
    icon: Palette,
    title: "Design Responsive",
    description: "Thème moderne optimisé pour la conversion, adapté à tous les écrans.",
  },
  {
    icon: CreditCard,
    title: "Paiements Sécurisés",
    description: "Intégration Stripe et PayPal pour des paiements rapides et sécurisés.",
  },
  {
    icon: Search,
    title: "SEO Rank Math",
    description: "Optimisation SEO complète pour apparaître dans les premiers résultats Google.",
  },
  {
    icon: Video,
    title: "Formation Vidéo",
    description: "Sessions de formation pour gérer votre boutique en toute autonomie.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "890",
    capacity: "1-10 produits",
    description: "Idéal pour démarrer votre activité en ligne",
    features: [
      "Domaine + hébergement (1 an)",
      "WordPress / WooCommerce",
      "Thème responsive optimisé",
      "Paiement Stripe/PayPal",
      "Intégration Woosenteur IA",
      "SEO de base Rank Math",
      "1 session de formation",
    ],
    popular: false,
  },
  {
    name: "Croissance",
    price: "1590",
    capacity: "10-100 produits",
    description: "Pour développer votre boutique sérieusement",
    features: [
      "Tout du pack Starter",
      "Structure de catégories avancée",
      "Filtres de recherche basiques",
      "SEO avancé Rank Math",
      "Formation 45 minutes",
      "Support prioritaire 30 jours",
    ],
    popular: true,
  },
  {
    name: "Catalogue",
    price: "2490",
    capacity: "100-300 produits",
    description: "Pour les catalogues importants",
    features: [
      "Tout du pack Croissance",
      "Import CSV produits",
      "Filtres avancés multi-critères",
      "Optimisation vitesse",
      "Sécurité renforcée",
      "Formation approfondie",
      "Maintenance 3 mois incluse",
    ],
    popular: false,
  },
  {
    name: "Sur-mesure",
    price: "Sur devis",
    capacity: "300+ produits",
    description: "Solution entièrement personnalisée",
    features: [
      "Tout du pack Catalogue",
      "Produits illimités",
      "Sync stock complexe",
      "Fonctionnalités sur mesure",
      "Design 100% custom",
      "Accompagnement stratégique",
      "Support prioritaire",
    ],
    popular: false,
  },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    description: "On discute de votre projet, vos produits et vos objectifs commerciaux.",
  },
  {
    step: "02",
    title: "Configuration",
    description: "Domaine, hébergement, WordPress/WooCommerce, thème et paiements configurés.",
  },
  {
    step: "03",
    title: "Import & Design",
    description: "Import de vos produits, personnalisation du design et optimisation SEO.",
  },
  {
    step: "04",
    title: "Formation & Lancement",
    description: "Formation vidéo personnalisée puis mise en ligne de votre boutique !",
  },
];

export default function BoutiqueWoocommerce() {
  return (
    <ServicePageLayout
      badge="E-Commerce"
      title="Votre boutique WooCommerce"
      titleHighlight="clé en main"
      description="Je m'occupe de tout : du nom de domaine à la configuration finale. Lancez votre marque avec un site professionnel, performant et optimisé."
      gradient="#7C3AED"
    >
      {/* Features grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Tout ce qui est <span className="text-gradient">inclus</span>
          </motion.h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Une fondation solide, un design optimisé et un accompagnement humain pour lancer votre boutique sereinement.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-7 group hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Comment ça <span className="text-gradient">marche</span> ?
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-gradient mb-4">{step.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Tarifs <span className="text-gradient">transparents</span>
          </motion.h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Chaque projet est unique, donc chaque tarif l&apos;est aussi. Pas de frais cachés.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative rounded-2xl p-px overflow-hidden ${
                  plan.popular ? "lg:-mt-4 lg:mb-[-16px]" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-blue-500 opacity-40" />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-surface rounded-2xl p-7 h-full flex flex-col">
                  {plan.popular && (
                    <div className="absolute -top-px left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-primary text-white text-xs font-medium px-4 py-1 rounded-b-lg flex items-center gap-1">
                        <Zap className="w-3 h-3" /> Populaire
                      </div>
                    </div>
                  )}

                  <div className="mb-6 pt-2">
                    <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                    <p className="text-xs text-gray-500 mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      {plan.price !== "Sur devis" ? (
                        <>
                          <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                          <span className="text-gray-500 text-sm">€ TTC</span>
                        </>
                      ) : (
                        <span className="text-2xl font-bold text-gradient">{plan.price}</span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{plan.capacity}</div>
                  </div>

                  <div className="space-y-3 flex-1 mb-6">
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-400">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/212699245542?text=${encodeURIComponent(
                      `Bonjour, je suis intéressé par le pack ${plan.name} boutique WooCommerce${
                        plan.price !== "Sur devis" ? ` à ${plan.price}€` : ""
                      }.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-full text-sm font-medium text-center transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-gradient-primary text-white glow-purple hover:opacity-90"
                        : "border border-border text-white hover:bg-surface-light"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Choisir ce plan
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Tous les tarifs sont hors taxes. Option maintenance mensuelle disponible.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
