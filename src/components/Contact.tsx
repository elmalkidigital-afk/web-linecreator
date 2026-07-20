"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Mail,
  Linkedin,
  MapPin,
  Phone,
  ArrowRight,
  Facebook,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `Bonjour, je suis ${formData.name} (${formData.email}).\n\n${formData.message}`;
    window.open(
      `https://wa.me/212699245542?text=${encodeURIComponent(waText)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary-light uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Un projet en tête ?{" "}
            <span className="text-gradient">Parlons-en</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Envoyez-moi un message, je vous répondrai dans les plus brefs
            délais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Emails */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm text-gray-500">Emails</div>
              </div>
              <a
                href="mailto:elmalkidigital@gmail.com"
                className="block text-white hover:text-primary-light transition-colors text-sm"
              >
                elmalkidigital@gmail.com
              </a>
              <a
                href="mailto:abderelmalki@gmail.com"
                className="block text-gray-400 hover:text-primary-light transition-colors text-sm mt-1"
              >
                abderelmalki@gmail.com
              </a>
            </div>

            {/* Phone / WhatsApp */}
            <div className="glass rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-500">WhatsApp / Téléphone</div>
                <a
                  href="https://wa.me/212699245542"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-light transition-colors"
                >
                  +212 699 24 55 42
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="glass rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Zone d&apos;intervention</div>
                <span className="text-white">France · Télétravail</span>
                <div className="text-xs text-gray-500 mt-0.5">
                  Missions à distance partout en France — basé à Meknès (Maroc)
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="glass rounded-2xl p-6">
              <div className="text-sm text-gray-500 mb-3">Réseaux sociaux</div>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/abderrahmen-elmalki-553051273/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-surface-light border border-border flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://web.facebook.com/profile.php?id=100007559055739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-surface-light border border-border flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* CTA card */}
            <div className="relative rounded-2xl overflow-hidden p-px">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-blue-600 opacity-50" />
              <div className="relative bg-surface rounded-2xl p-8 text-center">
                <h4 className="text-xl font-bold text-white mb-3">
                  Consultation gratuite
                </h4>
                <p className="text-sm text-gray-400 mb-5">
                  30 minutes pour discuter de votre projet et identifier la
                  meilleure approche.
                </p>
                <a
                  href="https://wa.me/212699245542?text=Bonjour, je souhaite réserver une consultation gratuite pour discuter de mon projet."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full text-sm font-medium glow-purple hover:opacity-90 transition-opacity"
                >
                  Réserver un appel
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass rounded-2xl p-8 space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              Envoyez-moi un message
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Je vous répondrai dans les plus brefs délais.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Nom</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                Message
              </label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Décrivez votre projet, vos besoins, votre budget..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-primary text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 glow-purple"
            >
              <Send className="w-5 h-5" />
              Envoyer via WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
