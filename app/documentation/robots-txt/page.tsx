"use client";

import { useArticleProgress } from "@/app/lib/custom-hooks";
import { ArticleProgress } from "@/app/ui/articleProgess";
import { Code } from "@/app/ui/code";
import Link from "next/link";

export default function Page() {
  const sections = [
    { id: "what-is-seo", title: "What is SEO?" },
    { id: "why-seo", title: "Why is SEO Important?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "best-practices", title: "Best Practices" },
  ];

  const activeSection = useArticleProgress(sections);

  return (
    <main className="flex flex-row justify-center">
      <div id="content" className="max-w-4xl px-4">
        <div className="mb-6">
          <h1 id="what-is-seo" className="text-3xl font-bold">
            Quel est l'objectif d'un fichier robots.txt ?
          </h1>

          <p className="text-md text-gray-600 opacity-60 leading-relaxed mb-6">
            Indiquer quelles pages/fichiers les robots d'indexation peuvent
            explorer et analyser.
          </p>
        </div>

        <p className="text-md text-gray-600 leading-relaxed mb-6">
          Un{" "}
          <Link
            href="https://developers.google.com/search/docs/advanced/robots/intro"
            className="text-blue-500 hover:underline"
          >
            fichier robots.txt
          </Link>{" "}
          indique aux robots des moteurs de recherche quelles pages ou fichiers
          ils peuvent ou ne peuvent pas demander sur votre site. Le fichier
          robots.txt est une norme web que la plupart des{" "}
          <Link
            href="https://www.cloudflare.com/learning/bots/how-to-manage-good-bots/"
            className="text-blue-500 hover:underline"
          >
            bons robots
          </Link>{" "}
          consultent avant d’effectuer une requête sur un domaine spécifique.
          <br />
          <br />
          Vous pourriez vouloir protéger certaines zones de votre site contre
          l'exploration et donc l’indexation, comme votre CMS ou panneau
          d’administration, les comptes utilisateurs de votre e-commerce, ou
          certaines routes API, entre autres. Ces fichiers doivent être placés à
          la racine de chaque hôte, ou alternativement, vous pouvez rediriger le
          chemin <span className="bg-gray-200 p-1 rounded-md">/robots.txt</span>
          vers une URL spécifique, et la plupart des robots la suivront.
          <br />
          <br />
        </p>

        <h2 className="scroll-m-20 pb-6 text-2xl font-semibold tracking-tight first:mt-0">
          Comment ajouter un fichier robots.txt à un projet Next.js ?
        </h2>

        <p>
          Grâce à la gestion des fichiers statiques dans Next.js, nous pouvons
          facilement ajouter un fichier{" "}
          <span className="bg-gray-200 p-1 rounded-md ml-1 mr-1">
            /robots.txt
          </span>
          . Pour cela, il suffit de créer un nouveau fichier nommé{" "}
          <span className="bg-gray-200 p-1 rounded-md">/robots.txt</span>
          dans le dossier public à la racine du projet. Voici un exemple de ce
          que vous pourriez y mettre :
        </p>

        <Code>
          {`// robots.txt

# Block all crawlers for /accounts
User-agent: *
Disallow: /accounts

# Allow all crawlers
User-agent: *
Allow: /`}
        </Code>
        <div className="p-6 font-sans">
          <h1 className="text-3xl font-bold text-gray-800">
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
        <h2 id="why-seo" className="text-2xl font-semibold mb-4">
          Outils et méthodes SEO
        </h2>
        <ul className="space-y-3">
          <li>
            <strong>Web Core Vitals</strong>: Mesure la performance du site à
            travers des indicateurs tels que "CLS", "INP" et "LCP" qui
            influencent l'expérience utilisateur.
          </li>
          <li>
            <strong>PageSpeed Insights</strong>: Analyse la vitesse de votre
            site et propose des recommandations pour améliorer sa rapidité.
          </li>
          <li>
            <strong>Sitemap</strong>: Un fichier qui permet aux moteurs de
            recherche de découvrir et d'indexer toutes les pages de votre site.
          </li>
          <li>
            <strong>robots.txt</strong>: Indique aux moteurs de recherche les
            pages qu'ils doivent ou ne doivent pas explorer sur votre site.
          </li>
          <li>
            <strong>Google Search Console</strong>: Un outil pour surveiller
            l'indexation, l'analyse des requêtes de recherche, et les problèmes
            techniques de votre site.
          </li>
          <li>
            <strong>Google Analytics</strong>: Permet de suivre les
            comportements des utilisateurs, de mesurer les conversions et de
            mieux comprendre les performances de votre site.
          </li>
          <li>
            <strong>Yoast SEO (ou autre plugin SEO)</strong>: Simplifie
            l'optimisation SEO sur chaque page en vous aidant à gérer les
            balises méta, les titres et descriptions.
          </li>
          <li>
            <strong>Backlinks</strong>: L'acquisition de liens entrants de
            qualité augmente l'autorité de votre site et améliore son
            classement.
          </li>
          <li>
            <strong>Optimisation des mots-clés</strong>: La recherche et
            l'intégration de mots-clés pertinents sont essentielles pour
            apparaître dans les résultats de recherche.
          </li>
          <li>
            <strong>Structure URL claire</strong>: Une URL bien structurée,
            concise et descriptive est cruciale pour le SEO et l'expérience
            utilisateur.
          </li>
          <li>
            <strong>Optimisation mobile</strong>: Assurez-vous que votre site
            soit responsive et bien optimisé pour les appareils mobiles, un
            critère de classement important pour Google.
          </li>
          <li>
            <strong>Optimisation des images</strong>: Réduisez la taille des
            images pour accélérer le temps de chargement sans perdre en qualité.
          </li>
          <li>
            <strong>Contenu de qualité</strong>: Publiez des articles ou pages
            utiles, bien rédigés et régulièrement mis à jour, répondant aux
            besoins des utilisateurs.
          </li>
          <li>
            <strong>Balises H1, H2, H3</strong>: Utilisez ces balises pour
            structurer votre contenu et aider Google à mieux comprendre le sujet
            de chaque page.
          </li>
          <li>
            <strong>Balise Meta Description</strong>: Ajoutez des descriptions
            concises et accrocheuses qui apparaîtront dans les résultats de
            recherche et inciteront les utilisateurs à cliquer.
          </li>
          <li>
            <strong>Rich Snippets</strong>: Utilisez des données structurées
            (schema.org) pour enrichir l'apparence de vos pages dans les
            résultats de recherche.
          </li>
          <li>
            <strong>HTTPS</strong>: Un certificat SSL assure la sécurité de
            votre site, renforce la confiance des utilisateurs et améliore le
            classement dans Google.
          </li>
          <li>
            <strong>Vitesse de chargement</strong>: Optimisez les éléments du
            site pour réduire le temps de chargement, ce qui améliore
            l'expérience utilisateur et le classement.
          </li>
          <li>
            <strong>Social Media Sharing</strong>: Facilitez le partage de
            contenu sur les réseaux sociaux pour augmenter la visibilité et
            générer du trafic.
          </li>
        </ul>

        <h2 id="getting-started" className="text-2xl font-semibold mt-8">
          Conclusion
        </h2>
        <p className="text-lg leading-relaxed">
          En appliquant ces méthodes et en utilisant les outils mentionnés
          ci-dessus, vous pouvez significativement améliorer la performance SEO
          de votre site. Que ce soit par l'optimisation de la vitesse de
          chargement, la création de contenu de qualité, ou la mise en place de
          bonnes pratiques de backlinks, chaque action compte pour atteindre un
          meilleur classement dans les moteurs de recherche et attirer davantage
          de visiteurs.
        </p>
        <p className="text-lg leading-relaxed">
          En appliquant ces méthodes et en utilisant les outils mentionnés
          ci-dessus, vous pouvez significativement améliorer la performance SEO
          de votre site. Que ce soit par l'optimisation de la vitesse de
          chargement, la création de contenu de qualité, ou la mise en place de
          bonnes pratiques de backlinks, chaque action compte pour atteindre un
          meilleur classement dans les moteurs de recherche et attirer davantage
          de visiteurs.
        </p>
        <p className="text-lg leading-relaxed">
          En appliquant ces méthodes et en utilisant les outils mentionnés
          ci-dessus, vous pouvez significativement améliorer la performance SEO
          de votre site. Que ce soit par l'optimisation de la vitesse de
          chargement, la création de contenu de qualité, ou la mise en place de
          bonnes pratiques de backlinks, chaque action compte pour atteindre un
          meilleur classement dans les moteurs de recherche et attirer davantage
          de visiteurs.
        </p>
        <p className="text-lg leading-relaxed">
          En appliquant ces méthodes et en utilisant les outils mentionnés
          ci-dessus, vous pouvez significativement améliorer la performance SEO
          de votre site. Que ce soit par l'optimisation de la vitesse de
          chargement, la création de contenu de qualité, ou la mise en place de
          bonnes pratiques de backlinks, chaque action compte pour atteindre un
          meilleur classement dans les moteurs de recherche et attirer davantage
          de visiteurs.
        </p>
        <p className="text-lg leading-relaxed">
          En appliquant ces méthodes et en utilisant les outils mentionnés
          ci-dessus, vous pouvez significativement améliorer la performance SEO
          de votre site. Que ce soit par l'optimisation de la vitesse de
          chargement, la création de contenu de qualité, ou la mise en place de
          bonnes pratiques de backlinks, chaque action compte pour atteindre un
          meilleur classement dans les moteurs de recherche et attirer davantage
          de visiteurs.
        </p>
        <p className="text-lg leading-relaxed">
          En appliquant ces méthodes et en utilisant les outils mentionnés
          ci-dessus, vous pouvez significativement améliorer la performance SEO
          de votre site. Que ce soit par l'optimisation de la vitesse de
          chargement, la création de contenu de qualité, ou la mise en place de
          bonnes pratiques de backlinks, chaque action compte pour atteindre un
          meilleur classement dans les moteurs de recherche et attirer davantage
          de visiteurs.
        </p>
        <h2 id="best-practices" className="text-2xl font-semibold mt-8">
          Conclusion
        </h2>
      </div>
      {/* Progress of the article */}
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
