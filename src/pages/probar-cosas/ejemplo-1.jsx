import SubLayout from "@/components/sub-layout";
import Head from "next/head";

export default function Ejemplo1() {
  return (
    <SubLayout pageId="probar-cosas">
      <Head>
        <title>Probar Cosas - Ejemplo 1</title>
      </Head>
      <div className="container">
        <h1 className="title">Ejemplo 1</h1>
      </div>
    </SubLayout>
  );
}
