"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Globe,
  Layers,
  Smartphone,
  ShoppingCart,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Développement Web",
    description:
      "Sites vitrines modernes, landing pages performantes et applications web sur mesure avec les dernières technologies (Next.js, React, TypeScript).",
    features: ["Design responsive", "SEO optimisé", "Performance A+", "Animations fluides"],
    color: "from-violet-500 to-purple-600",
    glowColor: "rgba(139, 92, 246, 0.3)",
  },
  {
    icon: Layers,
    title: "Applications SaaS",
    description:
      "Conception et développement d'applications SaaS complètes : de l'idée au déploiement. Architecture scalable, API robustes, interfaces intuitives.",
    features: ["Architecture cloud", "API REST", "Dashboard analytics", "Scalabilité"],
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.3)",
  },
  {
    icon: Smartphone,
    title: "Applications Android",
    description:
      "Développement d'applications mobiles Android natives et performantes. Design Material You, notifications push, intégrations tierces.",
    features: ["Material Design", "Push notifications", "APIs intégrées", "Publication Play Store"],
    color: "from-green-500 to-emerald-500",
    glowColor: "rgba(34, 197, 94, 0.3)",
  },
  {
    icon: ShoppingCart,
    title: "Boutique E-commerce",
    description:
      "Création de boutiques WooCommerce et Shopify clé en main. Import produits, paiements sécurisés, SEO e-commerce et formation incluse.",
    features: ["WooCommerce / Shopify", "Paiements Stripe/PayPal", "SEO Rank Math", "Formation vidéo"],
    color: "from-orange-500 to-pink-500",
    glowColor: "rgba(249, 115, 22, 0.3)",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="group relative rounded-2xl p-px overflow-hidden"
    >
      {/* Gradient border */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
      />

      <div className="relative bg-surface rounded-2xl p-8 h-full">
        {/* Glow on hover */}
        <div
          className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
          style={{ background: service.glowColor }}
        />

        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <service.icon className="w-7 h-7 text-white" />
        </div>

        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          {service.title}
          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </h3>

        <p className="text-gray-400 mb-6 leading-relaxed text-sm">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {service.features.map((feat) => (
            <span
              key={feat}
              className="text-xs px-3 py-1.5 rounded-full bg-surface-light text-gray-300 border border-border"
            >
              {feat}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary-light uppercase tracking-widest">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Ce que je peux{" "}
            <span className="text-gradient">créer pour vous</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Des solutions digitales complètes, du design au déploiement, adaptées
            à vos besoins et à votre budget.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
