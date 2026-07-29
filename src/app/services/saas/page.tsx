"use client";

import { motion } from "framer-motion";
import {
  Check,
  Zap,
  MessageCircle,
  Brain,
  BarChart3,
  Smartphone,
  Cloud,
  Shield,
  Rocket,
  Database,
  Globe,
  Layers,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const features = [
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Intégration d'IA pour automatiser et optimiser vos processus métier.",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Architecture cloud scalable sur Firebase, AWS ou Google Cloud.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Analytics",
    description: "Tableaux de bord en temps réel pour suivre vos KPIs et performances.",
  },
  {
    icon: Shield,
    title: "Sécurité & Auth",
    description: "Authentification sécurisée, gestion des rôles et protection des données.",
  },
  {
    icon: Database,
    title: "Base de données",
    description: "Architecture Firestore, PostgreSQL ou MongoDB selon vos besoins.",
  },
  {
    icon: Smartphone,
    title: "Progressive Web App",
    description: "Application installable sur mobile avec notifications push.",
  },
];

const plans = [
  {
    name: "MVP",
    price: "4 900",
    description: "Validez votre idée rapidement",
    features: [
      "Landing page + inscription",
      "Authentification utilisateurs",
      "1 fonctionnalité cœur",
      "Dashboard basique",
      "Déploiement Firebase",
      "1 mois de support",
    ],
    popular: false,
  },
  {
    name: "Startup",
    price: "8 900",
    description: "Lancez votre produit SaaS",
    features: [
      "Tout du pack MVP",
      "3-5 fonctionnalités",
      "Système de paiement (Stripe)",
      "Dashboard analytics",
      "API RESTful",
      "3 mois de support",
    ],
    popular: true,
  },
  {
    name: "Scale",
    price: "14 900",
    description: "Pour une croissance sérieuse",
    features: [
      "Tout du pack Startup",
      "Intégration IA",
      "Multi-tenant architecture",
      "Admin panel complet",
      "CI/CD pipeline",
      "6 mois de support",
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    description: "Solution sur mesure complète",
    features: [
      "Tout du pack Scale",
      "Architecture microservices",
      "Intégrations custom",
      "SLA garanti",
      "Support dédié illimité",
      "Formation équipe",
    ],
    popular: false,
  },
];

const process = [
  {
    step: "01",
    title: "Idéation & Stratégie",
    description: "On analyse votre marché, vos utilisateurs cibles et on définit les fonctionnalités clés.",
  },
  {
    step: "02",
    title: "Design UI/UX",
    description: "Maquettes interactives Figma, parcours utilisateur optimisé et design system cohérent.",
  },
  {
    step: "03",
    title: "Développement",
    description: "Code propre en Next.js/React, API robuste, tests automatisés et intégration continue.",
  },
  {
    step: "04",
    title: "Lancement & Croissance",
    description: "Déploiement, monitoring, analytics et itérations basées sur les retours utilisateurs.",
  },
];

const techStack = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Firebase", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Stripe", category: "Paiement" },
  { name: "OpenAI API", category: "IA" },
  { name: "Vercel", category: "Hosting" },
  { name: "Google Cloud", category: "Cloud" },
];

export default function SaaSPage() {
  return (
    <ServicePageLayout
      badge="SaaS"
      title="Votre application SaaS"
      titleHighlight="sur mesure"
      description="De l'idée au produit. Je conçois et développe votre application SaaS avec les technologies les plus modernes pour une expérience utilisateur exceptionnelle."
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
            Ce que je <span className="text-gradient">développe</span>
          </motion.h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Des applications web complètes avec les meilleures pratiques du développement moderne.
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

      {/* Woosenteur showcase */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Projet phare : <span className="text-gradient">Woosenteur</span>
          </motion.h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Plateforme SaaS e-commerce propulsée par l&apos;IA pour les vendeurs de cosmétiques.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden"
            >
              <video
                src="https://res.cloudinary.com/dk93srhfb/video/upload/v1770811812/woosenteur-promo_ufxuag.mp4"
                controls
                className="w-full aspect-video object-cover"
                preload="metadata"
                poster=""
              />
              <div className="p-5">
                <h4 className="font-bold text-white mb-1">Présentation Woosenteur</h4>
                <p className="text-sm text-gray-400">Découvrez la plateforme en action</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden"
            >
              <video
                src="https://res.cloudinary.com/dk93srhfb/video/upload/v1770811811/tiktok-woosenteur_lyu4ne.mp4"
                controls
                className="w-full aspect-video object-cover"
                preload="metadata"
                poster=""
              />
              <div className="p-5">
                <h4 className="font-bold text-white mb-1">Woosenteur en 60 secondes</h4>
                <p className="text-sm text-gray-400">Version courte pour les réseaux sociaux</p>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 glass rounded-2xl p-8">
            <div className="grid sm:grid-cols-4 gap-6 text-center">
              {[
                { value: "500+", label: "Utilisateurs" },
                { value: "IA", label: "Génération de contenu" },
                { value: "Next.js", label: "Framework" },
                { value: "Firebase", label: "Backend" },
              ].map((stat, i) => (
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
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Stack <span className="text-gradient">technique</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-full px-5 py-2.5 flex items-center gap-2 hover:border-primary/30 transition-colors"
              >
                <Layers className="w-4 h-4 text-primary-light" />
                <span className="text-sm text-white font-medium">{tech.name}</span>
                <span className="text-xs text-gray-500">{tech.category}</span>
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
            Investissement <span className="text-gradient">SaaS</span>
          </motion.h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Des formules adaptées à chaque stade de votre projet SaaS.
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
                      `Bonjour, je suis intéressé par le pack SaaS ${plan.name}.`
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
            Contactez-moi pour un devis personnalisé. Hébergement et maintenance en option.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
