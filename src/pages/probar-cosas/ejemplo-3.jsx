import SubLayout from "@/components/sub-layout";
import Head from "next/head";

export default function Ejemplo3() {
  return (
    <SubLayout pageId="probar-cosas">
      <Head>
        <title>Probar Cosas - Ejemplo 3</title>
      </Head>
      <div className="container">
        <h1 className="title">Ejemplo 3</h1>
      </div>
    </SubLayout>
  );
}
