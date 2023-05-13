import SubLayout from "@/components/sub-layout";
import Head from "next/head";

export default function ApiEjemplo() {
  return (
    <SubLayout pageId="api">
      <Head>
        <title>API Ejemplo</title>
      </Head>
      <div className="container">
        <h1 className="title">API Next js</h1>
        <p className="text">
          En el caso de Next las <b>API</b> se definen en la carpeta{" "}
          <b>pages/api</b> y se pueden crear tantos archivos como se necesiten.
        </p>
      </div>
    </SubLayout>
  );
}
