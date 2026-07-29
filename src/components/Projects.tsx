"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Bot,
  ShoppingBag,
  BookOpen,
  Leaf,
  Thermometer,
  Plane,
  Scissors,
  ShoppingCart,
  UtensilsCrossed,
  Moon,
  Store,
  Compass,
  Building2,
  HeartHandshake,
  KeyRound,
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
  image?: string;
}

const projects: Project[] = [
  {
    title: "Woosenteur v2",
    subtitle: "Application SaaS IA",
    description:
      "Un outil que j'ai conçu pour les vendeurs de parfums. Il rédige des fiches produits complètes automatiquement. Un gain de temps énorme : ce qui prenait 3 heures se fait maintenant en 3 minutes.",
    tags: ["SaaS", "Next.js", "IA (Genkit)", "Stripe", "Firebase"],
    icon: Bot,
    gradient: "from-violet-600 via-purple-600 to-blue-600",
    category: ["SaaS"],
    link: "https://woosenteur.fr",
    image: "/projects/woosenteur.png",
  },
  {
    title: "HikmaClips",
    subtitle: "Application SaaS",
    description:
      "Une application qui génère des rappels islamiques — hadiths authentiques, versets coraniques et douas — prêts à publier sur TikTok, Instagram et YouTube. Plus de 32 000 hadiths issus de 9 recueils majeurs, avec export HD et application Android.",
    tags: ["SaaS", "IA", "Android (APK)", "Réseaux sociaux"],
    icon: BookOpen,
    gradient: "from-green-600 to-teal-500",
    category: ["SaaS"],
    link: "https://hikmaclips.woosenteur.fr/",
    image: "/projects/hikmaclips.png",
  },
  {
    title: "E-sensya & Co",
    subtitle: "Application Flutter (Android)",
    description:
      "Une application native pour les EHPAD et résidences seniors, qui rapproche résidents, familles, équipes et prestataires : messagerie, agenda partagé, réservation de services et notifications, dans une interface douce et accessible. Pensée pour rassurer, conforme RGPD.",
    tags: ["Flutter", "Android natif", "Multi-rôles", "RGPD"],
    icon: HeartHandshake,
    gradient: "from-rose-600 to-pink-500",
    category: ["SaaS"],
    link: "https://essentia--essencia-et-co.europe-west4.hosted.app/",
    image: "/projects/e-sensya.png",
  },
  {
    title: "ImmoGest Pro",
    subtitle: "Application Android",
    description:
      "Une application de gestion locative pour les bailleurs : biens, locataires, baux, suivi des loyers, quittances PDF en un clic et signalement d'incidents. Chaque rôle — propriétaire, gestionnaire, locataire — dispose de son propre espace.",
    tags: ["Android (APK)", "Firebase", "Gestion locative", "PDF"],
    icon: Building2,
    gradient: "from-blue-600 to-indigo-500",
    category: ["SaaS"],
    link: "https://immoloyer-6e007.web.app/",
    image: "/projects/immogest.png",
  },
  {
    title: "RappelAdhan",
    subtitle: "Application Android",
    description:
      "Une application de prière pensée pour le quotidien : horaires précis calculés localement, Qibla, Coran avec trois récitateurs, adhkar et duas — le tout entièrement hors-ligne, sans publicité et gratuit.",
    tags: ["Android (APK)", "Firebase", "Hors-ligne", "Coran"],
    icon: Compass,
    gradient: "from-cyan-600 to-teal-500",
    category: ["SaaS"],
    link: "https://rappeladhan.web.app/site",
    image: "/projects/rappeladhan.png",
  },
  {
    title: "UrbanKey",
    subtitle: "Application Escape Game",
    description:
      "Une application d'escape games grandeur nature en pleine ville : les joueurs suivent un parcours d'énigmes dans les rues de Marrakech, Fès, Séville ou Meknès pour percer les secrets cachés du lieu. Parcours solo, famille, groupe ou entreprise, notés et classés.",
    tags: ["Application Web", "Firebase", "Gamification", "Géolocalisation"],
    icon: KeyRound,
    gradient: "from-amber-700 to-yellow-600",
    category: ["SaaS"],
    link: "https://urbankey--urban-key2.europe-west4.hosted.app/discover",
    image: "/projects/urban-key.png",
  },
  {
    title: "Ch7al",
    subtitle: "Application Communautaire",
    description:
      "Une application communautaire marocaine pour comparer et partager les prix des produits du quotidien entre particuliers, hanout par hanout, ville par ville. Feed en temps réel, alertes prix et petites annonces.",
    tags: ["Application Web", "Firebase", "Communauté", "Temps réel"],
    icon: Store,
    gradient: "from-orange-600 to-amber-500",
    category: ["SaaS"],
    link: "https://ch7al.woosenteur.fr/",
    image: "/projects/ch7al.png",
  },
  {
    title: "Nour",
    subtitle: "Bien-être Islamique",
    description:
      "Une application de bien-être spirituel islamique avec espace personnel : chacun se connecte (email ou Google) pour suivre son cheminement au quotidien, dans une interface douce et apaisante.",
    tags: ["Application Web", "Firebase", "Connexion Google"],
    icon: Moon,
    gradient: "from-emerald-600 to-green-500",
    category: ["SaaS"],
    link: "https://noor-27215.web.app/",
    image: "/projects/noor.png",
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
    link: "https://dubainegoce.fr/",
    image: "/projects/dubai-negoce.png",
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
    link: "https://sounnah-medecine.shop/",
    image: "/projects/sounnah-medecine.png",
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
    link: "https://www.innova-thermic.com/",
    image: "/projects/innova-thermic.png",
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
    link: "https://www.niyyaomra.fr/",
    image: "/projects/niyya-omra.png",
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
    link: "https://aiguillefilpassionata.fr/",
    image: "/projects/atelier-fil-passionata.png",
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
    link: "https://ouddorient.fr/",
    image: "/projects/parfums-orient.png",
  },
  {
    title: "Tacos & Smash",
    subtitle: "Restaurant Street Food",
    description:
      "Un site gourmand pour un restaurant de French Tacos et Smash Burgers à Meknès. Menu interactif, composition de tacos sur mesure et commande en ligne via WhatsApp : tout pour donner faim !",
    tags: ["Site Vitrine", "Commande en ligne", "WhatsApp", "Firebase Hosting"],
    icon: UtensilsCrossed,
    gradient: "from-red-600 to-orange-500",
    category: ["Site Vitrine"],
    link: "https://tacos-et-smash.web.app/",
    image: "/projects/tacos-et-smash.png",
  },
];

