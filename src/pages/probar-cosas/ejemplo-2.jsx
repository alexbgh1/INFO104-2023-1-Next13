import SubLayout from "@/components/sub-layout";
import Head from "next/head";

export default function Ejemplo2() {
  return (
    <SubLayout pageId="probar-cosas">
      <Head>
        <title>Probar Cosas - Ejemplo 2</title>
      </Head>
      <div className="container">
        <h1 className="title">Ejemplo 2</h1>
      </div>
    </SubLayout>
  );
}
