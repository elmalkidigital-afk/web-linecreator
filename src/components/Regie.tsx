"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap, MessageCircle, Code2, Sparkles, Smartphone } from "lucide-react";

const rates = [
  {
    name: "Développement Web",
    tjm: "50",
    icon: Code2,
    description: "Intégration & développement front/back",
    features: [
      "Next.js · React · TypeScript",
      "Intégration pixel-perfect",
      "APIs & back Node.js / Firebase",
      "Reprise, refonte & optimisation",
    ],
    popular: false,
  },
  {
    name: "SaaS + IA",
    tjm: "45",
    icon: Sparkles,
    description: "Ma spécialité : du MVP à la production",
    features: [
      "Architecture Next.js full-stack",
      "Auth, paiements Stripe, dashboards",
      "Intégration IA (Genkit, LLM)",
      "Mise en production & scalabilité",
    ],
    popular: true,
  },
  {
    name: "Application Android",
    tjm: "40",
    icon: Smartphone,
    description: "Applications mobiles natives",
    features: [
      "Kotlin natif & Flutter",
      "Material Design",
      "Publication Play Store",
      "Firebase & API REST",
    ],
    popular: false,
  },
];

export default function Regie() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="regie" className="relative py-32 px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary-light uppercase tracking-widest">
            Régie / TJM
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Travailler avec moi{" "}
            <span className="text-gradient">en régie</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pour les équipes, agences et startups : je rejoins votre projet à la
            journée, en télétravail, sur vos sprints. Un profil confirmé qui
            couvre le web, le SaaS/IA et le mobile.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rates.map((rate, i) => (
            <motion.div
              key={rate.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-2xl p-px overflow-hidden ${
                rate.popular ? "lg:-mt-4 lg:mb-[-16px]" : ""
              }`}
            >
              {rate.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-blue-500 opacity-40" />
              )}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  rate.popular ? "opacity-100" : ""
                }`}
              />

              <div className="relative bg-surface rounded-2xl p-7 h-full flex flex-col">
                {rate.popular && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-primary text-white text-xs font-medium px-4 py-1 rounded-b-lg flex items-center gap-1">
                      <Zap className="w-3 h-3" /> Spécialité
                    </div>
                  </div>
                )}

                <div className="mb-6 pt-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shrink-0">
                      <rate.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {rate.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">{rate.description}</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs text-gray-500">à partir de</span>
                    <span className="text-4xl font-bold text-gradient">
                      {rate.tjm}
                    </span>
                    <span className="text-gray-500 text-sm">€ / jour TTC</span>
                  </div>
                </div>

                <div className="space-y-3 flex-1 mb-6">
                  {rate.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-400">{feat}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/212699245542?text=${encodeURIComponent(
                    `Bonjour, je souhaite discuter d'une mission en régie (${rate.name}, ${rate.tjm}€/jour). Êtes-vous disponible ?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-full text-sm font-medium text-center transition-all flex items-center justify-center gap-2 ${
                    rate.popular
                      ? "bg-gradient-primary text-white glow-purple hover:opacity-90"
                      : "border border-border text-white hover:bg-surface-light"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Discuter d&apos;une mission
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-gray-500 mt-10"
        >
          TJM TTC — dégressif sur les missions longues · télétravail (France
          entière) · régie ou forfait au choix.
        </motion.p>
      </div>
    </section>
  );
}
