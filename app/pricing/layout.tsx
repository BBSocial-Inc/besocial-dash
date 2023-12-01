import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const des =
  "Refir - Elevate Your Business with Referral Marketing. Drive exponential growth by harnessing the strength of word-of-mouth referrals. Real-time analytics, customizable programs, and seamless integration to fuel your success.";

export const metadata: Metadata = {
  title: "Pricing - Refir",
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
    title: "Pricing - Refir",
    description: des,
    creator: "@cirlormx",
    images: ["https://refir.xyz/cover.png"],
  },
  openGraph: {
    images: "https://refir.xyz/cover.png",
    title: "Pricing - Refir",
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
