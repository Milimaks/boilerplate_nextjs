"use client";

import { useArticleProgress } from "@/app/lib/custom-hooks";
import { ArticleProgress } from "@/app/ui/articleProgess";
import { links } from "@/app/ui/documentation/seo-starter-guide/data";
import { NavPagination } from "@/app/ui/documentation/seo-starter-guide/navPagination";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "definition", title: "Définition des Web Core Vitals" },
    { id: "indicateurs", title: "Les trois indicateurs clés" },
    { id: "importance", title: "Pourquoi sont-ils importants ?" },
    { id: "amelioration", title: "Comment les améliorer ?" },
  ];

  const activeSection = useArticleProgress(sections);

  return (
    <main className="flex flex-row justify-center">
      <div id="content" className="max-w-4xl px-4">
        <div className="mb-6">
          <h1 id="introduction" className="text-3xl font-bold">
            Web Performance & Core Web Vitals
          </h1>
          <p className="text-md text-gray-600 opacity-60 leading-relaxed mb-6">
            Les Web Core Vitals sont un ensemble de métriques définies par
            Google pour mesurer la qualité de l'expérience utilisateur sur le
            web.
          </p>
        </div>

        <section id="definition" className="mb-6">
          <p>
            <Link
              className={buttonVariants({ variant: "link" })}
              href="https://web.dev/articles/vitals"
            >
              Web Vitals
            </Link>{" "}
            est une initiative créée par Google pour fournir des directives
            unifiées et des métriques permettant de mesurer l'expérience
            utilisateur des pages web.
          </p>
          <br />
          <p>
            <Link
              className={buttonVariants({ variant: "link" })}
              href="https://developers.google.com/search/blog/2020/11/timing-for-page-experience"
            >
              Core Web Vitals
            </Link>{" "}
            est un sous-ensemble de Web Vitals, qui se compose actuellement de
            trois métriques mesurant le chargement, l'interactivité et la
            stabilité visuelle. Ces métriques sont{" "}
            <Link
              className={buttonVariants({ variant: "link" })}
              href="#largest-contentful-paint"
            >
              Largest Contentful Paint (LCP)
            </Link>
            ,{" "}
            <Link
              className={buttonVariants({ variant: "link" })}
              href="#input-delay"
            >
              First Input Delay (FID)
            </Link>
            , et{" "}
            <Link
              className={buttonVariants({ variant: "link" })}
              href="#cumulative-layout-shift"
            >
              Cumulative Layout Shift (CLS)
            </Link>
            .
          </p>

          <h2 className="text-2xl font-semibold pt-4">
            Les trois indicateurs clés
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>
                {" "}
                <Link
                  className={buttonVariants({ variant: "link" })}
                  href="#largest-contentful-paint"
                >
                  Largest Contentful Paint (LCP)
                </Link>
              </strong>{" "}
              : mesure le temps de chargement du plus grand élément visible.
            </li>
            <li>
              <strong>
                {" "}
                <Link
                  className={buttonVariants({ variant: "link" })}
                  href="#input-delay"
                >
                  {" "}
                  First Input Delay (FID){" "}
                </Link>
              </strong>{" "}
              : évalue la réactivité en mesurant le délai entre la première
              interaction et la réponse du site.
            </li>
            <li>
              <strong>
                {" "}
                <Link
                  className={buttonVariants({ variant: "link" })}
                  href="#cumulative-layout-shift"
                >
                  Cumulative Layout Shift (CLS)
                </Link>
              </strong>{" "}
              : analyse la stabilité visuelle en détectant les déplacements
              inattendus d'éléments sur la page.
            </li>
          </ul>
        </section>

        <section id="importance" className="mb-6">
          <h2 className="text-2xl font-semibold">
            Pourquoi sont-ils importants ?
          </h2>
          <p>
            Google intègre les Web Core Vitals dans son algorithme de
            classement, ce qui signifie qu'un bon score peut améliorer le
            référencement naturel.
          </p>
        </section>

        <section id="amelioration" className="mb-6">
          <h2 className="text-2xl font-semibold">Comment les améliorer ?</h2>
          <ul className="list-disc pl-6">
            <li>Optimiser les images et les ressources statiques.</li>
            <li>
              Réduire le JavaScript bloquant et améliorer le temps de réponse du
              serveur.
            </li>
            <li>Utiliser des techniques de mise en cache et un CDN.</li>
          </ul>
        </section>
        <NavPagination links={links} className="pt-20 pb-6" />
      </div>

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
