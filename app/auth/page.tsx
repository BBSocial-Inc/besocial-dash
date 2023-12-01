"use client";
import Link from "next/link";

import { SignInForm } from "./components/signin-form";
import { useState } from "react";
import Logo from "@/components/Logo";
import { useRouter } from "next/navigation";

export default function AuthenticationPage() {
  const [login, setLogin] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <div className="w-full container relative h-[100dvh] flex flex-col items-center justify-center">
        <div className="h-fit">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] items-center">
            <div className="relative z-20 flex items-center text-lg font-medium">
              <Logo />
            </div>
            <SigninPage />

            <p className="px-8 text-center text-sm text-muted-foreground">
              Only admins can sign in
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const SigninPage = () => {
  return (
    <div>
      <div className="flex flex-col space-y-2 text-center mb-5">
        <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password to enter your account
        </p>
      </div>
      <SignInForm />
    </div>
  );
};
