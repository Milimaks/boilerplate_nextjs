import { CodeBlock } from "@/shared/components/reusable/code-block";
import { buttonVariants } from "@/shared/components/ui/button";
import { cn } from "lib/utils";
import Link from "next/link";

export default function InfrastructureSection() {
  return (
    <section className="max-w-4xl mx-auto space-y-12 text-gray-800 dark:text-gray-100 pt-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Présentation</h1>
        <h2 className="text-2xl font-semibold">
          Définition de "Interface Adapters" ?
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
          , cette couche agit comme un intermédiaire entre la couche de
          présentation (UI) et la logique métier (Use Cases). Elle est
          responsable de l’adaptation des données et des événements afin qu’ils
          puissent être traités correctement par la couche métier.
        </p>
        <br />
        <p>
          Dans le <strong>front-end</strong> (ex: Next.js), cela inclut :
        </p>
        <ul className="list-disc list-inside space-y-2 text-md">
          <li>
            les contrôleurs (par exemple, pour gérer les actions utilisateur
            comme la connexion),
          </li>
          <li>
            les adaptateurs pour transformer des objets ou des données de l'UI
            pour qu'ils puissent être utilisés par la couche métier,
          </li>
          <li>
            les interfaces de communication avec les services externes (API,
            bases de données),
          </li>
          <li>les réponses HTTP adaptées aux besoins de l’UI.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Quel est le rôle exact de cette couche ?
        </h2>
        <p>
          La couche <strong>"Interface Adapters"</strong> a pour but de
          transformer et adapter les données entre les différentes couches de
          l’application. Plus précisément, elle :
        </p>
        <ul className="list-disc list-inside space-y-2 text-md">
          <li>
            reçoit des données et des événements de l'UI ou de services
            externes,
          </li>
          <li>
            les transforme pour qu'ils puissent être utilisés par la couche
            métier (par exemple, en validant ou formatant les données),
          </li>
          <li>
            transmet ces données ou événements aux use cases (logique métier),
          </li>
          <li>
            et retourne des résultats adaptés à l'UI ou à des services externes.
          </li>
        </ul>
        <p className="text-md leading-relaxed">
          La couche Interface Adapters permet une séparation claire entre la
          logique métier et l'UI, rendant l'application plus modulaire et
          testable. Par exemple, tu pourrais facilement changer la méthode de
          communication avec une API sans avoir à modifier la logique métier
          sous-jacente.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Exemple de code pour un contrôleur dans la couche Interface Adapters
        </h2>
        <CodeBlock>
          {`// infrastructure/repositories/authRepository.ts
export const authRepository = {
  login: async (email: string, password: string) => {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    })

    if (!res.ok) return { success: false }

    const user = await res.json()
    return { success: true, user }
  }
}

`}
        </CodeBlock>
        <p className="text-md leading-relaxed">
          Dans cet exemple, la page de connexion fait appel au{" "}
          <strong>loginController</strong> de la couche{" "}
          <strong>Interface Adapters</strong>, mais elle ne gère pas directement
          la logique d’authentification. La page se contente de collecter les
          informations de connexion et de transmettre ces données au contrôleur,
          qui va ensuite traiter la demande.
        </p>
        <br />
        <p className="text-md leading-relaxed">
          Le <strong>loginController</strong>, situé dans la couche{" "}
          <strong>Interface Adapters</strong>, se charge de valider les
          informations de connexion reçues et de déléguer cette tâche à des
          services métiers tels que le service d’authentification. Une fois la
          demande traitée, il renvoie les résultats sous forme de réponse
          appropriée, que ce soit un message de succès ou une erreur, sans
          jamais exposer la logique métier dans l’UI.
        </p>
      </section>
    </section>
  );
}
