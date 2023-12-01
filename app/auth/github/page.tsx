"use client";

import { Icons } from "@/components/icons";
import { useUser } from "@/context/userContext";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Github({}: any) {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const { login } = useUser();

  useEffect(() => {
    login(token);
  }, [token]);
  return (
    <div className="bg-[white] z-50 fixed top-0 left-0 w-full h-[100dvh] flex items-center justify-center">
      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
    </div>
  );
}
