"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Bot,
  ShoppingBag,
  Globe,
  BookOpen,
  Watch,
  Leaf,
  Thermometer,
  GraduationCap,
  Plane,
  Scissors,
  Snowflake,
  Sparkles,
  ShoppingCart,
  Play,
} from "lucide-react";

type Category = "Tous" | "SaaS" | "E-commerce" | "Site Vitrine" | "Blog/Éducation";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  category: Category[];
  link?: string;
  featured?: boolean;
  videos?: string[];
  stats?: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    title: "Woosenteur v2",
    subtitle: "Application SaaS IA",
    description:
      "Un outil que j'ai conçu pour les vendeurs de parfums. Il rédige des fiches produits complètes automatiquement. Un gain de temps énorme : ce qui prenait 3 heures se fait maintenant en 3 minutes.",
    tags: ["SaaS", "Next.js", "IA (Genkit)", "Stripe", "Firebase"],
    stats: [
      { label: "Note", value: "4.9/5" },
      { label: "Avis", value: "25+" },
      { label: "Temps/fiche", value: "<3 min" },
      { label: "Score SEO", value: ">88%" },
    ],
    icon: Bot,
    gradient: "from-violet-600 via-purple-600 to-blue-600",
    category: ["SaaS"],
    link: "https://woosenteur.fr",
    featured: true,
    videos: [
      "https://res.cloudinary.com/dk93srhfb/video/upload/v1770811812/woosenteur-promo_ufxuag.mp4",
      "https://res.cloudinary.com/dk93srhfb/video/upload/v1770811811/tiktok-woosenteur_lyu4ne.mp4",
    ],
  },
  {
    title: "Dubai Negoce",
    subtitle: "Boutique E-commerce",
    description:
      "Un site e-commerce pour un client passionné, lui permettant de vendre ses parfums rares partout en France. Aujourd'hui, le site célèbre fièrement ses 3 ans d'existence.",
    tags: ["E-commerce", "WordPress", "WooCommerce", "SEO"],
    icon: ShoppingBag,
    gradient: "from-blue-600 to-cyan-500",
    category: ["E-commerce"],
  },
  {
    title: "Horlogerie de Luxe",
    subtitle: "E-commerce Premium",
    description:
      "Un site élégant pour un créateur de montres de luxe, pour qu'il puisse présenter son art et vendre ses créations uniques en toute sécurité.",
    tags: ["Next.js", "Stripe", "PayPal", "E-commerce"],
    icon: Watch,
    gradient: "from-amber-600 to-yellow-500",
    category: ["E-commerce"],
  },
  {
    title: "Sounnah Medecine",
    subtitle: "Site d'affiliation",
    description:
      "Un projet personnel où je partage ma passion pour la médecine prophétique en proposant une sélection de produits que l'on peut trouver sur Amazon.",
    tags: ["Site d'affiliation", "Firebase Hosting"],
    icon: Leaf,
    gradient: "from-green-600 to-emerald-500",
    category: ["Blog/Éducation"],
  },
  {
    title: "Innova Thermic",
    subtitle: "Site Vitrine",
    description:
      "Conception d'un site vitrine pour une entreprise d'analyse énergétique. L'objectif était de montrer leur expertise et d'être plus visible dans leur région.",
    tags: ["WordPress", "Elementor", "SEO Local"],
    icon: Thermometer,
    gradient: "from-orange-600 to-red-500",
    category: ["Site Vitrine"],
  },
  {
    title: "Merkez Nafais El Bayan",
    subtitle: "Plateforme Éducative",
    description:
      "Réalisation d'une plateforme en ligne pour un centre éducatif, pour qu'ils puissent facilement présenter leurs cours et leurs programmes.",
    tags: ["WordPress", "Flatsome"],
    icon: GraduationCap,
    gradient: "from-pink-600 to-rose-500",
    category: ["Blog/Éducation"],
  },
  {
    title: "Niyya Omra",
    subtitle: "Agence de Voyage",
    description:
      "Un site vitrine pour une agence de voyage qui organise des pèlerinages Omra. Le site permet de réserver son voyage spirituel en quelques clics.",
    tags: ["WordPress", "Elementor", "Réservation"],
    icon: Plane,
    gradient: "from-sky-600 to-blue-500",
    category: ["Site Vitrine"],
  },
  {
    title: "Atelier Fil Passionata",
    subtitle: "Boutique Artisanale",
    description:
      "Une boutique en ligne coquette pour une créatrice de talent. Elle peut maintenant vendre ses créations dans toute la France.",
    tags: ["WordPress", "WooCommerce", "WoodMart"],
    icon: Scissors,
    gradient: "from-fuchsia-600 to-pink-500",
    category: ["E-commerce"],
  },
  {
    title: "AC2FROID",
    subtitle: "Artisan Climatisation",
    description:
      "Conception d'un site vitrine pour un artisan spécialisé dans la climatisation, afin de booster sa visibilité locale et de présenter son savoir-faire.",
    tags: ["WordPress", "Elementor", "SEO Local"],
    icon: Snowflake,
    gradient: "from-cyan-600 to-teal-500",
    category: ["Site Vitrine"],
  },
  {
    title: "Pause Bien-être",
    subtitle: "Spa & Beauté",
    description:
      "Conception d'un site pour un spa et institut de beauté, avec un système de réservation en ligne pour que les clientes puissent prendre rendez-vous quand elles le veulent.",
    tags: ["WordPress", "Elementor", "Réservation"],
    icon: Sparkles,
    gradient: "from-purple-600 to-violet-500",
    category: ["Site Vitrine"],
  },
  {
    title: "Parfums d'Orient",
    subtitle: "Boutique E-commerce",
    description:
      "Une boutique en ligne pour un commerçant passionné de parfums, lui permettant de vendre ses trésors partout en France et à l'étranger.",
    tags: ["WooCommerce", "Elementor", "Stripe", "PayPal"],
    icon: ShoppingCart,
    gradient: "from-indigo-600 to-violet-500",
    category: ["E-commerce"],
  },
  {
    title: "Une Main pour Demain",
    subtitle: "Site Humanitaire",
    description:
      "Réalisation du site pour l'association 'Une Main pour Demain', pour mettre en lumière leurs belles actions et encourager les gens à les soutenir.",
    tags: ["Site humanitaire", "Firebase Hosting"],
    icon: Globe,
    gradient: "from-teal-600 to-green-500",
    category: ["Site Vitrine"],
  },
];

