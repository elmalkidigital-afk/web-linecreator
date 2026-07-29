import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "1. Qui suis-je ?",
    body: (
      <p>
        Ce site est édité par <strong className="text-white">Abderrahmane El Malki</strong>,
        développeur web freelance exerçant sous le nom{" "}
        <strong className="text-white">Web-LineCreator</strong>, basé à Meknès
        (Maroc) et intervenant en télétravail pour des clients en France.
        Pour toute question relative à cette politique ou à vos données
        personnelles, vous pouvez me contacter à l&apos;adresse{" "}
        <a
          href="mailto:elmalkidigital@gmail.com"
          className="text-primary-light hover:underline"
        >
          elmalkidigital@gmail.com
        </a>
        .
      </p>
    ),
  },
  {
    title: "2. Données collectées",
    body: (
      <>
        <p>
          Ce site collecte le minimum de données nécessaires à son
          fonctionnement et à la mise en relation avec vous :
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-gray-400">
          <li>
            <strong className="text-white">Formulaire de contact</strong> :
            nom, adresse email et message. Ces informations ne sont{" "}
            <strong className="text-white">jamais stockées sur un serveur</strong>{" "}
            — le formulaire ouvre directement une conversation WhatsApp
            pré-remplie avec votre message, à votre initiative.
          </li>
          <li>
            <strong className="text-white">Contact direct</strong> : si vous
            m&apos;écrivez par email ou WhatsApp, vos coordonnées et le
            contenu de nos échanges sont conservés le temps nécessaire au
            traitement de votre demande.
          </li>
          <li>
            <strong className="text-white">Données techniques</strong> :
            l&apos;hébergeur peut collecter automatiquement des données
            techniques standard (adresse IP, type de navigateur, pages
            visitées) à des fins de sécurité et de bon fonctionnement du
            site.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Cookies",
    body: (
      <p>
        Ce site n&apos;utilise pas de cookies publicitaires ni d&apos;outils
        de suivi tiers (pas de Google Analytics ni de pixels de réseaux
        sociaux). Seuls des cookies techniques strictement nécessaires au
        fonctionnement du site peuvent être déposés par l&apos;hébergeur.
      </p>
    ),
  },
  {
    title: "4. Hébergement",
    body: (
      <p>
        Ce site est hébergé par{" "}
        <strong className="text-white">Firebase Hosting (Google LLC)</strong>.
        Les données techniques transitant par le site peuvent donc être
        traitées sur les infrastructures de Google, conformément à la
        politique de confidentialité de Google.
      </p>
    ),
  },
  {
    title: "5. Liens et services tiers",
    body: (
      <p>
        Le site contient des liens vers des services tiers (WhatsApp,
        LinkedIn, Facebook, email). Une fois que vous cliquez sur ces liens,
        vous quittez ce site et la politique de confidentialité du service
        tiers concerné s&apos;applique.
      </p>
    ),
  },
  {
    title: "6. Vos droits",
    body: (
      <>
        <p>
          Conformément au Règlement Général sur la Protection des Données
          (RGPD) et à la loi applicable, vous disposez d&apos;un droit
          d&apos;accès, de rectification, d&apos;effacement, de limitation et
          d&apos;opposition concernant vos données personnelles.
        </p>
        <p className="mt-3">
          Pour exercer l&apos;un de ces droits, il vous suffit de m&apos;écrire à{" "}
          <a
            href="mailto:elmalkidigital@gmail.com"
            className="text-primary-light hover:underline"
          >
            elmalkidigital@gmail.com
          </a>
          . Je m&apos;engage à répondre dans les meilleurs délais.
        </p>
      </>
    ),
  },
  {
    title: "7. Durée de conservation",
    body: (
      <p>
        Les échanges liés à une demande de devis ou de contact sont conservés
        uniquement le temps nécessaire au traitement de votre demande, puis
        supprimés, sauf obligation légale de conservation plus longue ou
        relation contractuelle en cours.
      </p>
    ),
  },
  {
    title: "8. Modification de cette politique",
    body: (
      <p>
        Cette politique de confidentialité peut être mise à jour à tout
        moment, notamment pour rester conforme à l&apos;évolution de la
        réglementation. La date de dernière mise à jour figure ci-dessous.
      </p>
    ),
  },
];

export default function ConfidentialitePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="relative pt-36 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>

          <span className="text-sm font-medium text-primary-light uppercase tracking-widest">
            Légal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Politique de <span className="text-gradient">confidentialité</span>
          </h1>
          <p className="text-gray-400 mb-14">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title} className="glass rounded-2xl p-7">
                <h2 className="text-xl font-bold text-white mb-4">
                  {section.title}
                </h2>
                <div className="text-sm leading-relaxed text-gray-300">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
