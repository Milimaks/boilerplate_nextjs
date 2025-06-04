"use client";
import CleanArchitectureOverview from "@/components/features/documentation/architecture/clean-architecture-overview";
import { links } from "@/components/features/documentation/architecture/data/navigation-data";
import { MoreRessources } from "@/shared/components/reusable/more-ressources";
import { NavPagination } from "@/shared/components/reusable/nav-pagination";
import { externalLinks } from "./external-ressources";

export default function Page() {
  return (
    <main className="flex flex-row justify-center">
      <div id="content" className="max-w-4xl px-4">
        <CleanArchitectureOverview />

        <MoreRessources externalLinks={externalLinks} />
        <NavPagination links={links} className="pt-20 pb-6" />
      </div>
    </main>
  );
}
