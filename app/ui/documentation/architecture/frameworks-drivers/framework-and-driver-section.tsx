import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function FrameworkAndDriversSection() {
  return (
    <section className="max-w-4xl mx-auto  space-y-12 text-gray-800 dark:text-gray-100 pt-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Présentation</h1>
        <h2 className="text-2xl font-semibold">
          Définition de "Frameworks & Drivers" ?
        </h2>
        <p className="text-md leading-relaxed">
          Dans la{" "}
          <Link
            href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
            className={cn(buttonVariants({ variant: "link" }), "text-md")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Clean Architecture
          </Link>
          , cette couche représente tout ce qui est extérieur au cœur de ton
          application. C’est la partie la plus dépendante des outils,
          bibliothèques, ou plateformes.
        </p>
        <br />
        <p>
          Dans le <strong>front-end</strong> (ex: Next.js), cela inclut :
        </p>
        <ul className="list-disc list-inside space-y-2 text-md">
          <li>le framework (Next.js, React),</li>
          <li>les bibliothèques UI (Tailwind, ShadCN),</li>
          <li>les appels HTTP (fetch, axios),</li>
          <li>les SDK externes (Sentry, Auth0, Stripe…),</li>
          <li>le routeur (Next.js routing),</li>
          <li>le DOM lui-même.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Quel est le rôle exact de cet couche ?
        </h2>
        <p>
          La couche <strong>"Frameworks & Drivers"</strong> n'implémente pas la
          logique métier. Elle se contente :
        </p>
        <ul className="list-disc list-inside space-y-2 text-md">
          <li>d’appeler des use cases,</li>
          <li>de recevoir ou afficher des données,</li>
          <li>
            de traduire les événements du monde extérieur (clic, route, réponse
            HTTP…) en actions métier.
          </li>
        </ul>
        <p className="text-md leading-relaxed">
          Les Frameworks & Drivers ne font que déléguer. Ils ne contiennent pas
          de décisions métier. Cette séparation est utile car elle permet
          théoriquement de changer de framework UI sans toucher à la logique
          métier. Tu peux tester aussi tes use-cases sans avoir besoin du DOM et
          chaque couche n'a qu'un seul rôle.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Comment la Clean Architecture structure le code&nbsp;?
        </h2>
        <p className="text-md leading-relaxed">
          Elle divise la base de code en plusieurs couches :
        </p>
        <ul className="list-disc list-inside space-y-4 text-md">
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
            — toute la logique liée au framework UI.
            <br />
            Dans Next.js, cela inclut les route handlers, server actions, RSCs,
            pages, composants, etc.
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
            — contient les contrôleurs (orchestrent les use-cases) et les
            présentateurs (convertissent les données pour la UI).
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
            — la logique métier principale.
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
            — les définitions des modèles, les erreurs et toute structure de
            données fondamentale.
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
            — implémente les interfaces définies dans l’application.
            <br />
            Regroupe les services partagés (auth, base de données, API
            externes...).
          </li>
        </ul>
      </section>
    </section>
  );
}
