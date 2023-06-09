import SubLayout from "@/components/sub-layout";
import Head from "next/head";
import Image from "next/image";

import { useState } from "react";

// Hacer petición FETCH y Utilizar JSON (respuesta)
export async function getServerSideProps() {
  let data = null;
  try {
    const url = "https://alexbgh1.github.io/cositas/data/data.json";
    const res = await fetch(url);
    data = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      data,
    },
  };
}

export default function Ejemplo2({ data }) {
  const [random, setRandom] = useState(null);

  const handleOnClick = () => {
    const random = Math.floor(Math.random() * data.length);
    setRandom(data[random]);
  };

  return (
    <SubLayout pageId="json">
      <Head>
        <title>Json - Ejemplo 2</title>
      </Head>
      <div className="container">
        <h1 className="title">Ejemplo 2</h1>
        <p className="text">
          Ejemplo para pedir datos de una <b>API</b> utilizando{" "}
          <b>getServerSideProps</b> (función de Next.js).
        </p>
        <p className="text">
          También existe <b>getStaticProps</b> aunque se utilizaría para
          contenido estático
        </p>
        <button className="btn" onClick={handleOnClick}>
          Sorpendeme!
        </button>

        {/* Como al principio es 'null', esperamos a que tenga un valor para mostrarlo */}
        {random && (
          <div className="container__map">
            <Image
              src={random.img}
              alt={random.texto}
              width={300}
              height={300}
              unoptimized
              priority
            />

            <small className="caption">{random.texto}</small>
          </div>
        )}
      </div>
    </SubLayout>
  );
}
