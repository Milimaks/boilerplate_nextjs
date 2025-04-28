"use client";

import { cn } from "@/lib/utils";
import clsx from "clsx";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconName, NavSection } from "@/lib/validation/definitions";
import {
  HomeIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const iconMap: Record<IconName, React.ElementType> = {
  home: HomeIcon,
  document: DocumentDuplicateIcon,
  users: UserGroupIcon,
} as const;

interface NavLinksProps {
  links: NavSection[];
}

export default function NavLinks({ links }: NavLinksProps) {
  const pathname = usePathname();

  // State to manage each submenu's open/closed state
  // This is a record where the key is the submenu name and the value is a boolean indicating if it's open or closed
  const [openSubmenu, setOpenSubmenu] = useState<Record<string, boolean>>({});

  // Function to toggle the submenu visibility
  const toggleSubmenu = (name: string) => {
    setOpenSubmenu((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };
  return (
    <>
      <aside>
        <nav className="space-y-6" aria-label="Main Navigation">
          {links.map((section) => (
            <div key={section.title} className="space-y-1">
              {/* Section title */}
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider  mb-2">
                {section.title}
              </h2>

              {/* Loop through items in the section */}
              {section.items.map((item) => {
                const Icon = item.icon ? iconMap[item.icon] : null;

                return (
                  <div key={item.name}>
                    {/* Navigation link or button for submenu */}
                    {!item.submenu ? (
                      <Link
                        href={item.href}
                        className={clsx(
                          "flex h-[48px] hover:translate-x-1 transition-all duration-200 ease-in-out grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                          {
                            " text-blue-600": pathname === item.href,
                          }
                        )}
                        aria-current={
                          pathname === item.href ? "page" : undefined
                        }
                      >
                        {Icon && (
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        )}
                        <span>{item.name}</span>
                      </Link>
                    ) : (
                      <button
                        className={cn(
                          "flex h-[48px] w-full grow items-center justify-between gap-2 rounded-md  p-3 text-sm font-medium  hover:text-blue-600 md:flex-none  md:p-2 md:px-3",
                          {
                            " text-blue-600": pathname === item.href,
                          }
                        )}
                        aria-expanded={openSubmenu[item.name] || false}
                        aria-label={
                          openSubmenu[item.name]
                            ? `Collapse submenu for ${item.name}`
                            : `Expand submenu for ${item.name}`
                        }
                      >
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 hover:translate-x-1 transition-all duration-200 ease-in-out"
                        >
                          {Icon && (
                            <Icon className="w-5 h-5" aria-hidden="true" />
                          )}
                          <span>{item.name}</span>
                        </Link>
                        <ChevronRightIcon
                          className={clsx("w-5 h-5 transition-transform", {
                            "rotate-90": openSubmenu[item.name],
                          })}
                          aria-hidden="true"
                          onClick={() => toggleSubmenu(item.name)}
                        />
                      </button>
                    )}

                    {/* Submenu items */}
                    {item.submenu && (
                      <div
                        className={cn(
                          "ml-6 space-y-1 transition-all duration-200 ease-in-out",
                          openSubmenu[item.name]
                            ? " opacity-100 transition-all duration-300 ease-in-out"
                            : "max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out"
                        )}
                      >
                        {item.submenu.map((submenuItem) => (
                          <Link
                            key={submenuItem.name}
                            href={submenuItem.href}
                            className={cn(
                              "block py-1 text-sm text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 ease-in-out",
                              { "text-blue-600": pathname === submenuItem.href }
                            )}
                          >
                            {submenuItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
