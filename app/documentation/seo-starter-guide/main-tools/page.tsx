"use client";

import { useArticleProgress } from "@/shared/hooks/use-articleProgress";
import { ArticleProgress } from "@/components/reusable/articleProgess";
import { links } from "@/features/documentation/seo-starter-guide/data";
import { NavPagination } from "@/components/reusable/nav-pagination";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

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
            Optimiser son site avec différents outils SEO
          </h1>
        </div>

        {/* PageSpeed Insights */}
        <section id="pagespeed-insights" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            <u>PageSpeed Insights :</u> Améliorer la performance de son site
          </h2>
          <p className="mb-4">
            <strong>
              <Link
                href="https://pagespeed.web.dev/"
                className={buttonVariants({ variant: "link" })}
              >
                PageSpeed Insights
              </Link>
            </strong>{" "}
            est un outil développé par Google qui analyse la vitesse de
            chargement d'une page web et fournit des recommandations
            d'optimisation. Il attribue un score de performance sur{" "}
            <strong>100 points</strong>, basé sur des critères techniques et UX.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Analyse de la vitesse de chargement sur{" "}
              <strong>mobile et desktop</strong>.
            </li>
            <li>
              Identification des éléments ralentissant le site (images lourdes,
              scripts bloquants, manque de mise en cache, etc.).
            </li>
            <li>
              Suggestions d'améliorations comme la compression des images, le
              lazy loading ou l'utilisation d'un CDN.
            </li>
          </ul>
          <p>
            En optimisant les performances de son site grâce à{" "}
            <strong>
              {" "}
              <Link
                href="https://pagespeed.web.dev/"
                className={buttonVariants({ variant: "link" })}
              >
                PageSpeed Insights
              </Link>
            </strong>
            , on améliore l'expérience utilisateur et on favorise un meilleur
            classement dans les résultats de recherche.
          </p>
          <Image
            width={850}
            height={200}
            className="w-full pt-4"
            alt="PageSpeed Insights"
            src="/PageSpeedInsights_searchBar.png"
          />
        </section>

        {/* Google Search Console */}
        <section id="google-search-console" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            <u>Google Search Console :</u> Suivi du référencement et de
            l'indexation
          </h2>
          <p className="mb-4">
            <strong>
              <Link
                href="https://search.google.com/search-console/welcome"
                className={buttonVariants({ variant: "link" })}
              >
                {" "}
                Google Search Console (GSC)
              </Link>
            </strong>{" "}
            est un outil indispensable pour les webmasters et référenceurs. Il
            permet de suivre et d'optimiser le référencement d’un site en
            fournissant des données sur l’indexation et la visibilité sur
            Google.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Inspection d’URL</strong> : Vérification de l’indexation
              d’une page et des éventuelles erreurs.
            </li>
            <li>
              <strong>Rapports sur la couverture</strong> : Identification des
              pages bien indexées, exclues ou en erreur.
            </li>
            <li>
              <strong>Analyse des performances</strong> : Suivi des clics,
              impressions et positions des pages sur Google.
            </li>
            <li>
              <strong>Améliorations UX et mobiles</strong> : Détection des
              problèmes d’expérience utilisateur (Core Web Vitals, compatibilité
              mobile).
            </li>
            <li>
              <strong>
                Gestion du{" "}
                <Link
                  href="/documentation/seo-starter-guide/sitemap"
                  className={buttonVariants({ variant: "link" })}
                >
                  sitemap
                </Link>{" "}
                et des fichiers{" "}
                <Link
                  href="/documentation/seo-starter-guide/robots-txt"
                  className={buttonVariants({ variant: "link" })}
                >
                  robots.txt
                </Link>
              </strong>
              .
            </li>
          </ul>
          <p>
            Google Search Console permet d’identifier rapidement les problèmes
            d’indexation et d’optimiser la présence d’un site dans les résultats
            de recherche.
          </p>
          <br />
          <p>
            Google doit s’assurer que tu es bien propriétaire du site. Tu
            pourras suivre les indications sur{" "}
            <Link
              href="https://search.google.com/search-console/welcome"
              className={buttonVariants({ variant: "link" })}
            >
              {" "}
              Google Search Console
            </Link>
            , en ajoutant un fichier TXT à ton domaine par exemple
          </p>
        </section>
        {/* Google Analytics */}
        <section id="google-analytics" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            <Link href="/document" className="">
              <u>Google Analytics</u>
            </Link>{" "}
            et{" "}
            <Link href="/document">
              <u>Google Tag Manager</u>
            </Link>{" "}
            : Suivi des visiteurs et des comportements
          </h2>
          <p className="mb-4">
            <strong>Google Analytics</strong> est l’outil de référence pour
            analyser le trafic et le comportement des utilisateurs sur un site
            web. Il fournit des données précieuses pour améliorer l'expérience
            utilisateur et adapter sa stratégie marketing.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              📈 Suivi des conversions :<strong>Suivi du trafic :</strong>Nombre
              de visiteurs, sources de trafic (référencement naturel, publicité,
              réseaux sociaux, etc.).
            </li>
            <li>
              📊
              <strong>Comportement des utilisateurs :</strong>Pages visitées,
              taux de rebond, temps passé sur le site.
            </li>
            <li>
              📦
              <strong>Suivi des conversions :</strong> Actions clés (achats,
              soumissions de formulaires).
            </li>
            <li>
              📍
              <strong>Origine du trafic :</strong> Données démographiques,
              localisation, type d’appareil utilisé.
            </li>
            <li>
              🎯
              <strong>Suivi des événements :</strong> Clics sur un bouton,
              lecture de vidéos.
            </li>
          </ul>
          <p>
            Avec <strong>Google Analytics</strong>, on peut identifier les pages
            performantes et celles qui nécessitent des améliorations pour
            optimiser la navigation et le taux de conversion.
          </p>
        </section>

        <NavPagination links={links} className="pt-20 pb-6" />
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
