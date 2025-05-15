import { useState, useEffect, useRef } from "react";

interface Section {
  id: string;
  title: string;
}

export function useArticleProgress(
  sections: Section[],
  setActiveId: (id: string) => void,
  activeId: string
) {
  const visibleSectionsRef = useRef<string[]>([]);
  // Trouver tous les éléments de la page qui ont un ID correspondant à une section
  // Créer un tableau d'éléments visibles de la section
  // Trouver l'index de la section active dans le tableau d'éléments visibles
  // Mettre à jour l'état de la section active en fonction de l'index trouvé

  useEffect(() => {
    // Options for the Intersection Observer
    const options = {
      rootMargin: "0px 0px -40% 0px",
    };

    // callback for the Intersection Observer
    const callback = (entries: IntersectionObserverEntry[]) => {
      const currentlyVisible: string[] = [];
      entries.forEach((entry) => {
        console.log("entry", entry);
        if (entry.isIntersecting) {
          currentlyVisible.push(entry.target.id);
          // console.log("entry", entry.target.id);
        }
      });

      // Get the index of the section from its ID
      const getIndexFromId = (id: string) =>
        sections.findIndex((section) => section.id === id);

      if (currentlyVisible.length === 1) {
        setActiveId(currentlyVisible[0]);
      } else if (currentlyVisible.length > 1) {
        const sortedVisible = currentlyVisible.sort(
          (a, b) => getIndexFromId(a) - getIndexFromId(b)
        );
        setActiveId(sortedVisible[0]);
      }

      if (currentlyVisible.length === 0) {
        const activeElement = document.getElementById(activeId);
        const activeIndex = sections.findIndex((el) => el.id === activeId);

        const activeIdYcoord = activeElement?.getBoundingClientRect().y;
        if (activeIdYcoord && activeIdYcoord > 150 && activeIndex > 0) {
          setActiveId(sections[activeIndex - 1].id);
        }
      }
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(callback, options);

    // Observe each section
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Cleanup function to unobserve elements when the component unmounts or sections change
    return () => {
      observer.disconnect();
    };
  }, [sections, setActiveId, activeId]);

  return visibleSectionsRef.current;
}
