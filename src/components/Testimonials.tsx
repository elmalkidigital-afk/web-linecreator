"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Youssouf Djadid",
    role: "Merkez Nafais El Bayan",
    text: "La nouvelle plateforme est un outil formidable pour nos étudiants. Elle est intuitive, complète et a grandement facilité l'accès à nos ressources pédagogiques. Un travail professionnel et à l'écoute de nos besoins.",
    rating: 5,
  },
  {
    name: "B. Hinda",
    role: "Niyya Omra",
    text: "L'organisation d'un voyage Omra est une étape importante. Le site a rendu le processus de réservation incroyablement simple et transparent pour nos pèlerins. Nous sommes très satisfaits de la solution mise en place.",
    rating: 5,
  },
  {
    name: "Ali ELAÏHAR",
    role: "Innova Thermic",
    text: "Le nouveau site vitrine a parfaitement su retranscrire notre expertise. Depuis sa mise en ligne, notre visibilité régionale s'est nettement améliorée et nous avons vu une augmentation de nos contacts qualifiés.",
    rating: 5,
  },
  {
    name: "Maghzaz Nourddine",
    role: "Parfums d'Orient",
    text: "Notre boutique en ligne est un véritable succès ! La navigation est fluide et les paiements sont sécurisés, ce qui rassure nos clients. Une collaboration que je recommande vivement.",
    rating: 5,
  },
  {
    name: "E. Abderrahman",
    role: "CosmyticNature",
    text: "Le site d'affiliation a été mis en place rapidement et efficacement. Il est simple à gérer et parfaitement intégré avec Amazon, ce qui a facilité le lancement de notre activité en ligne.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="temoignages" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary-light uppercase tracking-widest">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Ce que disent{" "}
            <span className="text-gradient">mes clients</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Rien ne me fait plus plaisir que de voir mes clients heureux et
            leurs projets réussir.
          </p>
        </motion.div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-2xl p-px overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-surface rounded-2xl p-8 h-full flex flex-col">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-gray-400 leading-relaxed mb-6 flex-1 text-sm italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional testimonials row */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 mt-6">
          {testimonials.slice(3).map((t, i) => (
            <motion.div
              key={i + 3}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-2xl p-px overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-surface rounded-2xl p-8 h-full flex flex-col">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-gray-400 leading-relaxed mb-6 flex-1 text-sm italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl p-px overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20 opacity-30" />
              <div className="relative bg-surface rounded-2xl p-8">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-gray-400 leading-relaxed mb-6 text-sm italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-yellow-500 text-yellow-500"
                      />
                    )
                  )}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonials[current].name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-gray-400 hover:text-white hover:bg-surface-light transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current
                        ? "bg-primary w-6"
                        : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-gray-400 hover:text-white hover:bg-surface-light transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/212699245542?text=Bonjour, je souhaite laisser un avis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-gray-300 px-6 py-3 rounded-full text-sm hover:text-white hover:bg-surface-light transition-all"
          >
            <Star className="w-4 h-4" />
            Laisser un avis
          </a>
        </motion.div>
      </div>
    </section>
  );
}
