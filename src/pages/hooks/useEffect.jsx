import SubLayout from "@/components/sub-layout";
import Head from "next/head";

// Deberemos importar useEffect
import { useState, useEffect } from "react";

// Utilizar useEffect
export default function useEffectT() {
  return (
    <SubLayout pageId="hooks">
      <Head>
        <title>Hooks - useEffect</title>
      </Head>

      <div className="container">
        <h1 className="title">useEffect</h1>
        <p className="text"></p>
      </div>
    </SubLayout>
  );
}