const categories: Category[] = [
  "Tous",
  "SaaS",
  "E-commerce",
  "Site Vitrine",
  "Blog/Éducation",
];

function ProjectCard({ project }: { project: Project }) {
  const cardContent = (
    <>
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
      />
      <div className="relative bg-surface rounded-2xl h-full flex flex-col overflow-hidden">
        {project.image && (
          <div className="relative aspect-video overflow-hidden shrink-0">
            <Image
              src={project.image}
              alt={`Aperçu du site ${project.title}`}
              fill
              sizes="(max-width: 640px) 320px, 370px"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </div>
        )}

        <div className="p-7 pt-5 flex flex-col flex-1">
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

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-surface-light text-gray-400 border border-border"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.link && (
            <div className="flex items-center gap-1.5 text-sm text-primary-light group-hover:text-white transition-colors mt-auto">
              <span>Voir le projet</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          )}
        </div>
      </div>
    </>
  );

  return (
    <div className="group relative rounded-2xl p-px overflow-hidden w-[320px] sm:w-[370px] shrink-0 h-full">
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full cursor-pointer"
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<Category>("Tous");

  const filtered = projects.filter((p) => {
    if (activeCategory === "Tous") return true;
    return p.category.includes(activeCategory);
  });
  // Le défilement translate de -50% : la piste doit contenir un nombre pair
  // de copies identiques pour boucler sans à-coup, et assez de cartes pour
  // remplir l'écran même quand un filtre réduit la liste.
  const copies = filtered.length >= 5 ? 2 : 4;
  const looped = Array.from({ length: copies }, () => filtered).flat();

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

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
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

        {/* Projects slider */}
        <div className="marquee-container marquee-mask overflow-hidden">
          <div
            key={activeCategory}
            className="animate-marquee flex w-max gap-6 items-stretch"
          >
            {looped.map((project, i) => (
              <ProjectCard key={`${project.title}-${i}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
