import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const des =
  "BeSocial - Elevate Your Business with Referral Marketing. Drive exponential growth by harnessing the strength of word-of-mouth referrals. Real-time analytics, customizable programs, and seamless integration to fuel your success.";

export const metadata: Metadata = {
  title: "Authenticationn - BeSocial",
  description: des,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  applicationName: "BeSocial",
  keywords: [
    "Referral",
    "refer",
    "BeSocial",
    "refer friends",
    "referal management system",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Authenticationn - BeSocial",
    description: des,
    creator: "@cirlormx",
    images: ["https://BeSocial.xyz/cover.png"],
  },
  openGraph: {
    images: "https://BeSocial.xyz/cover.png",
    title: "Authenticationn - BeSocial",
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
        <main>{children}</main>
      </body>
    </html>
  );
}
