"use client";

import { useArticleProgress } from "@/app/lib/custom-hooks";
import { ArticleProgress } from "@/app/ui/articleProgess";
import { Code } from "@/app/ui/code";
import { links } from "@/app/ui/documentation/seo-starter-guide/data";
import { NavPagination } from "@/app/ui/documentation/seo-starter-guide/navPagination";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Page() {
  const sections = [
    { id: "Introduction", title: "Introduction" },
    { id: "static-sitemap", title: "Static sitemap" },
    { id: "dynamic-sitemap", title: "Dynamic sitemap" },
  ];

  const activeSection = useArticleProgress(sections);

  return (
    <main className="flex flex-row justify-center">
      <div className="p-6 max-w-4xl mx-auto">
        <h1 id="introduction" className="text-2xl font-bold mb-4">
          Les Sitemaps
        </h1>
        <p className="mb-4">
          <strong>sitemap.(xml|js|ts)</strong> est un fichier spécial qui suit
          le{" "}
          <Link
            href={"https://www.sitemaps.org/protocol.html"}
            className={buttonVariants({ variant: "link" })}
          >
            format XML des Sitemaps
          </Link>{" "}
          afin d’aider les robots des moteurs de recherche à indexer votre site
          plus efficacement.. Ils indiquent les URL appartenant à votre site web
          et signalent les mises à jour afin que Google puisse détecter plus
          facilement le nouveau contenu et explorer votre site plus
          efficacement.
        </p>
        <p className="mb-4">
          Bien que les sitemaps XML soient les plus connus et les plus utilisés,
          ils peuvent aussi être créés via{" "}
          <Link
            href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap"
            className={buttonVariants({ variant: "link" })}
          >
            RSS
          </Link>
          ,{" "}
          <Link
            href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap"
            className={buttonVariants({ variant: "link" })}
          >
            Atom
          </Link>
          , ou même via des fichiers
          <Link
            href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap"
            className={cn(buttonVariants({ variant: "link" }), "pl-1 pr-1")}
          >
            Text
          </Link>
          pour une simplicité maximale.
        </p>
        <p className="mb-4">
          Un sitemap est un fichier où vous fournissez des informations sur les
          pages, vidéos et autres fichiers de votre site, ainsi que les
          relations entre eux. Les moteurs de recherche comme Google lisent ce
          fichier pour explorer votre site de manière plus intelligente.
        </p>
        {/* Why use a sitemap */}
        <h2 className="text-xl font-bold mt-6">
          Pourquoi utiliser un sitemap ?
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Si votre site est très grand, certaines pages peuvent être oubliées
            par Google lors de l'exploration.
          </li>
          <li>
            Si votre site contient un grand nombre de pages isolées ou mal
            reliées entre elles.
          </li>
          <li>
            Si votre site est récent et dispose de peu de liens externes
            pointant vers lui.
          </li>
          <li>
            Si votre site contient du contenu riche (vidéos, images) ou apparaît
            dans Google News.
          </li>
        </ul>

        <p className="mb-4">
          Bien qu'un sitemap ne soit pas obligatoire pour le référencement, il
          facilite l'indexation de votre contenu et peut accélérer son
          apparition dans les résultats de recherche.
        </p>
        <p className="mb-4">
          Il est fortement recommandé d'utiliser des sitemaps dynamiques pour
          tenir compte des nouveaux contenus publiés sur votre site. Les
          sitemaps statiques restent valides, mais sont moins utiles pour la
          découverte constante de nouvelles pages.
        </p>

        <h2 className="text-xl font-bold mt-6">
          Comment ajouter un sitemap à un projet Next.js
        </h2>
        <p className="mb-4">Il existe deux options :</p>

        <section id="static-sitemap">
          <h3 className="text-lg font-semibold">1. Static</h3>
          <p className="mb-4">
            Si votre site est relativement simple et statique, vous pouvez créer
            manuellement un fichier{" "}
            <code className="bg-gray-200 p-1 rounded-md ml-1">sitemap.xml</code>{" "}
            dans le dossier{" "}
            <code className="bg-gray-200 p-1 rounded-md ml-1">public</code> :
          </p>
          <Code>{`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
  <loc>https://acme.com</loc>
  <lastmod>2023-04-06T15:02:24.021Z</lastmod>
  <changefreq>yearly</changefreq>
  <priority>1</priority>
  </url>
  <url>
  <loc>https://acme.com/about</loc>
  <lastmod>2023-04-06T15:02:24.021Z</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
  </url>
  <url>
  <loc>https://acme.com/blog</loc>
  <lastmod>2023-04-06T15:02:24.021Z</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.5</priority>
  </url>
  </urlset>
  `}</Code>
        </section>
        <section id="dynamic-sitemap">
          <h3 className="text-lg font-semibold mt-6">2. Dynamique</h3>
          <p className="mb-4">
            Si votre site est dynamique, vous pouvez utiliser{" "}
            <strong>getServerSideProps</strong> pour générer un sitemap XML à la
            demande.
          </p>
          <p className="mb-4">
            Nous pouvons créer une nouvelle page dans le dossier{" "}
            <code className="bg-gray-200 p-1 rounded-md ml-1">pages</code>,
            comme{" "}
            <code className="bg-gray-200 p-1 rounded-md ml-1">
              pages/sitemap.xml.js
            </code>
            . Cette page interrogera notre API pour récupérer les URL des pages
            dynamiques et générera un fichier XML en réponse à la requête{" "}
            <code className="bg-gray-200 p-1 rounded-md ml-1">
              /sitemap.xml
            </code>
            .
          </p>

          <Code>
            {`import type { MetadataRoute } from 'next'
 
 export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://acme.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://acme.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://acme.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}`}
          </Code>
        </section>
        <section className="mt-6">
          <h3 className="text-lg font-semibold">Plus de ressources</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <Link
                href="https://www.sitemaps.org/protocol.html"
                className={buttonVariants({ variant: "link" })}
              >
                Sitemap Protocol
              </Link>
            </li>
            <li>
              <Link
                href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap"
                className={buttonVariants({ variant: "link" })}
              >
                Google Search Central - Sitemaps
              </Link>
            </li>
            <li>
              <Link
                href="https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap"
                className={buttonVariants({ variant: "link" })}
              >
                Next.js Doc - Sitemaps
              </Link>
            </li>
          </ul>
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
