import { useMutation } from "@tanstack/react-query";
import {
  UserSignUpInput,
  UserSignUpSchema,
} from "@/src/entities/schemas/user.schema";
import { signUpApi } from "@/features/auth/api/signUpApi"; // <- appel à l'API
import { signIn } from "next-auth/react";

export function useSignUp() {
  return useMutation({
    mutationFn: async (data: Partial<UserSignUpInput>) => {
      const result = UserSignUpSchema.safeParse(data);
      if (!result.success) {
        throw new Error(result.error.message);
      }
      // Création de l'utilisateur
      await signUpApi(result.data);

      // Connexion automatique avec NextAuth
      const loginResult = await signIn("credentials", {
        redirect: false,
        email: result.data.email,
        password: result.data.password,
      });

      if (!loginResult?.ok) {
        throw new Error("Connexion échouée après inscription");
      }

      return loginResult;
    },
    onSuccess: (data) => {
      console.log("✅ Sign up successful:", data);
    },
    onError: (error) => {
      console.error("❌ Sign up failed:", error);
    },
  });
}
