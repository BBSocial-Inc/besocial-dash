"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { constants } from "@/lib/utils";
import axiosInstance from "@/lib/axios";

const TOKEN_COOKIE_NAME = constants.TOKEN_COOKIE_NAME;

const UserContext = createContext<any>({});

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }: any) {
  const [token, setToken] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  const logout = () => {
    Cookies.remove(TOKEN_COOKIE_NAME);
    setUser(null);
    localStorage.clear();

    router.push("/auth");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        logout,
        setUser: (v: any) => setUser(v),
        token,
        setToken: (v: any) => setToken(v),
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
