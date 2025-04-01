import React from "react";

interface SeoElementsProps {
  title: string;
  description: string;
  href: string;
  gradient: string;
}

const seoElements: SeoElementsProps[] = [
  {
    title: "Web Core Vitals",
    description:
      "Mesure la performance du site à travers des indicateurs tels que CLS, INP et LCP qui influencent l'expérience utilisateur.",
    href: "/documentation/web-core-vitals",
    gradient: "from-blue-900 to-blue-700",
  },
  {
    title: "PageSpeed Insights",
    description:
      "Analyse la vitesse de votre site et propose des recommandations pour améliorer sa rapidité.",
    href: "/documentation/pagespeed-insights",
    gradient: "from-indigo-900 to-indigo-700",
  },
  {
    title: "Sitemap",
    description:
      "Un fichier qui permet aux moteurs de recherche de découvrir et d'indexer toutes les pages de votre site.",
    href: "/documentation/sitemap",
    gradient: "from-green-900 to-green-700",
  },
  {
    title: "robots.txt",
    description:
      "Indique aux moteurs de recherche les pages qu'ils doivent ou ne doivent pas explorer sur votre site.",
    href: "/documentation/robots-txt",
    gradient: "from-emerald-900 to-emerald-700",
  },
  {
    title: "Google Search Console",
    description:
      "Un outil pour surveiller l'indexation, l'analyse des requêtes de recherche, et les problèmes techniques de votre site.",
    href: "/documentation/google-search-console",
    gradient: "from-gray-900 to-gray-700",
  },
  {
    title: "Google Analytics",
    description:
      "Permet de suivre les comportements des utilisateurs, de mesurer les conversions et de mieux comprendre les performances de votre site.",
    href: "/documentation/google-analytics",
    gradient: "from-slate-900 to-slate-700",
  },
  {
    title: "Yoast SEO",
    description:
      "Simplifie l'optimisation SEO sur chaque page en vous aidant à gérer les balises méta, les titres et descriptions.",
    href: "/documentation/yoast-seo",
    gradient: "from-red-900 to-red-700",
  },
  {
    title: "Backlinks",
    description:
      "L'acquisition de liens entrants de qualité augmente l'autorité de votre site et améliore son classement.",
    href: "/documentation/backlinks",
    gradient: "from-orange-900 to-orange-700",
  },
  {
    title: "Optimisation des mots-clés",
    description:
      "La recherche et l'intégration de mots-clés pertinents sont essentielles pour apparaître dans les résultats de recherche.",
    href: "/documentation/keyword-optimization",
    gradient: "from-purple-900 to-purple-700",
  },
  {
    title: "Structure URL claire",
    description:
      "Une URL bien structurée, concise et descriptive est cruciale pour le SEO et l'expérience utilisateur.",
    href: "/documentation/url-structure",
    gradient: "from-violet-900 to-violet-700",
  },
  {
    title: "Optimisation mobile",
    description:
      "Assurez-vous que votre site soit responsive et bien optimisé pour les appareils mobiles, un critère de classement important pour Google.",
    href: "/documentation/mobile-optimization",
    gradient: "from-cyan-900 to-cyan-700",
  },
  {
    title: "Optimisation des images",
    description:
      "Réduisez la taille des images pour accélérer le temps de chargement sans perdre en qualité.",
    href: "/documentation/image-optimization",
    gradient: "from-teal-900 to-teal-700",
  },
  {
    title: "Contenu de qualité",
    description:
      "Publiez des articles ou pages utiles, bien rédigés et régulièrement mis à jour, répondant aux besoins des utilisateurs.",
    href: "/documentation/quality-content",
    gradient: "from-pink-900 to-pink-700",
  },
  {
    title: "Balises H1, H2, H3",
    description:
      "Utilisez ces balises pour structurer votre contenu et aider Google à mieux comprendre le sujet de chaque page.",
    href: "/documentation/heading-tags",
    gradient: "from-yellow-900 to-yellow-700",
  },
  {
    title: "Balise Meta Description",
    description:
      "Ajoutez des descriptions concises et accrocheuses qui apparaîtront dans les résultats de recherche et inciteront les utilisateurs à cliquer.",
    href: "/documentation/meta-description",
    gradient: "from-indigo-900 to-indigo-700",
  },
  {
    title: "Rich Snippets",
    description:
      "Utilisez des données structurées (schema.org) pour enrichir l'apparence de vos pages dans les résultats de recherche.",
    href: "/documentation/rich-snippets",
    gradient: "from-blue-900 to-blue-700",
  },
  {
    title: "HTTPS",
    description:
      "Un certificat SSL assure la sécurité de votre site, renforce la confiance des utilisateurs et améliore le classement dans Google.",
    href: "/documentation/https",
    gradient: "from-green-900 to-green-700",
  },
  {
    title: "Vitesse de chargement",
    description:
      "Optimisez les éléments du site pour réduire le temps de chargement, ce qui améliore l'expérience utilisateur et le classement.",
    href: "/documentation/loading-speed",
    gradient: "from-red-900 to-red-700",
  },
  {
    title: "Social Media Sharing",
    description:
      "Facilitez le partage de contenu sur les réseaux sociaux pour augmenter la visibilité et générer du trafic.",
    href: "/documentation/social-media-sharing",
    gradient: "from-orange-900 to-orange-700",
  },
];

export function SeoElements() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {seoElements.map((element) => (
        <a
          key={element.href}
          href={element.href}
          className={`block p-6 rounded-lg bg-gradient-to-br ${element.gradient} 
            hover:scale-[1.02] transition-transform duration-200 
            shadow-lg hover:shadow-xl group relative overflow-hidden`}
        >
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-white mb-2">
              {element.title}
            </h2>
            <p className="text-gray-300 text-sm">{element.description}</p>
          </div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
        </a>
      ))}
    </div>
  );
}
