"use client";
import ProjectTree from "@/features/documentation/architecture/project-tree";
import { links } from "@/features/documentation/architecture/data/navigation-data";
import { NavPagination } from "@/shared/components/reusable/nav-pagination";
import { useEffect, useState } from "react";
import { CleanArchitectureFlow } from "@/features/documentation/architecture/clean-architecture-flow";

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

  return (
    <main className="flex flex-row justify-center">
      <div id="content" className=" px-4 max-w-full ">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold pb-4">Structure de projet</h1>
          <p className="text-md leading-relaxed pb-6">
            Ci-dessous un exemple de structure de projet Clean Architecture. Il
            est important de noter que cette structure est un exemple et peut
            être adaptée en fonction des besoins spécifiques de votre projet.
            L'objectif principal est de maintenir une séparation claire des
            préoccupations et de faciliter la compréhension et la maintenance du
            code.
          </p>
        </div>
        <ProjectTree fileContents={fileContents} />
        <CleanArchitectureFlow />
        <NavPagination links={links} className="pt-20 pb-6" />
      </div>
    </main>
  );
}
