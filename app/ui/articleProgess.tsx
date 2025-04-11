interface ArticleProgressProps {
  sections: {
    id: string;
    title: string;
    isActive?: boolean;
  }[];
}

export function ArticleProgress({ sections }: ArticleProgressProps) {
  return (
    <div className=" left-6  space-y-4">
      {sections.map((section, index) => (
        <ul key={section.id} className="flex flex-col">
          <li className="flex items-center gap-3">
            <div
              className={`h-3 aspect-square rounded-full transition-colors duration-200 ${
                section.isActive
                  ? "bg-rose-500"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            />
            <a
              href={`#${section.id}`}
              className={`text-sm transition-colors duration-200 ${
                section.isActive
                  ? "text-gray-900 font-medium"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {section.title}
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
}
