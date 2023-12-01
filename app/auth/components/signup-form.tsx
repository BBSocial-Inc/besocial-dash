"use client";

import * as React from "react";

import { cn, constants } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import axios from "axios";
import { useUser } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

interface SignUpFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignUpForm({ className, ...props }: SignUpFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login } = useUser();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(constants.API_URL + "/signup", {
        email,
        password,
        name,
      });

      const data = response.data;

      if (data.status) {
        login(data.token);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Sign up failed:", error);
      setIsLoading(false);
      toast({
        title: "Authentication Failed",
        variant: "destructive",
        description:
          "Something went wrong while logging in. Check your credentials and try again",
      });
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1  mb-3">
            <Label className="" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Your name"
              type="text"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className="grid gap-1  mb-3">
            <Label className="" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="grid gap-1  mb-3">
            <Label className="" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Create a password"
              type="password"
              autoCapitalize="none"
              autoComplete="false"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign up with Email
          </Button>
        </div>
      </form>
    </div>
  );
}
