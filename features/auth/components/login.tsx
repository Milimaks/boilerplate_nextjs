"use client";
import { LoginForm } from "./login-form";

import { SignUpForm } from "./signup-form";
import { GalleryVerticalEnd } from "lucide-react";
import { useState } from "react";

export default function LoginComponent() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            {showLogin ? (
              <LoginForm onSwitchToSignUp={() => setShowLogin(false)} />
            ) : (
              <SignUpForm onSwitchToLogin={() => setShowLogin(true)} />
            )}
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/background_auth.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
