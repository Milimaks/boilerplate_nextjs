"use client";
import ProjectTree from "@/app/ui/documentation/architecture/project-tree";
import { links } from "@/app/ui/documentation/architecture/data";
import { NavPagination } from "@/app/ui/nav-pagination";
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

  return (
    <main className="flex flex-row justify-center">
      <div id="content" className="max-w-4xl px-4   ">
        <h1 className="text-3xl font-bold pb-4">Structure de projet</h1>
        <p className="text-md leading-relaxed pb-6">
          Ci-dessous un exemple de structure de projet Clean Architecture. Il
          est important de noter que cette structure est un exemple et peut être
          adaptée en fonction des besoins spécifiques de votre projet.
          L'objectif principal est de maintenir une séparation claire des
          préoccupations et de faciliter la compréhension et la maintenance du
          code.
        </p>
        <ProjectTree fileContents={fileContents} />
        <NavPagination links={links} className="pt-20 pb-6" />
      </div>
    </main>
  );
}
