import SubLayout from "@/components/sub-layout";
import Head from "next/head";

export default function JsonT() {
  return (
    <SubLayout pageId="localStorage">
      <Head>
        <title>LocalStorage</title>
      </Head>
      <div className="container">
        <h1 className="title">LocalStorage</h1>
        <p className="text">
          <b>LocalStorage</b> es un objeto que nos permite almacenar datos en el
          navegador del usuario.
        </p>
        <p className="text">
          Se espera guardar preferencias del usuario o selecciones, pero no
          datos de importancia
        </p>
      </div>
    </SubLayout>
  );
}
