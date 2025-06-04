"use client";
import { CodeBlock } from "@/shared/components/reusable/code-block";
import { Card, CardContent } from "@/shared/components/ui/card";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/shared/components/ui/table";

export default function EntitiesSection() {
  return (
    <section className="max-w-4xl mx-auto  space-y-12 text-gray-800 dark:text-gray-100 pt-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Présentation</h1>
        <h2 className="text-2xl font-semibold">Qu'est-ce que les Entities ?</h2>
        <p className="text-md leading-relaxed">
          Les <strong>Entities</strong> représentent des objets métier dans
          notre <strong>domaine*</strong>. Ce sont des concepts qui existent
          indépendamment de la persistance des données et qui sont utilisés pour
          la logique métier. Une entity est souvent un modèle qui contient des
          données et des méthodes qui leur sont associées.
        </p>
        <p>
          <i>
            <strong>Domaine</strong> = Ensemble des concepts et règles liés à un
            domaine d'activité ou un secteur spécifique dans une application.
            <br />
            (Exemple : Dans une application de gestion de bibliothèque, le
            domaine inclut des concepts comme livres, emprunts, et
            utilisateurs.)
          </i>
        </p>
        <h2 className="text-2xl font-semibold">Ses responsabilités</h2>
        <ul className="list-disc list-inside space-y-2 text-md">
          <li>
            Représenter un objet ou une entité dans le domaine métier (ex:
            Utilisateur, Produit, Commande).
          </li>
          <li>
            Contenir des données et des comportements associés à ces données
            (logique métier de l'entité).
          </li>
          <li>
            Être indépendante de la couche de persistance (base de données).
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Exemple d'une Entity "User"</h2>
        <CodeBlock>
          {`// entities/user.ts

export class User {
  constructor(
    public id: string,
    public username: string,
    public email: string,
    public passwordHash: string
  ) {}

  // Method to check if the user is active
  isActive(): boolean {
    return this.username !== '';
  }

  // Method to change the user's password
  changePassword(newPassword: string): void {
    this.passwordHash = newPassword;
  }
}

`}
        </CodeBlock>
        <p className="text-md leading-relaxed">
          Cette <strong>entity</strong> `User` contient des données telles que
          l'`id`, `username`, `email` et `passwordHash`. Elle possède également
          des méthodes qui encapsulent des comportements métier comme{" "}
          <code>isActive</code> et <code>changePassword</code>.
        </p>
        <br />

        <h2 className="text-2xl font-semibold">
          Exemple de code d'utilisation dans la couche Application
        </h2>
        <CodeBlock>
          {`// application/use-cases/user/createUserUseCase.ts

import { User } from "@/domain/entities/user";
import { UserRepository } from "@/domain/repositories/userRepository";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(username: string, email: string, password: string): Promise<User> {
    // Créer une nouvelle instance de User
    const user = new User("generated-id", username, email, password);

    // Enregistrer l'utilisateur dans le repository
    await this.userRepository.save(user);

    return user;
  }
}
`}
        </CodeBlock>
        <p className="text-md leading-relaxed">
          Dans cet exemple, la couche <strong>Application</strong> utilise
          l'entity `User` pour créer un nouvel utilisateur. L'entité est
          utilisée sans se soucier de la persistance des données (c'est-à-dire,
          de l'endroit où les données sont stockées). La persistance est gérée
          par un <strong>repository</strong>, injecté dans le cas d'usage.
        </p>
        <br />

        {/* Conclusion of Entities Layer */}
        <Card className="max-w-3xl mx-auto mt-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              Résumé — Couche Entities
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Élément</TableHead>
                  <TableHead>Rôle dans la couche Entities</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">User</TableCell>
                  <TableCell>
                    Représente un utilisateur dans le domaine métier
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    isActive(), changePassword()
                  </TableCell>
                  <TableCell>
                    Méthodes qui encapsulent la logique métier
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">UserRepository</TableCell>
                  <TableCell>Repository pour persister l'entité User</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Ne contient pas</TableCell>
                  <TableCell>Logique de persistance, framework, UI</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </section>
  );
}
