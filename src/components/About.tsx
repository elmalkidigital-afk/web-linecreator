"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Brain,
  Rocket,
  TrendingUp,
  Linkedin,
  Mail,
  Facebook,
  Phone,
} from "lucide-react";
import Image from "next/image";

const LOGO_URL =
  "https://res.cloudinary.com/dk93srhfb/image/upload/v1770877614/grok_image_1770877529608_iv24ft.jpg";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js / APIs", level: 88 },
  { name: "WooCommerce / WordPress", level: 92 },
  { name: "Firebase / Cloud", level: 85 },
  { name: "Android (Kotlin)", level: 80 },
];

const milestones = [
  {
    year: "2023",
    title: "Formation E-commerce",
    description:
      "Certification en conception de sites e-commerce. Premiers projets clients.",
    icon: Code2,
  },
  {
    year: "2024",
    title: "Découverte de l'IA",
    description:
      "Exploration des technologies IA (ChatGPT, Gemini). Naissance de l'idée de Woosenteur.",
    icon: Brain,
  },
  {
    year: "2024",
    title: "Lancement Woosenteur v2",
    description:
      "Développement et lancement de l'application SaaS. 25+ avis positifs, note de 4.9/5.",
    icon: Rocket,
  },
  {
    year: "2025",
    title: "Expansion des services",
    description:
      "Développement web, SaaS, apps Android et conception de boutiques e-commerce.",
    icon: TrendingUp,
  },
];

function SkillBar({
  skill,
  index,
  inView,
}: {
  skill: (typeof skills)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-300">{skill.name}</span>
        <span className="text-sm text-primary-light">{skill.level}%</span>
      </div>
      <div className="h-2 bg-surface-light rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
          className="h-full bg-gradient-primary rounded-full"
        />
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary-light uppercase tracking-widest">
            À propos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Qui est <span className="text-gradient">Abderrahmane</span> ?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Bio + Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <Image
              src={LOGO_URL}
              alt="Abderrahmane El Malki"
              width={96}
              height={96}
              className="rounded-2xl mb-8 glow-purple"
            />

            <h3 className="text-2xl font-bold text-white mb-2">
              Abderrahmane El Malki
            </h3>
            <p className="text-primary-light mb-6">
              Développeur Web & Concepteur de Woosenteur v2
            </p>

            <p className="text-gray-400 leading-relaxed mb-4">
              Passionné par le développement web et les technologies IA, j&apos;ai
              commencé par une formation en conception de sites e-commerce en 2023.
              En travaillant sur divers projets, j&apos;ai identifié un problème
              récurrent : la rédaction de fiches produits, un processus long et
              répétitif.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              C&apos;est ainsi qu&apos;est né Woosenteur v2, une application SaaS
              utilisant l&apos;IA pour générer des fiches produits optimisées SEO
              en moins de 3 minutes.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/abderrahmen-elmalki-553051273/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-border px-4 py-2.5 rounded-full text-sm text-gray-300 hover:text-white hover:bg-surface-light transition-all"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=100007559055739"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-border px-4 py-2.5 rounded-full text-sm text-gray-300 hover:text-white hover:bg-surface-light transition-all"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
              <a
                href="https://wa.me/212699245542"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-border px-4 py-2.5 rounded-full text-sm text-gray-300 hover:text-white hover:bg-surface-light transition-all"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="mailto:elmalkidigital@gmail.com"
                className="flex items-center gap-2 border border-border px-4 py-2.5 rounded-full text-sm text-gray-300 hover:text-white hover:bg-surface-light transition-all"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>

            {/* Skills */}
            <div className="mt-12 space-y-5">
              <h4 className="text-lg font-semibold text-white mb-6">
                Compétences
              </h4>
              {skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  index={i}
                  inView={inView}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold text-white mb-8">Parcours</h4>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

              <div className="space-y-10">
                {milestones.map((milestone, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="relative pl-16"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center">
                      <milestone.icon className="w-5 h-5 text-primary-light" />
                    </div>

                    <div className="glass rounded-xl p-6">
                      <span className="text-xs text-primary-light font-mono">
                        {milestone.year}
                      </span>
                      <h5 className="text-lg font-bold text-white mt-1 mb-2">
                        {milestone.title}
                      </h5>
                      <p className="text-sm text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
