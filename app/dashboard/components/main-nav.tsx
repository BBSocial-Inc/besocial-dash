"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const path = usePathname();
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className={`text-sm transition-colors hover:text-primary ${
          path == "/dashboard" ? "font-bold" : "text-muted-foreground"
        }`}
      >
        Overview
      </Link>
      <Link
        href="/dashboard/users"
        className={`text-sm transition-colors hover:text-primary ${
          path.includes("/dashboard/users")
            ? "font-bold"
            : "text-muted-foreground"
        }`}
      >
        Users
      </Link>
      <Link
        href="/dashboard/create"
        className={`text-sm transition-colors hover:text-primary ${
          path.includes("/dashboard/create")
            ? "font-bold"
            : "text-muted-foreground"
        }`}
      >
        Create
      </Link>
      <Link
        href="/dashboard/content"
        className={`text-sm transition-colors hover:text-primary ${
          path.includes("/dashboard/content")
            ? "font-bold"
            : "text-muted-foreground"
        }`}
      >
        Content
      </Link>
      <Link
        href="/dashboard/hashtag"
        className={`text-sm transition-colors hover:text-primary ${
          path.includes("/dashboard/hashtag")
            ? "font-bold"
            : "text-muted-foreground"
        }`}
      >
        Hashtag
      </Link>
      <Link
        href="/dashboard/refer"
        className={`text-sm transition-colors hover:text-primary ${
          path.includes("/dashboard/refer")
            ? "font-bold"
            : "text-muted-foreground"
        }`}
      >
        Refer
      </Link>
      <Link
        href="/dashboard/report"
        className={`text-sm transition-colors hover:text-primary ${
          path.includes("/dashboard/report")
            ? "font-bold"
            : "text-muted-foreground"
        }`}
      >
        Report
      </Link>
    </nav>
  );
}
