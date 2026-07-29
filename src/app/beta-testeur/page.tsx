"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  LogIn,
  LogOut,
  Clock,
  Download,
  Gift,
  Send,
  Lock,
  BookOpen,
  Compass,
  Store,
  Moon,
  Users,
  Building2,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { auth, googleProvider } from "@/lib/firebase";

const steps = [
  {
    icon: LogIn,
    title: "Connectez-vous en Google",
    description:
      "Un compte Gmail est obligatoire : connectez-vous ci-dessus, c'est ce compte que Google utilise pour vous donner accès à la version test.",
  },
  {
    icon: ExternalLink,
    title: "Rejoignez le test",
    description:
      "Cliquez sur l'application qui vous intéresse ci-dessous, puis sur « Devenir testeur » sur la page Google Play qui s'ouvre.",
  },
  {
    icon: Clock,
    title: "Patientez 24h",
    description:
      "Google a besoin d'un peu de temps pour activer votre accès. Revenez ici le lendemain.",
  },
  {
    icon: Download,
    title: "Installez l'app",
    description:
      "Cliquez à nouveau sur le même lien : le bouton « Installer » apparaît, avant la sortie officielle sur le Play Store.",
  },
];

const apps = [
  {
    name: "HikmaClips",
    subtitle: "Application SaaS",
    description:
      "Une application qui génère des rappels islamiques — hadiths authentiques, versets coraniques et douas — prêts à publier sur TikTok, Instagram et YouTube. Plus de 32 000 hadiths issus de 9 recueils majeurs, avec export HD.",
    icon: BookOpen,
    gradient: "from-green-600 to-teal-500",
    link: "https://play.google.com/apps/testing/com.hikmatips.app",
  },
  {
    name: "RappelAdhan",
    subtitle: "Application de prière",
    description:
      "Une application de prière pensée pour le quotidien : horaires précis calculés localement, Qibla, Coran avec trois récitateurs, adhkar et duas — le tout entièrement hors-ligne, sans publicité et gratuit.",
    icon: Compass,
    gradient: "from-cyan-600 to-teal-500",
    link: "https://play.google.com/apps/testing/com.rappeladhan.app",
  },
  {
    name: "Ch7al",
    subtitle: "Application communautaire",
    description:
      "Une application communautaire marocaine pour comparer et partager les prix des produits du quotidien entre particuliers, hanout par hanout, ville par ville. Feed en temps réel, alertes prix et petites annonces.",
    icon: Store,
    gradient: "from-orange-600 to-amber-500",
    link: "https://play.google.com/apps/testing/com.hanoutprice.app",
  },
  {
    name: "Nour",
    subtitle: "Bien-être islamique",
    description:
      "Une application de bien-être spirituel islamique avec espace personnel : chacun se connecte (email ou Google) pour suivre son cheminement au quotidien, dans une interface douce et apaisante.",
    icon: Moon,
    gradient: "from-emerald-600 to-green-500",
    link: "https://play.google.com/apps/testing/com.elmalkidigital.nour",
  },
  {
    name: "ClientPilot",
    subtitle: "Application de suivi client",
    description:
      "Tout le suivi client dans un seul espace : centralisez vos projets clients, échangez avec votre équipe et vos clients, demandez et partagez des documents, suivez tâches, rendez-vous et relances, et visualisez l'avancement en temps réel.",
    icon: Users,
    gradient: "from-violet-600 to-purple-500",
    link: "https://play.google.com/apps/testing/com.clientpilot.app",
  },
  {
    name: "ImmoGest Pro",
    subtitle: "Application de gestion locative",
    description:
      "Une application de gestion locative pour les bailleurs : biens, locataires, baux, suivi des loyers, quittances PDF en un clic et signalement d'incidents. Chaque rôle — propriétaire, gestionnaire, locataire — dispose de son propre espace.",
    icon: Building2,
    gradient: "from-blue-600 to-indigo-500",
    link: "https://play.google.com/apps/testing/com.immogestpro",
  },
];