const categories: Category[] = [
  "Tous",
  "SaaS",
  "E-commerce",
  "Site Vitrine",
  "Blog/Éducation",
];

function VideoPlayer({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative rounded-xl overflow-hidden bg-surface-light aspect-video">
      {!playing ? (
        <button
          onClick={() => setPlaying(true)}
          className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors z-10"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center glow-purple">
            <Play className="w-7 h-7 text-white ml-1" />
          </div>
        </button>
      ) : null}
      <video
        src={src}
        className="w-full h-full object-cover"
        controls={playing}
        autoPlay={playing}
        playsInline
        preload="metadata"
      />
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="col-span-full group"
    >
      <div className="relative rounded-3xl p-px overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-700`}
        />
        <div className="relative bg-surface rounded-3xl p-8 md:p-12">
          <div className="absolute top-10 right-10 w-60 h-60 bg-violet-500/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/15 rounded-full blur-3xl animate-pulse-glow" />

          <div className="relative grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm text-primary-light">
                    {project.subtitle}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full bg-surface-light text-gray-300 border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity glow-purple"
                >
                  Voir le projet
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {/* Stats */}
              {project.stats && (
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {project.stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="glass rounded-2xl p-5 text-center"
                    >
                      <div className="text-2xl font-bold text-gradient mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Videos */}
            <div className="space-y-4">
              {project.videos?.map((video, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                >
                  <VideoPlayer src={video} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group relative rounded-2xl p-px overflow-hidden"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
      />
      <div className="relative bg-surface rounded-2xl p-7 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-11 h-11 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
          >
            <project.icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
            <span className="text-xs text-gray-500">{project.subtitle}</span>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-surface-light text-gray-400 border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<Category>("Tous");

  const featured = projects.find((p) => p.featured);
  const filtered = projects.filter((p) => {
    if (p.featured) return false;
    if (activeCategory === "Tous") return true;
    return p.category.includes(activeCategory);
  });

  return (
    <section id="projets" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary-light uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Quelques-uns de mes{" "}
            <span className="text-gradient">projets</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Voici quelques aventures que j&apos;ai eu le plaisir de mener.
            Chaque site est une nouvelle histoire !
          </p>
        </motion.div>

        {/* Featured project */}
        {featured && <FeaturedProject project={featured} />}

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mt-16 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-primary text-white glow-purple"
                  : "border border-border text-gray-400 hover:text-white hover:bg-surface-light"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
