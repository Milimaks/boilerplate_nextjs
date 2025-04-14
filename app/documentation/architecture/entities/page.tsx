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
        <ProjectTree fileContents={fileContents} section="entities" />
        <NavPagination links={links} className="pt-20 pb-6" />
      </div>
    </main>
  );
}
