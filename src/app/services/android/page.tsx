"use client";

import { motion } from "framer-motion";
import {
  Check,
  Zap,
  MessageCircle,
  Smartphone,
  Download,
  Bell,
  Palette,
  Wifi,
  Shield,
  Play,
  Star,
  Users,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const features = [
  {
    icon: Smartphone,
    title: "Android Natif & Cross-Platform",
    description: "Applications performantes en Kotlin/Java ou React Native pour Android et iOS.",
  },
  {
    icon: Bell,
    title: "Notifications Push",
    description: "Système de notifications en temps réel pour engager vos utilisateurs.",
  },
  {
    icon: Palette,
    title: "Material Design",
    description: "Interface moderne suivant les guidelines Material Design de Google.",
  },
  {
    icon: Download,
    title: "Publication Play Store",
    description: "Gestion complète de la publication et optimisation ASO sur Google Play.",
  },
  {
    icon: Wifi,
    title: "Mode Hors-ligne",
    description: "Fonctionnalités accessibles sans connexion avec synchronisation automatique.",
  },
  {
    icon: Shield,
    title: "Sécurité Renforcée",
    description: "Chiffrement des données, authentification biométrique et protection API.",
  },
];

const plans = [
  {
    name: "App Simple",
    price: "2 900",
    description: "Application basique fonctionnelle",
    features: [
      "3-5 écrans",
      "Design Material Design",
      "Authentification Firebase",
      "Base de données Firestore",
      "Notifications push",
      "Publication Play Store",
    ],
    popular: false,
  },
  {
    name: "App Pro",
    price: "5 900",
    description: "Application complète et performante",
    features: [
      "Tout du pack App Simple",
      "8-15 écrans",
      "API REST intégrée",
      "Mode hors-ligne",
      "Analytics avancés",
      "3 mois de support",
    ],
    popular: true,
  },
  {
    name: "App Avancée",
    price: "9 900",
    description: "Application complexe sur mesure",
    features: [
      "Tout du pack App Pro",
      "Écrans illimités",
      "Intégration IA",
      "Paiement in-app",
      "Admin panel web",
      "6 mois de support",
    ],
    popular: false,
  },
  {
    name: "Sur Mesure",
    price: "Sur devis",
    description: "Projet entièrement personnalisé",
    features: [
      "Tout du pack Avancée",
      "Architecture custom",
      "Intégrations tierces",
      "Cross-platform (iOS + Android)",
      "SLA garanti",
      "Support dédié",
    ],
    popular: false,
  },
];

const process = [
  {
    step: "01",
    title: "Spécifications",
    description: "Analyse de vos besoins, wireframes et définition du cahier des charges complet.",
  },
  {
    step: "02",
    title: "Design UI/UX",
    description: "Maquettes haute-fidélité, prototypage interactif et validation du design.",
  },
  {
    step: "03",
    title: "Développement",
    description: "Sprints agiles, tests unitaires, intégration continue et revues de code.",
  },
  {
    step: "04",
    title: "Publication",
    description: "Tests QA, optimisation ASO, publication Play Store et formation.",
  },
];

const showcase = {
  name: "HikmaClips",
  description: "Application de partage d'images de sagesse islamique. Design épuré, expérience fluide et communauté engagée.",
  stats: [
    { value: "Next.js", label: "Framework" },
    { value: "Firebase", label: "Backend" },
    { value: "PWA", label: "Type" },
    { value: "4.8★", label: "Rating" },
  ],
};

export default function AndroidPage() {
  return (
    <ServicePageLayout
      badge="Applications Mobiles"
      title="Votre application Android"
      titleHighlight="sur mesure"
      description="Des applications mobiles performantes, intuitives et publiées sur le Play Store. De l'idée à la publication, je m'occupe de tout."
      gradient="#10B981"
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
            Fonctionnalités <span className="text-gradient">incluses</span>
          </motion.h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Des applications modernes avec les meilleures pratiques du développement mobile.
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HikmaClips showcase */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Projet phare : <span className="text-gradient">{showcase.name}</span>
          </motion.h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            {showcase.description}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <div className="grid sm:grid-cols-4 gap-6 text-center">
              {showcase.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="https://hikmaclips.woosenteur.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-br from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Play className="w-4 h-4" />
                Découvrir HikmaClips
              </a>
            </div>
          </motion.div>
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
            Tarifs <span className="text-gradient">applications</span>
          </motion.h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Des forfaits adaptés à la complexité de votre application.
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
                    {plan.price === "Sur devis" ? (
                      <span className="text-2xl font-bold text-gradient">Sur devis</span>
                    ) : (
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xs text-gray-500">à partir de</span>
                        <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                        <span className="text-gray-500 text-sm">€ TTC</span>
                      </div>
                    )}
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
                      `Bonjour, je suis intéressé par le pack Android ${plan.name}.`
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
            Contactez-moi pour un devis personnalisé. Maintenance et mises à jour en option.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
