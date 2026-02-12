"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ShoppingCart,
  Rocket,
  Smartphone,
  Globe,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LOGO_URL =
  "https://res.cloudinary.com/dk93srhfb/image/upload/v1770877614/grok_image_1770877529608_iv24ft.jpg";

const servicePages = [
  {
    href: "/services/boutique-woocommerce",
    label: "Boutique WooCommerce",
    icon: ShoppingCart,
    desc: "E-commerce clé en main",
  },
  {
    href: "/services/saas",
    label: "Application SaaS",
    icon: Rocket,
    desc: "Votre produit SaaS sur mesure",
  },
  {
    href: "/services/android",
    label: "Application Android",
    icon: Smartphone,
    desc: "Apps mobiles performantes",
  },
  {
    href: "/services/developpement-web",
    label: "Développement Web",
    icon: Globe,
    desc: "Sites vitrines & corporate",
  },
  {
    href: "/services/maintenance",
    label: "Maintenance",
    icon: Wrench,
    desc: "50€/mois — tout inclus",
  },
];

const navLinks = [
  { href: "#process", label: "Process" },
  { href: "#projets", label: "Réalisations" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#apropos", label: "À propos" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3 backdrop-blur-xl bg-[#050510]/80" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src={LOGO_URL}
            alt="Web-LineCreation Logo"
            width={40}
            height={40}
            className="rounded-xl group-hover:scale-110 transition-transform"
          />
          <span className="text-lg font-bold text-gradient hidden sm:inline">
            Web-LineCreation
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="text-sm text-gray-300 hover:text-white transition-colors relative group flex items-center gap-1"
            >
              Services
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 glass rounded-2xl overflow-hidden border border-border/50 shadow-2xl"
                >
                  <div className="p-2">
                    {servicePages.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                      >
                        <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                          <service.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            {service.label}
                          </div>
                          <div className="text-xs text-gray-500">
                            {service.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="https://wa.me/212699245542"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Me contacter
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {/* Mobile Services accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors py-2"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-2 space-y-2">
                        {servicePages.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                          >
                            <service.icon className="w-4 h-4 text-primary-light" />
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/212699245542"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="bg-gradient-primary text-white px-5 py-3 rounded-full text-sm font-medium text-center"
              >
                Me contacter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
