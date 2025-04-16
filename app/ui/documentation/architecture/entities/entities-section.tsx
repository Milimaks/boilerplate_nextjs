import { CodeBlock } from "@/app/ui/code-block";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function EntitiesSection() {
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
          Exemple de code pour l'authentification
        </h2>
        <CodeBlock>
          {`// application/use-cases/auth/loginUseCase.ts
import { authRepository } from "@/infrastructure/repositories/authRepository"

export const loginUseCase = async ({ email, password }: { email: string; password: string }) => {
  const result = await authRepository.login(email, password)
  if (!result.success) {
    throw new Error("Connexion échouée")
  }
  return result.user
}
`}
        </CodeBlock>
        <p className="text-md leading-relaxed">
          Dans cet exemple, la page de connexion ne sait rien de la logique
          d'authentification. Elle appelle simplement le{" "}
          <strong>loginController</strong>, qui lui est responsable de la
          logique métier.
        </p>
        <br />
        <p className="text-md leading-relaxed">
          Le <strong>loginController</strong>, qui se situe dans la couche{" "}
          <strong>Interface Adapters</strong>, prend en charge la gestion de la
          demande de connexion en agissant comme un intermédiaire entre
          l'interface utilisateur et la couche métier. Il appelle des services,
          comme le service d'authentification ou de gestion des utilisateurs,
          pour valider les informations de connexion. Après avoir reçu les
          données, il peut effectuer des opérations comme la validation des
          identifiants ou la génération de tokens d'authentification, puis
          renvoyer une réponse appropriée à l'utilisateur (succès ou erreur).
        </p>
      </section>
    </section>
  );
}
