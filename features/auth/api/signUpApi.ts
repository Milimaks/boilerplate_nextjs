import { UserSignUpInput } from "@/src/entities/schemas/user.schema";

export async function signUpApi(data: UserSignUpInput) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "Erreur réseau");
  }

  return res.json();
}
