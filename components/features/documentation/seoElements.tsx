import React from "react";

interface SeoElementProps {
  title: string;
  description: string;
  href?: string;
  gradient?: string;
}

const seoElements: SeoElementProps[] = [
  {
    title: "PageSpeed Insights",
    description:
      "Analyse la vitesse de votre site et propose des recommandations pour améliorer sa rapidité.",
    href: "/documentation/pagespeed-insights",
  },
  {
    title: "Google Search Console",
    description:
      "Un outil pour surveiller l'indexation, l'analyse des requêtes de recherche, et les problèmes techniques de votre site.",
    href: "/documentation/google-search-console",
  },
  {
    title: "Google Analytics",
    description:
      "Permet de suivre les comportements des utilisateurs, de mesurer les conversions et de mieux comprendre les performances de votre site.",
    href: "/documentation/google-analytics",
  },
  {
    title: "Yoast SEO",
    description:
      "Simplifie l'optimisation SEO sur chaque page en vous aidant à gérer les balises méta, les titres et descriptions.",
    href: "/documentation/yoast-seo",
  },
];

const seoTechnique: SeoElementProps[] = [
  {
    title: "Web Core Vitals",
    description:
      "Mesure la performance du site à travers des indicateurs tels que CLS, INP et LCP qui influencent l'expérience utilisateur.",
    href: "/documentation/seo-starter-guide/web-core-vitals",
  },
  {
    title: "Sitemap",
    description:
      "Un fichier XML qui liste toutes les pages de votre site pour aider les moteurs de recherche à les explorer et indexer.",
    href: "/documentation/seo-starter-guide/sitemap",
  },
  {
    title: "Robots.txt",
    description:
      "Un fichier qui indique aux moteurs de recherche quelles pages explorer ou ignorer sur votre site.",
    href: "/documentation/seo-starter-guide/robots-txt",
  },
  {
    title: "Métadonnées",
    description:
      "Utilisez des balises méta pour fournir des informations sur le contenu de votre page, comme le titre, la description et les mots-clés.",
    href: "/documentation/seo-starter-guide/metadata",
  },
  {
    title: "Responsive Design",
    description:
      "Assurez-vous que votre site est adapté aux mobiles et aux tablettes pour une meilleure expérience utilisateur.",
  },
  {
    title: "Balisage Schema.org",
    description:
      "Ajoutez un balisage sémantique (JSON-LD ou microdonnées) pour aider les moteurs de recherche à mieux comprendre le contenu de votre site.",
    href: "/documentation/seo-starter-guide/schema-markup",
  },
];

const seoOnPage: SeoElementProps[] = [
  {
    title: "Contenu de qualité",
    description:
      "Publiez des articles ou pages utiles, bien rédigés et régulièrement mis à jour.",
  },
  {
    title: "Balises Hn",
    description:
      "Balises H1, H2, H3, etc. pour structurer son contenu et faciliter la lecture par les moteurs de recherche.",
  },
  {
    title: "Optimisation des images",
    description: "Balises ALT, compression, format adapté",
  },
  {
    title: "Liens internes",
    description:
      "Liens internes pour une meilleure navigation et répartition du PageRank",
  },
];
const seoOffPage: SeoElementProps[] = [
  {
    title: "Audit de backlinks",
    description:
      "Analyse des liens entrants : qualité, ancrage, diversité. Utilisation d’outils comme Ahrefs ou Majestic.",
    href: "/documentation/seo-off-page/backlink-audit",
  },
  {
    title: "Netlinking",
    description:
      "Création de liens via guest blogging, PBN, contenus linkables. Priorité aux liens DoFollow.",
    href: "/documentation/seo-off-page/netlinking",
  },
  {
    title: "Désaveu de liens",
    description:
      "Identification des liens toxiques et soumission d’un fichier disavow à Google.",
    href: "/documentation/seo-off-page/disavow",
  },
  {
    title: "Mentions sans lien",
    description:
      "Suivi des mentions de marque non liées et récupération via outreach.",
    href: "/documentation/seo-off-page/brand-mentions",
  },
  {
    title: "SEO local",
    description:
      "Citations NAP, fiche Google Business, backlinks locaux, balisage JSON-LD.",
    href: "/documentation/seo-off-page/local-seo",
  },
];

function SeoGrid({ elements }: { elements: SeoElementProps[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
      {elements.map((element) => (
        <a
          key={element.title}
          href={element.href}
          className={`block p-6 rounded-lg bg-gradient-to-br ${
            element.gradient ? element.gradient : "bg-white"
          } 
            hover:scale-[1.02] transition-transform duration-200 
            shadow-lg hover:shadow-xl group relative overflow-hidden`}
        >
          <div className="relative z-10">
            <h2 className="text-md font-bold text-black mb-2">
              {element.title}
            </h2>
            <p className="text-black-300 text-sm">{element.description}</p>
          </div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
        </a>
      ))}
    </div>
  );
}

export function SeoTools() {
  return <SeoGrid elements={seoElements} />;
}

export function SeoTechnique() {
  return <SeoGrid elements={seoTechnique} />;
}
export function SeoOnPage() {
  return <SeoGrid elements={seoOnPage} />;
}
export function SeoOffPage() {
  return <SeoGrid elements={seoOffPage} />;
}
