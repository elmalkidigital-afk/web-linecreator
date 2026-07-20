"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const rotating = [
  "applications SaaS",
  "apps Android",
  "boutiques e-commerce",
  "sites sur mesure",
];

const stack = ["Next.js", "React", "Firebase", "IA · Genkit", "Kotlin / Flutter", "WooCommerce"];

const stats = [
  { value: "15+", label: "Projets livrés" },
  { value: "4.9/5", label: "Note clients" },
  { value: "25+", label: "Avis positifs" },
  { value: "100%", label: "Satisfaction" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % rotating.length),
      2400
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative min-h-[100svh] max-h-[1000px] flex items-center justify-center overflow-hidden gradient-bg pt-28 pb-10 md:pt-32 md:pb-14"
      style={{ zIndex: 0 }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] max-w-[130vw] hero-glow rounded-full opacity-70" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[520px] h-[520px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
            top: "-12%",
            right: "-8%",
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[460px] h-[460px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
            bottom: "-6%",
            left: "-6%",
          }}
          animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 glass rounded-full pl-2.5 pr-4 py-1.5 mb-7 text-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="text-gray-300">
            Disponible · missions en régie ou forfait
          </span>
        </motion.div>

        {/* Headline with rotating specialty */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-5"
        >
          Je conçois vos
          <span className="block h-[1.15em] overflow-hidden mt-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="block text-gradient"
              >
                {rotating[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-7 leading-relaxed"
        >
          Développeur freelance confirmé : je transforme vos idées en produits
          qui tournent — du MVP à la mise en production, en télétravail pour la
          France.
        </motion.p>

        {/* Tech stack chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-2 mb-9"
        >
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-surface/60 text-gray-400 border border-border backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
        >
          <a
            href="#projets"
            className="group relative overflow-hidden animate-shine bg-gradient-primary text-white px-7 py-3.5 md:px-8 md:py-4 rounded-full text-base md:text-lg font-medium hover:opacity-95 transition-all inline-flex items-center justify-center gap-2 glow-purple"
          >
            Voir mes projets
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#regie"
            className="border border-border text-white px-7 py-3.5 md:px-8 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-surface-light hover:border-primary/40 transition-all inline-flex items-center justify-center"
          >
            Voir mon TJM
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 md:mt-14 mx-auto max-w-3xl glass rounded-2xl px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-y-5 divide-border md:divide-x"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:px-2">
              <div className="text-2xl md:text-4xl font-bold text-gradient mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#services"
        aria-label="Défiler vers le bas"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-gray-500 hover:text-white transition-colors"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.span>
      </motion.a>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
