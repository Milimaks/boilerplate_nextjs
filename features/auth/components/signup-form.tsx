import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useSignUp } from "@/features/auth/hooks/useSignUp";
import { cn } from "lib/utils";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { useState } from "react";

export function SignUpForm({
  className,
  onSwitchToLogin,
  ...props
}: React.ComponentPropsWithoutRef<"form"> & { onSwitchToLogin?: () => void }) {
  const { mutate, isPending, error, data } = useSignUp();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    // terms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formData", formData);
    mutate(formData);
  };
  return (
    <form
      className={cn("flex flex-col gap-6 ", className)}
      onSubmit={handleSubmit}
      {...props}
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your details below to create a new account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="firstName">firstname</Label>
          <Input
            id="firstName"
            type="text"
            placeholder="John"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="lastName">lastname</Label>
          <Input
            id="lastName"
            type="text"
            placeholder="Doe"
            value={formData.lastName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <p className="text-sm text-muted-foreground">Minimum 8 characters.</p>
        </div>

        {/* <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div> */}
        <Button type="submit" className="w-full pt-2 pb-2" disabled={isPending}>
          {isPending ? "Signing Up..." : "Sign Up"}
        </Button>
        {error && (
          <p className="text-red-600 text-sm mt-2">
            {(error as any).message || "An error occurred"}
          </p>
        )}
        {data && (
          <p className="text-green-600 text-sm mt-2">
            Account created successfully!
          </p>
        )}
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
