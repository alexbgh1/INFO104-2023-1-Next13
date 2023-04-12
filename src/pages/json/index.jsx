import SubLayout from "@/components/sub-layout";
import Head from "next/head";

// Utilizar JSON
export default function JsonT() {
  return (
    <SubLayout pageId="json">
      <Head>
        <title>Json</title>
      </Head>
      <div className="container">
        <h1 className="title">Json</h1>
        <p className="text">
          Un archivo <b>JSON</b> es un archivo de texto que contiene información
          en formato de objeto JavaScript (una colección de pares clave/valor),
          separados por comas y encerrados entre corchetes.
        </p>
      </div>
    </SubLayout>
  );
}
