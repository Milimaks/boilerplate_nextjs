"use client";
import { useArticleProgress } from "@/app/lib/custom-hooks";
import { ArticleProgress } from "@/app/ui/articleProgess";
import CleanArchitectureOverview from "@/app/ui/documentation/architecture/clean-architecture-overview";
import ProjectTree from "@/app/ui/documentation/architecture/project-tree";
import { links } from "@/app/ui/documentation/seo-starter-guide/data";
import { NavPagination } from "@/app/ui/documentation/seo-starter-guide/navPagination";
import { useEffect, useState } from "react";

export default function Page() {
  // Fetch all files from the server for the project tree
  const [fileContents, setFileContents] = useState<Record<string, string>>({});

  useEffect(() => {
    async function fetchFileContents() {
      const response = await fetch("/api/files");
      const data = await response.json();
      setFileContents(data);
    }

    fetchFileContents();
  }, []);

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
        <ProjectTree fileContents={fileContents} />
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
