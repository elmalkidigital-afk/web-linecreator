"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100svh] max-h-[900px] flex items-center justify-center overflow-hidden gradient-bg pt-16 pb-6 md:pt-20 md:pb-8" style={{ zIndex: 0 }}>
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
            top: "-10%",
            right: "-10%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
            bottom: "-5%",
            left: "-5%",
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #A78BFA 0%, transparent 70%)",
            top: "40%",
            left: "50%",
          }}
          animate={{
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Subtle noise overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 md:mb-6"
        >
          Je conçois vos{" "}
          <span className="text-gradient">solutions digitales</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed"
        >
          Développeur web freelance spécialisé en sites vitrines, applications
          SaaS, apps Android et boutiques e-commerce clé en main.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
        >
          <a
            href="#projets"
            className="group bg-gradient-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-medium hover:opacity-90 transition-all inline-flex items-center justify-center gap-2 glow-purple"
          >
            Voir mes projets
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#tarifs"
            className="border border-border text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-surface-light transition-all inline-flex items-center justify-center"
          >
            Découvrir mes offres
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "15+", label: "Projets livrés" },
            { value: "4.9/5", label: "Note clients" },
            { value: "25+", label: "Avis positifs" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
