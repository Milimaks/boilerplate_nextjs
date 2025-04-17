import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function CleanArchitectureOverview() {
  return (
    <section className="max-w-4xl mx-auto  space-y-12 text-gray-800 dark:text-gray-100">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Présentation</h1>
        <Image
          width={800}
          height={340}
          src="/clean-architecture-diagram.png"
          alt="Clean Architecture Diagram"
          priority
        />
        <h2 className="text-2xl font-semibold">
          Qu'est-ce que la Clean Architecture et quels sont ses avantages ?
        </h2>
        <p className="text-md leading-relaxed">
          Un ensemble de règles qui vous aident à structurer votre application
          de manière à ce qu'elle soit facile à maintenir, à tester, et que sa
          base de code soit prévisible. C'est comme un «&nbsp;langage
          commun&nbsp;» que les développeurs comprennent, peu importe leur
          langage de programmation.
        </p>
        <p className="text-md leading-relaxed">
          «&nbsp;Clean Architecture et ses dérivés&nbsp;» ont tous le même
          objectif&nbsp;: la séparation des responsabilités. Ils introduisent
          des «&nbsp;couches&nbsp;» qui regroupent le code similaire.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Pourquoi ces couches sont utiles&nbsp;?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-md">
          <li>
            <strong>Indépendant de l'UI</strong> — la logique métier n'est pas
            liée au framework UI utilisé.
          </li>
          <li>
            <strong>Indépendant de la base de données</strong> — les opérations
            liées à la base sont isolées, donc le reste de l’app ne se préoccupe
            pas de laquelle est utilisée.
          </li>
          <li>
            <strong>Indépendant des services externes</strong> — les règles
            métiers ne savent rien du monde extérieur.
          </li>
          <li>
            <strong>Testable</strong> — la logique métier étant isolée, elle
            devient plus facilement testable.
          </li>
        </ul>
        <p className="text-md leading-relaxed">
          La Clean Architecture y parvient en définissant une hiérarchie de
          dépendance&nbsp;: chaque couche dépend uniquement des couches
          inférieures, jamais des couches supérieures.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Comment la Clean Architecture structure le code&nbsp;?
        </h2>
        <p className="text-md leading-relaxed">
          Elle divise la base de code en plusieurs couches :
        </p>
        <ul className="list-decimal space-y-4 text-md">
          <li>
            <strong>
              <Link
                href="architecture/frameworks-drivers"
                className={cn(buttonVariants({ variant: "link" }), "text-md")}
                target="_blank"
              >
                Frameworks & Drivers
              </Link>
            </strong>{" "}
            — <strong>toute la logique liée au framework UI.</strong>
            <br />
            Ex : Les route handlers, server actions, RSCs, pages, composants,
            etc.
          </li>
          <li>
            <strong>
              <Link
                href="architecture/interface-adapters"
                className={cn(buttonVariants({ variant: "link" }), "text-md")}
              >
                Interface Adapters
              </Link>
            </strong>{" "}
            —{" "}
            <strong>
              contient les contrôleurs (orchestrent les use-cases) et les
              présentateurs (convertissent les données pour la UI).
            </strong>
            <br />
            Les contrôleurs gèrent la validation avant de déléguer aux
            use-cases.
          </li>
          <li>
            <strong>
              <Link
                href="architecture/application"
                className={cn(buttonVariants({ variant: "link" }), "text-md")}
              >
                Application
              </Link>
            </strong>{" "}
            — <strong>la logique métier principale.</strong>
            <br />
            Elle contient les use-cases et les interfaces des infrastructures.
            C’est ici qu’on fait les vérifications d’autorisation.
          </li>
          <li>
            <strong>
              <Link
                href="architecture/entities"
                className={cn(buttonVariants({ variant: "link" }), "text-md")}
              >
                Entities
              </Link>
            </strong>{" "}
            —{" "}
            <strong>
              les définitions des modèles, les erreurs et toute structure de
              données fondamentale.
            </strong>
          </li>
          <li>
            <strong>
              <Link
                href="architecture/infrastructure"
                className={cn(buttonVariants({ variant: "link" }), "text-md")}
              >
                Infrastructure
              </Link>
            </strong>{" "}
            —{" "}
            <strong>
              implémente les interfaces définies dans l’application.
            </strong>
            <br />
            Regroupe les services partagés (auth, base de données, API
            externes...).
          </li>
        </ul>
      </section>
    </section>
  );
}
