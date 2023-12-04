"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { constants } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { GlobalVars } from "@/constants";

const SessionProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const token = localStorage.getItem(GlobalVars.ACCES_TOKEN);

    if (!token && path.includes("/dashboard")) {
      router.push("/auth");
      setLoading(false);
    } else if (token && path === "/auth") {
      router.push("/dashboard");
      setLoading(false);
    } else {
      setLoading(false);
    }

    if (path == "/") {
      if (!token) {
        router.push("/auth");
        setLoading(false);
      } else {
        router.push("/dashboard");
        setLoading(true);
      }
    } else {
      setLoading(false);
    }

    if (path == "/auth") {
      if (!token) {
        setLoading(false);
      } else {
        setLoading(true);
      }
    } else {
      setLoading(false);
    }
  }, [path, router]);

  return (
    <>
      {loading ? (
        <div className="bg-[white] z-50 fixed top-0 left-0 w-full h-[100dvh] flex items-center justify-center">
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        </div>
      ) : null}
      {children}
    </>
  );
};

export default SessionProvider;
