import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

interface MoreRessourcesProps {
  externalLinks?: { name: string; link: string }[];
}

export const MoreRessources: React.FC<MoreRessourcesProps> = ({
  externalLinks,
}) => {
  return (
    <section className="mt-6">
      <h3 className="text-lg font-semibold">Plus de ressources</h3>
      {/* List of external links related to sitemaps */}
      {externalLinks && (
        <ul className="list-disc pl-6 mb-4">
          {externalLinks.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className={buttonVariants({ variant: "link" })}
                target="_blank"
                rel="noopener noreferrer" // Improves security for external links
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
