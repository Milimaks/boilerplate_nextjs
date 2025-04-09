"use client";

import { useArticleProgress } from "@/app/lib/custom-hooks";
import { ArticleProgress } from "@/app/ui/articleProgess";
import { links } from "@/app/ui/documentation/seo-starter-guide/data";
import { NavPagination } from "@/app/ui/documentation/seo-starter-guide/navPagination";
import {
  SeoOffPage,
  SeoOnPage,
  SeoTechnique,
  SeoTools,
} from "@/app/ui/documentation/seoElements";
import { SeoChecklist } from "@/app/ui/seoCheckList";

export default function Page() {
  const sections = [
    { id: "what-is-seo", title: "Présentation" },
    { id: "research-system", title: "Systèmes de recherche " },
    { id: "getting-started", title: "Getting Started" },
    { id: "best-practices", title: "Best Practices" },
  ];

  const activeSection = useArticleProgress(sections);

  return (
    <main className="flex flex-row justify-center">
      <div id="content" className="max-w-4xl px-4   ">
        <h1 id="what-is-seo" className="text-3xl font-bold  mb-6">
          Introduction au SEO
        </h1>
        <SeoChecklist />
        <section className="mt-4">
          <p className="text-md text-gray-600 leading-relaxed mb-6">
            Le SEO (Search Engine Optimization) désigne l'ensemble des
            techniques visant à améliorer la visibilité d'un site web dans les
            résultats des moteurs de recherche comme Google. <br />
            <br />
            Son but est d'augmenter le trafic organique, c'est-à-dire le nombre
            de visiteurs qui arrivent sur votre site sans avoir payé pour de la
            publicité. <br />
            <br />
            Pour ce faire, il existe plusieurs aspects à prendre en compte : la
            performance du site, la qualité du contenu, l'expérience
            utilisateur, et l'autorité du domaine. <br />
            <br />
            Voici une liste des principaux outils et pratiques SEO à mettre en
            place pour optimiser rapidement votre site.
          </p>
        </section>
        <h2 className="text-3xl font-bold text-gray-800 pb-4">
          Les trois piliers du SEO
        </h2>
        <h3 className="text-2xl font-bold text-gray-800">1. SEO Technique</h3>
        <p className="text-xs text-gray-500 leading-relaxed">
          Optimisation des aspects techniques du site pour améliorer
          l’exploration et l’indexation (vitesse, responsive, sitemap, balises,
          etc.).
        </p>
        <SeoTechnique />
        <h3 className="text-2xl font-bold text-gray-800 pt-6">
          2. SEO On-Page
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed">
          Optimisation du contenu visible et du code HTML d’une page (mots-clés,
          balises title/h1, structure, maillage interne, UX...).
        </p>
        <SeoOnPage />
        <h3 className="text-2xl font-bold text-gray-800 pt-6">
          3. SEO Off-Page
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed">
          Optimisation des éléments externes au site (backlinks, réseaux
          sociaux, e-réputation, etc.).
        </p>
        <SeoOffPage />
        <h2 className="text-3xl font-bold text-gray-800 pt-6">Les outils</h2>
        <SeoTools />
        <div className="p-6 font-sans">
          <h1 id="research-system" className="text-3xl font-bold text-gray-800">
            Les Systèmes de Recherche
          </h1>
          <p className="mt-4 text-gray-700">
            Les systèmes de recherche sont ce que vous appelez généralement des
            moteurs de recherche (Google, Bing, DuckDuckGo, etc.). Ce sont des
            systèmes extrêmement complexes qui relèvent certains des plus grands
            défis de l'histoire de la technologie.
          </p>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">
            Les Quatre Responsabilités Principales
          </h2>

          <div className="mt-4 space-y-4">
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900">Exploration</h3>
              <p className="text-gray-700">
                Le processus de parcours du Web et d'analyse du contenu de tous
                les sites. Cette tâche est immense, car il existe plus de 350
                millions de domaines disponibles.
              </p>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900">Indexation</h3>
              <p className="text-gray-700">
                Recherche d'espaces de stockage pour toutes les données
                collectées lors de l'exploration afin qu'elles puissent être
                accessibles.
              </p>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900">Rendu</h3>
              <p className="text-gray-700">
                Exécution des ressources sur la page, comme le JavaScript, qui
                peuvent améliorer les fonctionnalités et enrichir le contenu du
                site. Ce processus ne se produit pas pour toutes les pages
                explorées et peut parfois arriver avant ou après l'indexation.
              </p>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900">Classement</h3>
              <p className="text-gray-700">
                Interrogation des données pour générer des pages de résultats
                pertinentes en fonction de la requête utilisateur. C'est ici que
                les critères de classement sont appliqués pour fournir la
                meilleure réponse possible.
              </p>
            </div>
          </div>
        </div>

        <h2 id="getting-started" className="text-2xl font-semibold mt-8">
          Conclusion
        </h2>
        <p className="text-md leading-relaxed">
          En appliquant ces méthodes et en utilisant les outils mentionnés
          ci-dessus, vous pouvez significativement améliorer la performance SEO
          de votre site. Que ce soit par l'optimisation de la vitesse de
          chargement, la création de contenu de qualité, ou la mise en place de
          bonnes pratiques de backlinks, chaque action compte pour atteindre un
          meilleur classement dans les moteurs de recherche et attirer davantage
          de visiteurs.
        </p>

        <NavPagination links={links} className="pt-20 pb-6" />
      </div>
      {/* Progression de l'article en sticky */}
      <div className="hidden xl:block sticky top-10 h-fit min-w-[200px] max-w-[300px]">
        <ArticleProgress
          sections={sections.map((section) => ({
            ...section,
            isActive: section.id === activeSection,
          }))}
        />
      </div>
    </main>
  );
}
