"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ServicePageLayoutProps {
  children: React.ReactNode;
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  gradient: string;
}

export default function ServicePageLayout({
  children,
  badge,
  title,
  titleHighlight,
  description,
  gradient,
}: ServicePageLayoutProps) {
  return (
    <main className="relative min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden gradient-bg">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute w-[600px] h-[600px] rounded-full opacity-15 top-[-10%] right-[-10%]`}
            style={{
              background: `radial-gradient(circle, ${gradient} 0%, transparent 70%)`,
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full opacity-10 bottom-[-5%] left-[-5%]"
            style={{
              background: `radial-gradient(circle, #3B82F6 0%, transparent 70%)`,
            }}
          />
        </div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-medium text-primary-light uppercase tracking-widest mb-4">
              {badge}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {title}{" "}
              <span className="text-gradient">{titleHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {children}

      {/* CTA bottom */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden p-px"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-blue-600 opacity-50" />
            <div className="relative bg-surface rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prêt à <span className="text-gradient">démarrer</span> ?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Discutons de votre projet. Consultation gratuite de 30 minutes
                pour identifier la meilleure approche.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/212699245542?text=Bonjour, je suis intéressé par vos services. Pouvons-nous en discuter ?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-primary text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity glow-purple inline-flex items-center justify-center gap-2"
                >
                  Discuter sur WhatsApp
                </a>
                <a
                  href="mailto:elmalkidigital@gmail.com"
                  className="border border-border text-white px-8 py-4 rounded-full font-medium hover:bg-surface-light transition-all inline-flex items-center justify-center"
                >
                  Envoyer un email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
