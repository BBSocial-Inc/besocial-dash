import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TeamSwitcher from "./components/team-switcher";
import { MainNav } from "./components/main-nav";
import { Search } from "./components/search";
import { UserNav } from "./components/user-nav";
const inter = Inter({ subsets: ["latin"] });

const des =
  "Refir - Elevate Your Business with Referral Marketing. Drive exponential growth by harnessing the strength of word-of-mouth referrals. Real-time analytics, customizable programs, and seamless integration to fuel your success.";

export const metadata: Metadata = {
  title: "Authenticationn - Refir",
  description: des,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  applicationName: "Refir",
  keywords: [
    "Referral",
    "refer",
    "refir",
    "refer friends",
    "referal management system",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Authenticationn - Refir",
    description: des,
    creator: "@cirlormx",
    images: ["https://refir.xyz/cover.png"],
  },
  openGraph: {
    images: "https://refir.xyz/cover.png",
    title: "Authenticationn - Refir",
    description: des,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <NavHeader />
          {children}
        </main>
      </body>
    </html>
  );
}

const NavHeader = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <TeamSwitcher />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          {/* <Search /> */}
          <UserNav />
        </div>
      </div>
    </div>
  );
};
