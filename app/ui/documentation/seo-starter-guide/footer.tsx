import { NavSection } from "@/app/lib/definitions";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { link } from "fs";
import { usePathname } from "next/navigation";
import { NavigationMenuItem } from "./data";

interface FooterProps {
  links: NavigationMenuItem[];
  className?: string;
}

export function Footer({ links, className }: FooterProps) {
  const pathname = usePathname();
  // Find the active link based on the current pathname
  const activeIndex = links.findIndex((link) => pathname === link.href);

  // Find the previous and next links based on the active index
  const prevLink = activeIndex > 0 ? links[activeIndex - 1] : null;
  const nextLink =
    activeIndex < links.length - 1 ? links[activeIndex + 1] : null;
  return (
    <section className={className}>
      <Pagination>
        <PaginationContent className="w-full flex justify-between items-center">
          {prevLink ? (
            <PaginationItem>
              <PaginationPrevious
                href={prevLink.href}
                content={prevLink.name}
                className="pl-0 pr-2"
              />
            </PaginationItem>
          ) : (
            <div></div>
          )}

          {nextLink && (
            <PaginationItem>
              <PaginationNext
                href={nextLink.href}
                content={nextLink.name}
                className="pr-0 pl-2"
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </section>
  );
}
