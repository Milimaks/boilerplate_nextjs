"use client";
import { useArticleProgress } from "@/app/lib/custom-hooks";
import { ArticleProgress } from "@/app/ui/articleProgess";
import CleanArchitectureOverview from "@/components/features/documentation/architecture/clean-architecture-overview";
import { links } from "@/components/features/documentation/architecture/data/navigation-data";
import { MoreRessources } from "@/components/reusable/more-ressources";
import { NavPagination } from "@/components/reusable/nav-pagination";
import { externalLinks } from "./external-ressources";

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
        <CleanArchitectureOverview />

        <MoreRessources externalLinks={externalLinks} />
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
