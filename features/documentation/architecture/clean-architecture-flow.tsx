"use client";
import { CodeBlock } from "@/shared/components/reusable/code-block";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/components/ui/collapsible";
import {
  ArrowDown,
  Database,
  FileCode,
  Layout,
  Server,
  User,
  UserCheck,
} from "lucide-react";
import { useState } from "react";

export function CleanArchitectureFlow() {
  const Step = ({
    icon: Icon,
    title,
    description,
    color,
    codeSnippet,
  }: {
    icon: any;
    title: string;
    description: string;
    color: string;
    codeSnippet?: string;
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div
        className={`p-6 rounded-lg border-2 ${color} bg-white shadow-lg max-w-md mx-auto`}
      >
        <div className="flex items-center gap-4 mb-3">
          <Icon className="w-6 h-6" />
          <h3 className="font-semibold text-sm">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
        {codeSnippet && (
          <div className="flex flex-row-reverse">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger asChild>
                <button className="flex flex-row-reverse text-gray-600">
                  <u>Code</u>
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="">
                {" "}
                <CodeBlock>{codeSnippet}</CodeBlock>
              </CollapsibleContent>
            </Collapsible>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen  pt-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-12">
          Cas d'utilisation : Authentification
        </h1>

        <div className="space-y-6">
          {/* Presentation Layer */}
          <Step
            icon={Layout}
            title="1. Composant UI (LoginPage.tsx)"
            description="L'utilisateur interagit avec l'interface utilisateur en saisissant ses identifiants et en cliquant sur 'Se connecter'"
            color="border-blue-500"
          />

          <div className="flex justify-center">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>

          {/* Interface Adapters */}
          <Step
            icon={FileCode}
            title="2. Controller (LoginController)"
            description="Le controller reçoit les données du formulaire et prépare l'appel au cas d'utilisation"
            color="border-green-500"
          />

          <div className="flex justify-center">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>

          {/* Application Layer */}
          <Step
            icon={UserCheck}
            title="3. Use Case (LoginUseCase)"
            description="Le cas d'utilisation contient la logique métier et orchestre l'authentification"
            color="border-purple-500"
          />

          <div className="flex justify-center">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>

          {/* Domain Layer */}
          <Step
            icon={Database}
            title="4. Repository Interface (IAuthRepository)"
            description="L'interface du repository définit le contrat pour l'accès aux données"
            color="border-red-500"
          />

          <div className="flex justify-center">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>

          {/* Infrastructure Layer */}
          <Step
            icon={Server}
            title="5. Repository Implementation (AuthApiRepository)"
            description="L'implémentation concrète gère les appels HTTP vers l'API d'authentification"
            color="border-yellow-500"
          />

          <div className="flex justify-center">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>

          {/* Result */}
          <Step
            icon={User}
            title="6. Résultat"
            description="La réponse remonte la chaîne jusqu'à l'UI qui affiche le résultat ou redirige l'utilisateur"
            color="border-indigo-500"
          />
        </div>
      </div>
    </div>
  );
}
