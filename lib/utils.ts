import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const constants = {
  API_URL: "https://BeSocial.onrender.com",
  // API_URL: "http://localhost:3000",
  TOKEN_COOKIE_NAME: "authToken",
};
