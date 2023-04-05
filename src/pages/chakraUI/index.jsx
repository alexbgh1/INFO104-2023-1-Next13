import SubLayout from "@/components/sub-layout";
import Head from "next/head";

export default function ChakraUIT() {
  return (
    <SubLayout pageId="chakraUI">
      <Head>
        <title>ChakraUI</title>
      </Head>
      <div className="container">
        <h1 className="title">ChakraUI</h1>
        <p className="text">
          <b>ChrakaUI</b> nos proporciona componentes en forma de herramientas.
        </p>
        <p className="text">
          Ya sea en forma de <b>interfaces bonitas</b>, o <b>funcionalidades</b>
          .
        </p>
      </div>
    </SubLayout>
  );
}
