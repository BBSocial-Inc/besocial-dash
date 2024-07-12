"use client";

import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import SessionProvider from "@/context/sessionProvide";
const inter = Inter({ subsets: ["latin"] });

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { persistCache } from "apollo3-cache-persist";
import { GlobalVars } from "@/constants";
import { UserProvider } from "@/context/userContext";

const des = "BeSocial - BeSocial.";

// export const metadata: Metadata = {
//   title: "BeSocial - Grow your user-base with referrals",
//   description: des,
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon.ico",
//     apple: "/favicon.ico",
//   },
//   applicationName: "BeSocial",
//   keywords: [
//     "Referral",
//     "refer",
//     "BeSocial",
//     "refer friends",
//     "referal management system",
//   ],
//   twitter: {
//     card: "summary_large_image",
//     title: "BeSocial - Grow your user-base with referrals",
//     description: des,
//     creator: "@cirlormx",
//     images: ["https://BeSocial.xyz/cover.png"],
//   },
//   openGraph: {
//     images: "https://BeSocial.xyz/cover.png",
//     title: "BeSocial - Grow your user-base with referrals",
//     description: des,
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const httpLink = createHttpLink({
    uri: "https://prod.joinb.social/graphql", //PROD or DEV
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(GlobalVars.ACCES_TOKEN);

    console.log(token);
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <html lang="en">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-MW2XD2KSC3`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-MW2XD2KSC3');
        `}
      </Script>
      <ApolloProvider client={client}>
        <SessionProvider>
          <UserProvider>
            <body className={inter.className}>
              <main>
                {children}
                <Toaster />
                <Analytics />
              </main>
            </body>
          </UserProvider>
        </SessionProvider>
      </ApolloProvider>
    </html>
  );
}
