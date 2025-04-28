"use client";
import { CodeBlock } from "@/components/reusable/code-block";
import { Card, CardContent } from "@/components/ui/card";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/components/ui/table";

export default function ApplicationSection() {
  return (
    <section className="max-w-4xl mx-auto  space-y-12 text-gray-800 dark:text-gray-100 pt-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Présentation</h1>
        <h2 className="text-2xl font-semibold">
          Qu'est-ce que la couche Application ?
        </h2>
        <p className="text-md leading-relaxed">
          Dans la La couche <strong>Application</strong> contient la logique
          métier spécifique aux cas d’usage : elle orchestre les actions, sans
          dépendre de la façon dont les données sont affichées ou stockées.
        </p>

        <br />
        <h2 className="text-2xl font-semibold">Ses responsabilités</h2>
        <ul className="list-disc list-inside space-y-2 text-md">
          <li>
            Implémenter les use cases du domaine métier (ex: login, inscription,
            création de projet...).
          </li>
          <li>
            Coordonner les appels à des dépendances externes (repositories,
            services tiers) via des interfaces.
          </li>
          <li>Ne pas contenir de logique technique (UI, DB, framework).</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Exemple de code pour l'authentification
        </h2>
        <CodeBlock>
          {`// application/use-cases/auth/loginUseCase.ts

import type { AuthRepository } from "@/domain/repositories/authRepository"
import type { LoginDTO } from "@/domain/dto/loginDTO"
import { User } from "@/domain/entities/user"

export class LoginUseCase {
  constructor(private authRepo: AuthRepository) {}

  async execute({ email, password }: LoginDTO): Promise<{ token: string; user: User }> {
    // Exemple de logique métier : validation, hash, vérif...
    const user = await this.authRepo.verifyCredentials(email, password)

    if (!user) {
      throw new Error("Invalid credentials")
    }

    const token = await this.authRepo.generateToken(user)

    return { token, user }
  }
}

// Instanciation concrète quelque part (dans une factory, par ex)
import { authRepositoryImpl } from "@/infrastructure/repositories/authRepositoryImpl"
export const loginUseCase = new LoginUseCase(authRepositoryImpl)

`}
        </CodeBlock>
        <p className="text-md leading-relaxed">
          Ce use case <strong>ne connaît pas</strong> la base de données ni le
          framework utilisé. Il appelle juste une interface (AuthRepository) que
          l’infrastructure implémente.
        </p>
        <br />
        {/* Conclusion of Application Layer */}
        <Card className="max-w-3xl mx-auto mt-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              Résumé — Couche Application
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Élément</TableHead>
                  <TableHead>Rôle dans la couche Application</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">LoginUseCase</TableCell>
                  <TableCell>Exécute la logique de login</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">AuthRepository</TableCell>
                  <TableCell>
                    Abstraction injectée pour vérifier les credentials
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">User, LoginDTO</TableCell>
                  <TableCell>Entités/dto métiers manipulés</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Ne contient pas</TableCell>
                  <TableCell>localStorage, logs, redirections</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </section>
  );
}
