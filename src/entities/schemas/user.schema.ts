import { z } from "zod";

export const UserSignUpSchema = z.object({
  firstName: z
    .string({
      required_error: "Le prénom est requis",
      invalid_type_error: "Le prénom doit être une chaîne de caractères",
    })
    .min(3, "Le prénom doit contenir au moins 3 caractères")
    .max(96, "Le prénom ne peut pas dépasser 96 caractères")
    .nonempty("Le prénom est requis"),

  lastName: z
    .string({
      invalid_type_error: "Le nom doit être une chaîne de caractères",
    })
    .min(3, "Le nom doit contenir au moins 3 caractères")
    .max(96, "Le nom ne peut pas dépasser 96 caractères")
    .optional(),

  email: z
    .string({
      required_error: "L'email est requis",
      invalid_type_error: "L'email doit être une chaîne de caractères",
    })
    .email("L'email doit être valide")
    .max(96, "L'email ne peut pas dépasser 96 caractères")
    .nonempty("L'email est requis"),

  password: z
    .string({
      required_error: "Le mot de passe est requis",
      invalid_type_error: "Le mot de passe doit être une chaîne de caractères",
    })
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .max(96, "Le mot de passe ne peut pas dépasser 96 caractères")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Le mot de passe doit contenir au moins une lettre, un chiffre et un caractère spécial"
    ),
  // terms: z.boolean(),
});

export type UserSignUpInput = z.infer<typeof UserSignUpSchema>;
