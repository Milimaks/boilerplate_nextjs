import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "../ui/checkbox";
// import { useActionState } from "react";
// import { register } from "@/lib/actions/action";

export function SignUpForm({
  className,
  onSwitchToLogin,
  ...props
}: React.ComponentPropsWithoutRef<"form"> & { onSwitchToLogin?: () => void }) {
  //   const [errorMessage, formAction, isPending] = useActionState(
  //     register,
  //     undefined
  //   );

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col  gap-2 ">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className=" text-sm text-muted-foreground">
          Enter your details below to create a new account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="John Doe" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
          <p className=" text-sm text-muted-foreground">
            Minimum 8 characters.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
        <Button
          type="submit"
          className="w-full pt-2 pb-2"
          // disabled={isPending}
        >
          Sign Up
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <button
          type="button"
          className="underline underline-offset-4"
          onClick={onSwitchToLogin}
        >
          Login
        </button>
      </div>
    </form>
  );
}
