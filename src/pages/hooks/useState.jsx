import SubLayout from "@/components/sub-layout";
import Head from "next/head";

// Deberemos importar useState
import { useState } from "react";

// Utilizar useState
export default function useStateT() {
  return (
    <SubLayout pageId="hooks">
      <Head>
        <title>Hooks - useState</title>
      </Head>
      <div className="container">
        <h1 className="title">useState</h1>
        <p className="text"></p>
      </div>
    </SubLayout>
  );
}
