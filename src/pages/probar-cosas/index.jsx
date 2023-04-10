import SubLayout from "@/components/sub-layout";
import Head from "next/head";

export default function ProbarCosas() {
  return (
    <SubLayout pageId="probar-cosas">
      <Head>
        <title>Probar Cosas</title>
      </Head>
      <div className="container">
        <h1 className="title">Probar Cosas</h1>
        <p className="text">Zona para añadir o probar cosas.</p>
      </div>
    </SubLayout>
  );
}
