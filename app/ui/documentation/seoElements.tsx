import React from "react";

interface SeoElementProps {
  title: string;
  description: string;
  href: string;
  gradient?: string;
}

const seoElements: SeoElementProps[] = [
  {
    title: "Web Core Vitals",
    description:
      "Mesure la performance du site à travers des indicateurs tels que CLS, INP et LCP qui influencent l'expérience utilisateur.",
    href: "/documentation/seo-starter-guide/web-core-vitals",
  },
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

const seoPractices: SeoElementProps[] = [
  {
    title: "Backlinks",
    description:
      "L'acquisition de liens entrants de qualité augmente l'autorité de votre site et améliore son classement.",
    href: "/documentation/backlinks",
  },
  {
    title: "Optimisation des mots-clés",
    description:
      "La recherche et l'intégration de mots-clés pertinents sont essentielles pour apparaître dans les résultats de recherche.",
    href: "/documentation/keyword-optimization",
  },
  {
    title: "Optimisation mobile",
    description:
      "Assurez-vous que votre site soit responsive et bien optimisé pour les appareils mobiles, un critère de classement important pour Google.",
    href: "/documentation/mobile-optimization",
  },
  {
    title: "Optimisation des images",
    description:
      "Réduisez la taille des images pour accélérer le temps de chargement sans perdre en qualité.",
    href: "/documentation/image-optimization",
  },
  {
    title: "Contenu de qualité",
    description:
      "Publiez des articles ou pages utiles, bien rédigés et régulièrement mis à jour, répondant aux besoins des utilisateurs.",
    href: "/documentation/quality-content",
  },
];

function SeoGrid({ elements }: { elements: SeoElementProps[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
      {elements.map((element) => (
        <a
          key={element.href}
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

export function SeoPractices() {
  return <SeoGrid elements={seoPractices} />;
}
