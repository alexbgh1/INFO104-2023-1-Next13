import QueryLayout from "@/components/sub-layout";
import Head from "next/head";
import Image from "next/image";

import { useState } from "react";

/* Definimos async ya que debemos solicitar y esperar una respuesta */
export async function getServerSideProps() {
  // Definimos una url que contiene un archivo json
  // Puedes acceder a este archivo en la siguiente dirección:
  // Se recomienda la extensión JSON Formater

  const url = "https://alexbgh1.github.io/cositas/data/data.json";
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Ejemplo2({ data }) {
  const [random, setRandom] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getRandomElement = () => {
    const random = Math.floor(Math.random() * data.length);
    return data[random];
  };

  return (
    <QueryLayout pageId="json">
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
        <button
          className="btn"
          // Arrow function es : () => {}
          // Se utiliza un arrow function para que no se ejecute al cargar la página
          // Sino que se ejecute al hacer click
          onClick={() => {
            setRandom(getRandomElement());
          }}
        >
          Soprendeme!
        </button>
        {random && (
          <div className="container__map">
            <Image
              src={random.img}
              alt={random.texto}
              width={300}
              height={300}
              onLoad={() => setImageLoaded(true)}
            />
            {imageLoaded && <small className="caption">{random.texto}</small>}
          </div>
        )}
      </div>
    </QueryLayout>
  );
}
