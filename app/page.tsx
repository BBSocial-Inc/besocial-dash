"use client";
import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>BeSocial</title>
        <link rel="favicon" href="/favicon.ico" sizes="any" />
      </Head>
    </div>
  );
}