export default function BetaTesteurPage() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [signingIn, setSigningIn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    app: apps[0].name,
    message: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
      if (u?.displayName) {
        setFormData((prev) => ({ ...prev, name: u.displayName ?? prev.name }));
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    setSigningIn(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch {
      // L'utilisateur a fermé la popup ou une erreur réseau est survenue.
    } finally {
      setSigningIn(false);
    }
  };

  const handleSignOut = () => signOut(auth);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `Bonjour, je suis ${formData.name}, beta-testeur de l'app "${formData.app}".\n\nMon retour :\n${formData.message}`;
    window.open(
      `https://wa.me/212699245542?text=${encodeURIComponent(waText)}`,
      "_blank"
    );
  };

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="relative pt-36 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8 w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>

          <span className="text-sm font-medium text-primary-light uppercase tracking-widest">
            Programme Beta
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Devenez <span className="text-gradient">beta-testeur</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mb-6">
            Testez mes applications Android en avant-première, avant leur
            sortie officielle sur le Play Store. Vos retours m&apos;aident à
            corriger les bugs et à améliorer l&apos;expérience avant le grand
            lancement.
          </p>

          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <Gift className="w-4 h-4" />
            En vous remerciant : vous gardez l&apos;accès aux applications
            testées, même après leur sortie officielle.
          </div>

          {/* Connexion Google obligatoire */}
          {!authLoading && !user && (
            <div className="relative rounded-2xl overflow-hidden p-px mb-14">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-blue-600 opacity-40" />
              <div className="relative bg-surface rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">
                  Connexion Google requise
                </h2>
                <p className="text-sm text-gray-400 max-w-md mx-auto mb-6">
                  La liste des applications à tester et le formulaire ne sont
                  accessibles qu&apos;après connexion avec votre compte Gmail
                  — c&apos;est ce même compte qui vous servira à rejoindre les
                  tests sur Google Play.
                </p>
                <button
                  onClick={handleGoogleSignIn}
                  disabled={signingIn}
                  className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity glow-purple disabled:opacity-60"
                >
                  <LogIn className="w-4 h-4" />
                  {signingIn ? "Connexion..." : "Se connecter avec Google"}
                </button>
              </div>
            </div>
          )}

          {user && (
            <div className="flex items-center justify-between glass rounded-xl px-5 py-3 mb-14">
              <span className="text-sm text-gray-300">
                Connecté en tant que{" "}
                <span className="text-white font-medium">
                  {user.displayName ?? user.email}
                </span>
              </span>
              <button
                onClick={handleSignOut}
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                Se déconnecter
              </button>
            </div>
          )}

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs text-primary-light font-medium mb-1">
                  Étape {i + 1}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Apps grid */}
          {user && (
            <>
          <h2 className="text-2xl font-bold text-white mb-2">
            Applications à tester
          </h2>
          <p className="text-gray-400 mb-8">
            Cliquez sur une application pour rejoindre son programme de test.
          </p>

          <div className="divide-y divide-border mb-20">
            {apps.map((app, i) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="py-8 first:pt-0"
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.gradient} flex items-center justify-center shrink-0`}
                  >
                    <app.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white">
                        {app.name}
                      </h3>
                      <span className="text-xs text-gray-500">
                        {app.subtitle}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                      {app.description}
                    </p>
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-light hover:text-white transition-colors group"
                    >
                      Rejoindre le test
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feedback form */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-2">
              Un avis, une remarque, un bug ?
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Dites-moi ce que vous en pensez, j&apos;en tiens compte pour
              chaque mise à jour.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Votre prénom
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Application testée
                  </label>
                  <select
                    value={formData.app}
                    onChange={(e) =>
                      setFormData({ ...formData, app: e.target.value })
                    }
                    className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  >
                    {apps.map((app) => (
                      <option key={app.name} value={app.name}>
                        {app.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">
                  Votre avis, remarque ou bug rencontré
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Décrivez ce que vous avez constaté..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-primary text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 glow-purple"
              >
                <Send className="w-5 h-5" />
                Envoyer via WhatsApp
              </button>
            </form>
          </div>

          <p className="flex items-center gap-2 text-xs text-gray-600 mt-6">
            <Check className="w-3.5 h-3.5 shrink-0" />
            Vos retours sont transmis directement par WhatsApp, sans aucun
            stockage sur ce site.
          </p>
            </>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
