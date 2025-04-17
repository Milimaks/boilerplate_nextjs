// Map of links to display in the side navigation.

import { NavSection } from "@/lib/validation/definitions";

// Depending on the size of the application, this would be stored in a database.
export const links: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        name: "Home",
        href: "/documentation",
        icon: "home",
        submenu: [
          {
            name: "Test",
            href: "/documentation/architecture/test",
          },
          {
            name: "sa",
            href: "/documentation/architecture/test",
          },
        ],
      },
      {
        name: "Principes du SEO",
        href: "/documentation/seo-starter-guide",
        icon: "document",
        submenu: [
          {
            name: "Robots.txt",
            href: "/documentation/seo-starter-guide/robots-txt",
          },
          {
            name: "Web Core Vitals",
            href: "/documentation/seo-starter-guide/web-core-vitals",
          },
          {
            name: "Sitemap",
            href: "/documentation/seo-starter-guide/sitemap",
          },
          {
            name: "SEO Tools",
            href: "/documentation/seo-starter-guide/main-tools",
          },
        ],
      },
      {
        name: "Clean Architecture",
        href: "/documentation/architecture",
        submenu: [
          {
            name: "Clean Project Structure",
            href: "/documentation/architecture/clean-project-structure",
          },
          {
            name: "Frameworks & Drivers",
            href: "/documentation/architecture/frameworks-drivers",
          },
          {
            name: "Interfaces Adapters",
            href: "/documentation/architecture/interfaces-adapters",
          },
          {
            name: "Application",
            href: "/documentation/architecture/application",
          },
          {
            name: "Entities",
            href: "/documentation/architecture/entities",
          },
          {
            name: "Infrastructure",
            href: "/documentation/architecture/infrastructure",
          },
        ],
        icon: "users",
      },
    ],
  },
];
