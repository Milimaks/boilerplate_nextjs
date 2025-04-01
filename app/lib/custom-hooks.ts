import { useState, useEffect } from "react";

interface Section {
  id: string;
  title: string;
}

export function useArticleProgress(sections: Section[]) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("entry", entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0] }
    );
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return activeSection;
}
