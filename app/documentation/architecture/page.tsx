"use client";
import { useArticleProgress } from "@/app/lib/custom-hooks";
import { ArticleProgress } from "@/app/ui/articleProgess";
import CleanArchitectureOverview from "@/app/ui/documentation/architecture/clean-architecture-overview";
import { links } from "@/app/ui/documentation/seo-starter-guide/data";
import { NavPagination } from "@/app/ui/documentation/seo-starter-guide/navPagination";
import Image from "next/image";

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
      <div id="content" className="max-w-4xl px-4">
        <Image
          width={800}
          height={340}
          src="/clean-architecture-diagram.png"
          alt="Clean Architecture Diagram"
        />
        <CleanArchitectureOverview />
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
