import Head from "next/head";
import Image from "next/image";
import { Inter, Fira_Code } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
const fira_code = Fira_Code({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="container">
        <h1 className="title">Home</h1>
        {/* Ejemplo usando Font: Inter y Fira_Code */}
        <p className={inter.className}>Ejemplo usando Inter</p>
        <p className={fira_code.className}>Ejemplo usando Fira</p>
      </div>
    </>
  );
}
