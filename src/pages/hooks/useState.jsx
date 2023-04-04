import QueryLayout from "@/components/sub-layout";
import Head from "next/head";

// Deberemos importar useState
import { useState } from "react";

export default function useStateT() {
  // const [variable, setVariable] = useState(valorInicial);
  // El valor inicial idealmente debería ser el mismo tipo que usaremos
  const [mensaje, setMensaje] = useState("Hola Mundo");

  // Por convención se usa handleOnChange para el evento onChange
  const handleOnChange = (e) => {
    // (e) es la abreviación de (event)
    // Por convención, se usa (e) para el evento por ser más corto

    // Un evento tiene muchas propiedades, en este caso al leer un input
    // el evento tiene una propiedad llamada target, que es el elemento y tiene
    // una propiedad llamada value, que es el valor del elemento
    setMensaje(e.target.value);
  };
  return (
    <QueryLayout pageId="hooks">
      <Head>
        <title>Hooks - useState</title>
      </Head>
      <div className="container">
        <h1 className="title">useState</h1>
        <input
          className="inputText"
          type="text"
          value={mensaje}
          onChange={handleOnChange}
        />

        <p className="text">
          <b>Mensaje:</b> <i>{mensaje}</i>
        </p>
      </div>
    </QueryLayout>
  );
}
