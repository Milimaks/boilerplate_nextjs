"use client";

import { useArticleProgress } from "@/app/lib/custom-hooks";
import { ArticleProgress } from "@/app/ui/articleProgess";
import { Code } from "@/app/ui/code";
import { links } from "@/app/ui/documentation/seo-starter-guide/data";
import { Footer } from "@/app/ui/documentation/seo-starter-guide/footer";
import { buttonVariants } from "@/components/ui/button";
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
            className={buttonVariants({ variant: "link" })}
          >
            fichier robots.txt
          </Link>{" "}
          indique aux robots des moteurs de recherche quelles pages ou fichiers
          ils peuvent ou ne peuvent pas demander sur votre site. Le fichier
          robots.txt est une norme web que la plupart des{" "}
          <Link
            href="https://www.cloudflare.com/learning/bots/how-to-manage-good-bots/"
            className={buttonVariants({ variant: "link" })}
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

# Block all bots from accessing sensitive directories
User-agent: *
Disallow: /admin/
Disallow: /private/
Disallow: /config/

# Allow Googlebot to crawl the entire site
User-agent: Googlebot
Allow: /

# Block a specific file for all bots
Disallow: /secret-page.html

# Specify the sitemap location
Sitemap: https://www.example.com/sitemap.xml`}
        </Code>
        <Footer links={links} className="pt-20 pb-6" />
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
