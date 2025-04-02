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
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          Les Sitemaps et leur importance
        </h1>
        <p className="mb-4">
          Les sitemaps sont le moyen le plus simple de communiquer avec Google.
          Ils indiquent les URL appartenant à votre site web et signalent les
          mises à jour afin que Google puisse détecter plus facilement le
          nouveau contenu et explorer votre site plus efficacement.
        </p>
        <p className="mb-4">
          Bien que les sitemaps XML soient les plus connus et les plus utilisés,
          ils peuvent aussi être créés via RSS, Atom, ou même via des fichiers
          texte pour une simplicité maximale.
        </p>
        <p className="mb-4">
          Un sitemap est un fichier où vous fournissez des informations sur les
          pages, vidéos et autres fichiers de votre site, ainsi que les
          relations entre eux. Les moteurs de recherche comme Google lisent ce
          fichier pour explorer votre site de manière plus intelligente.
        </p>

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

        <h3 className="text-lg font-semibold">1. Manuel</h3>
        <p className="mb-4">
          Si votre site est relativement simple et statique, vous pouvez créer
          manuellement un fichier <code>sitemap.xml</code> dans le dossier{" "}
          <code>public</code> :
        </p>
        <Code>{`<?xml version="1.0" encoding="UTF-8"?>
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
              <loc>http://www.example.com/foo</loc>
              <lastmod>2021-06-01</lastmod>
            </url>
          </urlset>`}</Code>

        <h3 className="text-lg font-semibold mt-6">2. Dynamique</h3>
        <p className="mb-4">
          Si votre site est dynamique, vous pouvez utiliser{" "}
          <code>getServerSideProps</code> pour générer un sitemap XML à la
          demande.
        </p>
        <p className="mb-4">
          Nous pouvons créer une nouvelle page dans le dossier{" "}
          <code>pages</code>, comme <code>pages/sitemap.xml.js</code>. Cette
          page interrogera notre API pour récupérer les URL des pages dynamiques
          et générera un fichier XML en réponse à la requête{" "}
          <code>/sitemap.xml</code>.
        </p>

        <Code>
          {`const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';
 
          function generateSiteMap(posts) {
            return \`<?xml version="1.0" encoding="UTF-8"?>
             <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
               <url>
                 <loc>https://jsonplaceholder.typicode.com</loc>
               </url>
               <url>
                 <loc>https://jsonplaceholder.typicode.com/guide</loc>
               </url>
               \${posts.map(({ id }) => \`
                 <url>
                     <loc>\${\`\${EXTERNAL_DATA_URL}/\${id}\`}</loc>
                 </url>
               \`).join('')}
             </urlset>
           \`;
          }
           
          function SiteMap() {}
           
          export async function getServerSideProps({ res }) {
            const request = await fetch(EXTERNAL_DATA_URL);
            const posts = await request.json();
            const sitemap = generateSiteMap(posts);
            res.setHeader('Content-Type', 'text/xml');
            res.write(sitemap);
            res.end();
            return { props: {} };
          }
           
          export default SiteMap;`}
        </Code>
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
