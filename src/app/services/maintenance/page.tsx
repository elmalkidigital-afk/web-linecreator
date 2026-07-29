"use client";

import { motion } from "framer-motion";
import {
  Check,
  MessageCircle,
  Shield,
  RefreshCw,
  Headphones,
  BarChart3,
  Server,
  Zap,
  Clock,
  Bug,
  FileText,
  ArrowRight,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const features = [
  {
    icon: RefreshCw,
    title: "Mises à jour régulières",
    description: "WordPress, thèmes, plugins et dépendances toujours à jour pour la sécurité et la performance.",
  },
  {
    icon: Shield,
    title: "Sécurité proactive",
    description: "Surveillance des failles, firewall, scan anti-malware et sauvegardes automatiques.",
  },
  {
    icon: Server,
    title: "Monitoring 24/7",
    description: "Surveillance de la disponibilité de votre site avec alertes en temps réel.",
  },
  {
    icon: Headphones,
    title: "Support prioritaire",
    description: "Réponse sous 24h pour toutes vos questions et demandes de modifications.",
  },
  {
    icon: BarChart3,
    title: "Rapport mensuel",
    description: "Rapport détaillé : uptime, performances, mises à jour effectuées et recommandations.",
  },
  {
    icon: Bug,
    title: "Corrections de bugs",
    description: "Résolution rapide des bugs et dysfonctionnements sans surcoût.",
  },
];

const included = [
  "Mises à jour WordPress/CMS",
  "Mises à jour thèmes et plugins",
  "Sauvegardes hebdomadaires",
  "Surveillance uptime 24/7",
  "Scan de sécurité mensuel",
  "Corrections de bugs",
  "Optimisation des performances",
  "Support email prioritaire",
  "1h de modifications par mois",
  "Rapport mensuel détaillé",
  "Renouvellement SSL",
  "Optimisation base de données",
];

const faq = [
  {
    q: "Que se passe-t-il si mon site tombe en panne ?",
    a: "Je suis alerté immédiatement grâce au monitoring 24/7 et j'interviens dans les plus brefs délais pour rétablir votre site.",
  },
  {
    q: "Les modifications sont-elles incluses ?",
    a: "Oui, 1 heure de modifications mineures par mois est incluse (textes, images, ajustements). Les modifications majeures font l'objet d'un devis séparé.",
  },
  {
    q: "Puis-je résilier à tout moment ?",
    a: "Oui, l'abonnement est sans engagement. Vous pouvez résilier à la fin de chaque mois.",
  },
  {
    q: "Comment se passe le support ?",
    a: "Par WhatsApp ou email, je réponds sous 24h en jours ouvrés. Pour les urgences, je suis joignable par téléphone.",
  },
];

export default function MaintenancePage() {
  return (
    <ServicePageLayout
      badge="Maintenance"
      title="Maintenance web"
      titleHighlight="sans stress"
      description="Votre site web mérite une attention continue. Je m'occupe de tout pour que vous puissiez vous concentrer sur votre activité."
      gradient="#F59E0B"
    >
      {/* Price hero */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden p-px"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-40" />
            <div className="relative bg-surface rounded-3xl p-10 md:p-14 text-center">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4" />
                Tarif unique — Sans engagement
              </div>

              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-6xl md:text-8xl font-bold text-gradient">79</span>
                <div className="text-left">
                  <span className="text-2xl font-bold text-white">€</span>
                  <span className="text-gray-400 text-sm block">TTC / mois</span>
                </div>
              </div>

              <p className="text-gray-400 max-w-xl mx-auto mb-8">
                Tout ce dont votre site a besoin pour rester sécurisé, rapide et à jour. Un tarif simple, sans surprise.
              </p>

              <a
                href="https://wa.me/212699245542?text=Bonjour, je suis intéressé par votre offre de maintenance à 79€/mois."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-br from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Souscrire maintenant
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Ce qui est <span className="text-gradient">inclus</span>
          </motion.h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Un service complet pour garder votre site en parfait état.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-7 group hover:border-amber-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Tout est <span className="text-gradient">inclus</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {included.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-sm text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Questions <span className="text-gradient">fréquentes</span>
          </motion.h2>

          <div className="space-y-4">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <h4 className="font-bold text-white mb-2 flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                  {item.q}
                </h4>
                <p className="text-sm text-gray-400 ml-6">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
