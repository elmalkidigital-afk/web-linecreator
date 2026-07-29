"use client";

import { Linkedin, Mail, ArrowUp, Facebook, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LOGO_URL = "/logo-icon.png";

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={LOGO_URL}
                alt="Web-LineCreation"
                width={79}
                height={36}
              />
              <span className="font-bold text-gradient">Web-LineCreation</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Concepteur de sites web sur-mesure pour donner vie à vos projets.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
              <a href="#services" className="hover:text-white transition-colors">
                Services
              </a>
              <a href="#process" className="hover:text-white transition-colors">
                Process
              </a>
              <a href="#projets" className="hover:text-white transition-colors">
                Réalisations
              </a>
              <a href="#tarifs" className="hover:text-white transition-colors">
                Tarifs
              </a>
              <a href="#apropos" className="hover:text-white transition-colors">
                À propos
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Mes coordonnées</h4>
            <div className="space-y-2 text-sm text-gray-500">
              <a
                href="mailto:elmalkidigital@gmail.com"
                className="block hover:text-white transition-colors"
              >
                elmalkidigital@gmail.com
              </a>
              <a
                href="https://wa.me/212699245542"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
              >
                +212 699 24 55 42
              </a>
              <span className="block">France · Télétravail (basé à Meknès)</span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.linkedin.com/in/abderrahmen-elmalki-553051273/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-gray-500 hover:text-white hover:border-primary transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=100007559055739"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-gray-500 hover:text-white hover:border-primary transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="mailto:elmalkidigital@gmail.com"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-gray-500 hover:text-white hover:border-primary transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/212699245542"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-gray-500 hover:text-white hover:border-primary transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-gray-500 hover:text-white hover:border-primary transition-all ml-auto"
              >
                <ArrowUp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center text-xs text-gray-600">
          <span>
            &copy; {new Date().getFullYear()} Web-LineCreation par
            Abderrahmane El Malki. Tous droits réservés.
          </span>
          <Link
            href="/confidentialite"
            className="hover:text-white transition-colors"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
