import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// Initialize NextAuth with the imported configuration and export the authentication function
export default NextAuth(authConfig).auth;

export const config = {
  // Defines the paths where the middleware should apply
  // Excludes routes starting with "api", Next.js static files, and PNG images
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
