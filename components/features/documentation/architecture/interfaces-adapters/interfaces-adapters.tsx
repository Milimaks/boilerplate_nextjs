import { CodeBlock } from "@/components/reusable/code-block";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function InterfaceAdaptersSection() {
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
          </Link>{" "}
          cette couche définit les <strong>Controllers</strong> (qui orchestrent
          les use cases) et les <strong>Presenters</strong> (qui transforment
          les résultats des controllers en données adaptées à l’interface). Les
          controllers gèrent la validation des entrées avant de les transmettre
          aux use cases spécifiques.
        </p>
        <br />
        <p>
          La couche <strong>"Interface Adapters"</strong> est responsable de:
        </p>
        <ul className="list-disc list-inside space-y-2 text-md">
          <li>
            <strong>Adapter l’entrée</strong> : les <strong>controllers</strong>{" "}
            reçoivent les données venant de l’extérieur (UI, requêtes HTTP), les
            valident et les formattent pour les passer aux use cases.
          </li>
          <li>
            <strong>Adapter la sortie</strong> : les <strong>presenters</strong>{" "}
            ou view models prennent les réponses des use cases (souvent en
            format brut) et les transforment en un format compréhensible pour
            l’UI.
          </li>
          <li>
            les interfaces de communication avec les services externes (API,
            bases de données),
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
          {`// controllers/auth/loginController.ts
import { loginUseCase } from "@/application/use-cases/auth/loginUseCase"

type LoginInput = {
  email: string
  password: string
}

export async function loginController({ email, password }: LoginInput) {
  // Here we might perform input validation if needed
  if (!email || !password) {
    throw new Error("Email and password are required")
  }

  try {
    // Call the use case to handle the business logic
    const result = await loginUseCase.execute({ email, password })

    // Example of adapting the output for the UI: storing the token
    localStorage.setItem("token", result.token)
    // Or redirecting, displaying a message, etc.

    return result
  } catch (error) {
    console.error("Login error:", error)
    throw error
  }
}

`}
        </CodeBlock>
        <p className="text-md leading-relaxed">
          Ce <strong>controller</strong> sert de couche intermédiaire : il
          reçoit les données de l’UI, valide, appelle le use case et adapte le
          résultat pour le front (ici, via <strong>localStorage</strong>, mais
          on pourrait aussi afficher un toast, rediriger, etc.).
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
