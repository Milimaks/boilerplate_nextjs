"use client";

import { useArticleProgress } from "@/app/lib/custom-hooks";
import { ArticleProgress } from "@/app/ui/articleProgess";
import { links } from "@/app/ui/documentation/seo-starter-guide/data";
import { NavPagination } from "@/app/ui/documentation/seo-starter-guide/navPagination";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Code } from "@/app/ui/code";
import { InlineCode } from "@/app/ui/inlineCode";
import { Section } from "@/app/ui/section";

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
        </div>

        <Section id="definition" className="mb-6">
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
          <Image
            width={850}
            height={300}
            className="w-full pt-4"
            alt="Web Core Vitals"
            src="/vitals-light.png"
          ></Image>
        </Section>

        <Section id="importance" className="mb-6">
          <h2 className="text-2xl font-semibold">
            Pourquoi sont-ils importants ?
          </h2>
          <p>
            Google intègre les Web Core Vitals dans son algorithme de
            classement, ce qui signifie qu'un bon score peut améliorer le
            référencement naturel.
          </p>
        </Section>

        <Section id="amelioration" className="mb-6">
          <h2 className="text-2xl font-semibold">Comment les améliorer ?</h2>
          <ul className="list-disc pl-6">
            <li>Optimiser les images et les ressources statiques.</li>
            <li>
              Réduire le JavaScript bloquant et améliorer le temps de réponse du
              serveur.
            </li>
            <li>Utiliser des techniques de mise en cache et un CDN.</li>
          </ul>
        </Section>

        <Section id="Largest-contentful-paint" className="mb-6">
          <h2 className="text-2xl font-semibold pb-4">
            <Link href={"https://web.dev/articles/lcp"}>
              <u> LCP (Largest Contentful Paint)</u>
            </Link>{" "}
          </h2>
          <p>
            La métrique <strong> Largest Contentful Paint (LCP)</strong> évalue
            les performances de chargement de votre page. LCP mesure le temps
            nécessaire pour afficher le plus grand élément de la page dans la
            zone visible de l'écran. Il peut s'agir d'un grand bloc de texte,
            d'une vidéo ou d'une image occupant l'espace principal de la page.
          </p>
          <br />
          <p>
            Au fur et à mesure du rendu du DOM, le plus grand élément de la page
            peut changer. Le Largest Contentful Paint continue de mesurer
            jusqu'à ce que l'image ou l'élément le plus grand soit affiché à
            l'écran.
          </p>

          <Image
            width={1000}
            height={300}
            src={"/lcp-example.png"}
            alt={"lcp example"}
          ></Image>
          <p>
            Voici quelques optimisations spécifiques à Next.js pour améliorer le
            LCP :
          </p>
          <br />
          <Section>
            <h2 className="text-1xl font-bold text-gray-800 mb-4">
              1. Optimiser les images avec <InlineCode>next/image</InlineCode>
            </h2>
            <p className="">
              Utiliser le composant <InlineCode>{"<Image>"}</InlineCode> de
              Next.js qui applique automatiquement le lazy loading, le
              redimensionnement, et la compression des images.
            </p>
            <Code>
              {`
<Image
  src="/hero-image.jpg"
  alt="Hero Image"
  width={1200}
  height={600}
  priority
  className="rounded-lg shadow-md"
/>`}
            </Code>
            <p className="mt-4 ">
              <strong>Astuce :</strong> Ajouter{" "}
              <InlineCode>priority</InlineCode> pour les images importantes
              comme celles du <strong>hero section</strong>.
            </p>
          </Section>

          <Section>
            <h2 className="text-1xl font-bold text-gray-800 mb-4">
              2. Charger le CSS de manière optimisée
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li className="">
                Utiliser <strong>CSS Modules</strong> ou{" "}
                <strong>TailwindCSS</strong> au lieu de styles globaux qui
                peuvent ralentir le rendu.
              </li>
              <li className="">
                Éviter le blocking CSS en limitant l'importation excessive de
                fichiers CSS externes.
              </li>
            </ul>
          </Section>

          <Section>
            <h2 className="text-1xl font-bold text-gray-800 mb-4">
              3. Précharger les polices Web
            </h2>
            <p className="">
              Google Fonts peut impacter le LCP. Utilisez{" "}
              <InlineCode>next/font</InlineCode> pour optimiser leur chargement
              :
            </p>
            <Code>
              {`import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });
<main className={inter.className}>Mon site</main>`}
            </Code>
          </Section>

          <Section>
            <h2 className="text-1xl font-bold text-gray-800 mb-4">
              4. Optimiser le rendu côté serveur{" "}
              <Link
                href={
                  "https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering"
                }
              >
                <u>(SSR)</u>
              </Link>{" "}
              ou statique{" "}
              <Link
                href={
                  "https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation"
                }
              >
                <u>(SSG)</u>
              </Link>
            </h2>
            <p className="">
              Privilégier <InlineCode>getServerSideProps</InlineCode> ou{" "}
              <InlineCode>getStaticProps</InlineCode> pour charger rapidement le
              contenu principal.
            </p>
            <p className="">
              Utiliser <strong>ISR (Incremental Static Regeneration)</strong>{" "}
              pour améliorer la performance.
            </p>
            <br />
            <p className="font-bold">
              Exemple avec <InlineCode>getServerSideProps</InlineCode> :
            </p>
            <Code>{`// pages/index.js
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const HomePage = ({ data }) => {
  return (
    <div>
      <h1>Page with Server-Side Rendering</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
`}</Code>
          </Section>

          <Section>
            <h2 className="text-1xl font-bold text-gray-800 mb-4">
              5. Utiliser <InlineCode>next/script</InlineCode> pour charger les
              scripts de manière optimale
            </h2>
            <p className="">
              Charger les scripts en <strong>"lazy"</strong> ou{" "}
              <strong>"beforeInteractive"</strong> selon leur importance :
            </p>
            <Code>
              {`import Script from "next/script";

<Script src="https://example.com/script.js" strategy="lazyOnload" />`}
            </Code>
          </Section>

          <Section>
            <h2 className="text-1xl font-bold text-gray-800 mb-4">
              6. Optimiser le cache et l'hébergement
            </h2>
            <ul className="list-disc pl-5">
              <li>
                Utiliser un <strong>CDN</strong> (Vercel, Cloudflare) pour
                charger le contenu plus rapidement.
              </li>
              <li>
                Activer la compression <strong>Gzip</strong> ou{" "}
                <strong>Brotli</strong> sur le serveur.
              </li>
            </ul>
          </Section>
        </Section>
        {/* First Input Delay */}
        <Section>
          <h2 className="text-2xl font-semibold pb-4">
            <Link href={"https://web.dev/articles/fid"}>
              <u> FID (First Input Delay)</u>
            </Link>{" "}
          </h2>

          <p>
            {" "}
            La métrique <strong>First Input Delay (FID)</strong> représente la
            perception de l'expérience d'un utilisateur lorsqu'il interagit avec
            une page web. Imaginez cliquer dans une zone de saisie et que rien
            ne se passe – cette frustration liée à l'interactivité et à la
            réactivité d'un site est causée par de longs délais de réponse aux
            interactions.
          </p>
          <Image
            width={1000}
            height={300}
            src={"/lcp-example.png"}
            alt={"lcp example"}
          />
        </Section>
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
