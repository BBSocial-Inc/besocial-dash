"use client";
import styles from "@/styles/Home.module.scss";

export default function Logo() {
  return (
    <a href="/" className="-m-1.5 p-1.5 flex items-center">
      <p className={styles.logo}>BeSocial</p>
      <div className="bg-[#eee] font-bold -mb-0.5 md:mb-1 ml-1 relative rounded px-1 h-fit text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        Admin
      </div>
    </a>
  );
}
