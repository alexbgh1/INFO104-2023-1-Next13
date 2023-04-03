import QueryLayout from "@/components/sub-layout";
import Head from "next/head";

export default function Ejemplo2() {
  return (
    <QueryLayout pageId="localStorage">
      <Head>
        <title>LocalStorage - Ejemplo 2</title>
      </Head>
      <div className="container">
        <h1 className="title">Ejemplo 2</h1>
        <p className="text"></p>
      </div>
    </QueryLayout>
  );
}
