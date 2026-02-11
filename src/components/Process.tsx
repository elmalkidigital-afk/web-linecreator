"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Coffee, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "On discute de votre projet",
    description:
      "On prend un café (virtuel ou réel !) pour parler de votre idée, de ce que vous aimez et de ce que vous voulez accomplir. C'est l'étape la plus importante pour que je comprenne votre univers.",
    icon: Coffee,
    color: "from-violet-500 to-purple-600",
  },
  {
    number: "02",
    title: "Je dessine votre futur site",
    description:
      "Je vous présente une première version visuelle du site. On ajuste les couleurs, les polices, la disposition... jusqu'à ce que vous disiez : 'C'est exactement ça !'.",
    icon: Palette,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "03",
    title: "Je construis le site",
    description:
      "Je transforme le design validé en un vrai site web. Il sera beau et facile à utiliser sur ordinateur, tablette et téléphone.",
    icon: Code,
    color: "from-emerald-500 to-green-500",
  },
  {
    number: "04",
    title: "Mise en ligne et on fête ça !",
    description:
      "C'est le grand jour ! On met votre site en ligne. Et pas de panique, je ne disparais pas. Je reste là pour vous montrer comment l'utiliser et m'assurer que tout roule.",
    icon: Rocket,
    color: "from-orange-500 to-pink-500",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-32 px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary-light uppercase tracking-widest">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Un projet simple en{" "}
            <span className="text-gradient">4 étapes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            On avance ensemble, pas à pas. Voici comment se déroule un projet
            avec moi, sans surprise.
          </p>
        </motion.div>

        {/* Desktop: Horizontal layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-[52px] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-violet-500 via-blue-500 via-emerald-500 to-orange-500 origin-left"
            style={{ zIndex: 0 }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative flex flex-col items-center text-center px-4"
            >
              <div
                className={`relative z-10 w-[104px] h-[104px] rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}
              >
                <step.icon className="w-10 h-10 text-white" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-surface border-2 border-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-light">
                    {step.number}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical layout with timeline */}
        <div className="lg:hidden relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-blue-500 via-emerald-500 to-orange-500 origin-top"
          />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-20"
              >
                <div
                  className={`absolute left-0 w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                >
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                <div className="glass rounded-xl p-6">
                  <span className="text-xs font-mono text-primary-light">
                    Étape {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
