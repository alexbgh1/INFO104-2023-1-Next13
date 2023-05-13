import SubLayout from "@/components/sub-layout";
import Head from "next/head";

// Importamos desde React
import { useState, useEffect } from "react";

export default function Ejemplo1() {
  const [data, setData] = useState([]);

  // Hacemos un 'fetch' (petición) a la API
  useEffect(() => {
    // Fetch significa 'traer' o 'recuperar', es una función nativa de JavaScript
    fetch("/api/ejemplo-1")
      .then((res) => res.json()) // Si la petición es exitosa, convertimos la respuesta a JSON
      .then((data) => setData(data)); // Si la conversión es exitosa, guardamos los datos en el estado
  }, []);

  console.log("Data desde api local /api/ejemplo-1 ", data); // Ver en consola
  return (
    <SubLayout pageId="api">
      <Head>
        <title>API Ejemplo - 1</title>
      </Head>
      <div className="container">
        <h1 className="title">Ejemplo 1 - GET</h1>
        <div className="container__map">
          {
            // Si hay datos, los mostramos
            data.length > 0 &&
              data.map((persona) => (
                <div key={persona.id}>
                  <p className="text">{persona.nombre}</p>
                  <p className="text">{persona.apellido}</p>
                  <p className="text">{persona.edad}</p>
                </div>
              ))
          }
        </div>
      </div>
    </SubLayout>
  );
}
