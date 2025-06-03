import { cn } from "lib/utils";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { authenticate } from "lib/actions/action";

export function LoginForm({
  className,
  onSwitchToSignUp,
  ...props
}: React.ComponentPropsWithoutRef<"form"> & { onSwitchToSignUp?: () => void }) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );
  return (
    <form
      action={formAction}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full pt-2 pb-2">
          Login
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <Button variant="outline" className="w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              fill="currentColor"
            />
          </svg>
          Login with GitHub
        </Button>
        <Button variant="outline" className="w-full">
          <svg
            width="256"
            height="262"
            viewBox="0 0 256 262"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_107_3)">
              <path
                d="M255.878 133.451C255.878 122.717 255.007 114.884 253.122 106.761H130.55V155.209H202.497C201.047 167.249 193.214 185.381 175.807 197.565L175.563 199.187L214.318 229.21L217.003 229.478C241.662 206.704 255.878 173.196 255.878 133.451Z"
                fill="#4285F4"
              />
              <path
                d="M130.55 261.1C165.798 261.1 195.389 249.495 217.003 229.478L175.807 197.565C164.783 205.253 149.987 210.62 130.55 210.62C96.0268 210.62 66.7258 187.847 56.2808 156.37L54.7498 156.5L14.4518 187.687L13.9248 189.152C35.3928 231.798 79.4898 261.1 130.55 261.1Z"
                fill="#34A853"
              />
              <path
                d="M56.281 156.37C53.525 148.247 51.93 139.543 51.93 130.55C51.93 121.556 53.525 112.853 56.136 104.73L56.063 103L15.26 71.312L13.925 71.947C5.077 89.644 0 109.517 0 130.55C0 151.583 5.077 171.455 13.925 189.152L56.281 156.37Z"
                fill="#FBBC05"
              />
              <path
                d="M130.55 50.479C155.064 50.479 171.6 61.068 181.029 69.917L217.873 33.943C195.245 12.91 165.798 0 130.55 0C79.4898 0 35.3928 29.301 13.9248 71.947L56.1358 104.73C66.7258 73.253 96.0268 50.479 130.55 50.479Z"
                fill="#EB4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_107_3">
                <rect width="256" height="262" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <button
          type="button"
          className="underline underline-offset-4"
          onClick={onSwitchToSignUp}
          aria-disabled={isPending}
        >
          Sign up
        </button>
      </div>
    </form>
  );
}
