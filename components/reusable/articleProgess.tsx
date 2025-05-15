"use client";
import { useState } from "react";
import { useArticleProgress } from "@/lib/hooks/custom-hooks";

interface ArticleProgressProps {
  sections: {
    id: string;
    title: string;
    isActive?: boolean;
  }[];
}

export function ArticleProgress({ sections }: ArticleProgressProps) {
  const [activeId, setActiveId] = useState("");
  useArticleProgress(sections, setActiveId, activeId);
  return (
    <ul className=" left-6  space-y-4">
      {sections.map((section, index) => (
        <li className="flex items-center gap-3" key={index}>
          <div
            className={`h-3 aspect-square rounded-full transition-colors duration-200 ${
              section.id === activeId
                ? "bg-rose-500"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          />
          <a
            href={`#${section.id}`}
            className={`text-sm transition-colors duration-200 ${
              section.id === activeId
                ? "text-gray-900 font-medium"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {section.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
