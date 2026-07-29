"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Standard",
    price: "600",
    capacity: "Jusqu'à 50 produits",
    description: "Pour lancer votre boutique en ligne",
    features: [
      "Domaine + hébergement (1 an)",
      "WordPress / WooCommerce",
      "Paiement Stripe/PayPal",
      "Fiches produit optimisées",
      "SEO de base",
      "Design responsive",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "800",
    capacity: "+100 produits",
    description: "Pour les catalogues plus importants",
    features: [
      "Tout du pack Standard",
      "SEO poussé",
      "Fiche établissement Google Search Console",
      "Fiches produit optimisées premium",
      "Structure de catégories avancée",
      "Formation approfondie",
    ],
    popular: true,
  },
  {
    name: "Sur-mesure",
    price: "Sur devis",
    capacity: "Sur devis, après un appel",
    description: "Réservons un appel pour discuter de votre projet",
    features: [
      "Tout du pack Pro",
      "Produits illimités",
      "Fonctionnalités sur mesure",
      "Design 100% custom",
      "Accompagnement stratégique",
      "Support prioritaire",
    ],
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tarifs" className="relative py-32 px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary-light uppercase tracking-widest">
            Tarifs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Offres{" "}
            <span className="text-gradient">conception de boutique</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un tarif juste et transparent, adapté à votre projet. Chaque projet
            est unique, donc chaque tarif l&apos;est aussi.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-2xl p-px overflow-hidden ${
                plan.popular ? "lg:-mt-4 lg:mb-[-16px]" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-blue-500 opacity-40" />
              )}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  plan.popular ? "opacity-100" : ""
                }`}
              />

              <div className="relative bg-surface rounded-2xl p-7 h-full flex flex-col">
                {plan.popular && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-primary text-white text-xs font-medium px-4 py-1 rounded-b-lg flex items-center gap-1">
                      <Zap className="w-3 h-3" /> Populaire
                    </div>
                  </div>
                )}

                <div className="mb-6 pt-2">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1.5">
                    {plan.price !== "Sur devis" ? (
                      <>
                        <span className="text-xs text-gray-500">à partir de</span>
                        <span className="text-4xl font-bold text-gradient">
                          {plan.price}
                        </span>
                        <span className="text-gray-500 text-sm">€ TTC</span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-gradient">
                        {plan.price}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {plan.capacity}
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
                    }. Pouvez-vous m'en dire plus ?`
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-gray-500 mb-4">
            Tous les tarifs sont TTC. Maintenance mensuelle disponible en
            option.
          </p>
          <a
            href="https://wa.me/212699245542?text=Bonjour, je souhaite demander un devis gratuit pour mon projet."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full text-sm font-medium glow-purple hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" />
            Demander mon devis gratuit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
