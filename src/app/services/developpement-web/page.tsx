"use client";

import { motion } from "framer-motion";
import {
  Check,
  Zap,
  MessageCircle,
  Globe,
  Search,
  Smartphone,
  Gauge,
  Palette,
  Shield,
  Code,
  FileText,
  Mail,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const features = [
  {
    icon: Palette,
    title: "Design Sur Mesure",
    description: "Un design unique créé spécialement pour votre marque, pas de template générique.",
  },
  {
    icon: Smartphone,
    title: "100% Responsive",
    description: "Votre site s'adapte parfaitement à tous les écrans : mobile, tablette, desktop.",
  },
  {
    icon: Gauge,
    title: "Performance Optimale",
    description: "Score Google PageSpeed 90+, temps de chargement ultra-rapide.",
  },
  {
    icon: Search,
    title: "SEO Optimisé",
    description: "Référencement naturel intégré dès la conception pour être visible sur Google.",
  },
  {
    icon: Shield,
    title: "Sécurisé & SSL",
    description: "Certificat SSL, protection anti-spam et sauvegardes automatiques.",
  },
  {
    icon: FileText,
    title: "CMS Intégré",
    description: "WordPress ou headless CMS pour gérer votre contenu en toute autonomie.",
  },
];

const siteTypes = [
  {
    title: "Site Vitrine",
    description: "Présentez votre activité avec élégance",
    examples: ["Page d'accueil percutante", "Pages services", "À propos", "Contact", "Blog"],
    icon: Globe,
  },
  {
    title: "Landing Page",
    description: "Page unique optimisée pour la conversion",
    examples: ["Design impactant", "Call-to-action clair", "Formulaire de contact", "A/B testing", "Analytics"],
    icon: Gauge,
  },
  {
    title: "Blog / Portfolio",
    description: "Partagez votre expertise et vos réalisations",
    examples: ["Articles optimisés SEO", "Galerie projets", "Filtres catégories", "Newsletter", "RSS"],
    icon: FileText,
  },
  {
    title: "Site Corporate",
    description: "Site professionnel multi-pages complet",
    examples: ["Multi-langues", "Espace presse", "Recrutement", "Documentation", "Intranet"],
    icon: Code,
  },
];

const plans = [
  {
    name: "One Page",
    price: "149",
    description: "Page unique professionnelle",
    features: [
      "1 page complète",
      "Design responsive",
      "Formulaire de contact",
      "SEO de base",
      "Hébergement 1 an",
      "Certificat SSL",
    ],
    popular: false,
  },
  {
    name: "Vitrine",
    price: "349",
    description: "Site vitrine complet",
    features: [
      "5-7 pages",
      "Design sur mesure",
      "Blog intégré",
      "SEO avancé Rank Math",
      "Google Analytics",
      "Formation 30 min",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "599",
    description: "Site professionnel avancé",
    features: [
      "Tout du pack Vitrine",
      "10-15 pages",
      "Multi-langues",
      "Animations avancées",
      "Performance optimisée",
      "Support 3 mois",
    ],
    popular: false,
  },
  {
    name: "Sur Mesure",
    price: "Sur devis",
    description: "Projet web complexe",
    features: [
      "Tout du pack Business",
      "Pages illimitées",
      "Fonctionnalités custom",
      "Intégrations API",
      "Design premium",
      "Support dédié",
    ],
    popular: false,
  },
];

const process = [
  {
    step: "01",
    title: "Analyse & Brief",
    description: "Étude de votre activité, de vos objectifs et de vos concurrents.",
  },
  {
    step: "02",
    title: "Maquettes & Design",
    description: "Création du design, choix des couleurs, typographies et mise en page.",
  },
  {
    step: "03",
    title: "Développement",
    description: "Intégration du design, développement WordPress/Next.js et optimisation.",
  },
  {
    step: "04",
    title: "Livraison & Formation",
    description: "Mise en ligne, formation à la gestion du contenu et support post-lancement.",
  },
];

export default function DevWebPage() {
  return (
    <ServicePageLayout
      badge="Développement Web"
      title="Votre site web"
      titleHighlight="professionnel"
      description="Sites vitrines, landing pages, blogs et sites corporate. Un design sur mesure, responsive et optimisé SEO pour développer votre présence en ligne."
      gradient="#3B82F6"
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
            Chaque site est <span className="text-gradient">unique</span>
          </motion.h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Pas de template copié-collé. Chaque projet est conçu sur mesure pour refléter votre identité.
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de sites */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Types de <span className="text-gradient">sites</span>
          </motion.h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Quel que soit votre besoin, j&apos;ai la solution adaptée.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {siteTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-7 group hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{type.title}</h3>
                    <p className="text-sm text-gray-400">{type.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {type.examples.map((ex) => (
                    <div key={ex} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary-light shrink-0" />
                      <span className="text-sm text-gray-400">{ex}</span>
                    </div>
                  ))}
                </div>
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
            Mon <span className="text-gradient">process</span>
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
            Des prix justes pour un travail de qualité.
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
                          <span className="text-gray-500 text-sm">€ HT</span>
                        </>
                      ) : (
                        <span className="text-2xl font-bold text-gradient">{plan.price}</span>
                      )}
                    </div>
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
                      `Bonjour, je suis intéressé par le pack ${plan.name}${
                        plan.price !== "Sur devis" ? ` à ${plan.price}€` : ""
                      } pour un site web.`
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
            Tous les tarifs sont hors taxes. Maintenance mensuelle disponible en option.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
