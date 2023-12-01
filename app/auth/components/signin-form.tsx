"use client";

import * as React from "react";

import { cn, constants } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { useUser } from "@/context/userContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useLazyQuery, useMutation } from "@apollo/client";
import { SIGNIN, VERIFY_OTP } from "@/graphql/mutation";
import { GlobalVars } from "@/constants";

interface SignInFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignInForm({ className, ...props }: SignInFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState("");
  const [showCode, setshowCode] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const { setUser, setToken } = useUser();

  const router = useRouter();
  const [loginAdmin, { loading, error, data }] = useLazyQuery(SIGNIN, {
    onCompleted(data) {
      setshowCode(true);
    },
  });

  const [VerifyOTP, VerifyLoading] = useMutation(VERIFY_OTP, {
    async onCompleted(data) {
      if (data?.ValidateEmailVerifyOTP) {
        //
        await localStorage.setItem(
          GlobalVars.ACCES_TOKEN,
          data?.ValidateEmailVerifyOTP.auth_token
        );

        await localStorage.setItem(
          GlobalVars.USER_PROFILE,
          JSON.stringify(data?.ValidateEmailVerifyOTP)
        );

        setToken(data?.ValidateEmailVerifyOTP.auth_token);
        setUser(data?.ValidateEmailVerifyOTP);

        router.push("/dashboard");
      }
    },
    onError(error) {
      console.log(error);
      setIsLoading(false);
      toast({
        title: "Authentication Failed",
        variant: "destructive",
        description:
          "Something went wrong while logging in. Check your credentials and try again",
      });
    },
  });

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    console.log({ email: email, otp: password });

    VerifyOTP({
      variables: {
        email: email,
        otp: password,
        isAuth: true,
      },
    });

    try {
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
          <div className="grid gap-1 relative">
            <Label className="sr-only" htmlFor="email">
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
            />

            <Button
              disabled={loading}
              onClick={(e) => {
                e.preventDefault();
                loginAdmin({
                  variables: {
                    email: email,
                  },
                });
              }}
              className="absolute right-0"
            >
              {" "}
              {loading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Send Code
            </Button>
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="OTP code"
              type="text"
              autoCapitalize="none"
              autoComplete="false"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          {showCode && (
            <Button type={"submit"} disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Continue
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
