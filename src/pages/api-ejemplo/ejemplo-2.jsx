import SubLayout from "@/components/sub-layout";
import Head from "next/head";

// Importamos desde React
import { useState, useEffect, use } from "react";

export default function Ejemplo2() {
  // EJEMPLO POST: Enviar datos al servidor
  const [dataPost, setDataPost] = useState([]); // Definimos el estado para visualizar los datos
  // Definimos la forma de los datos a enviar
  const [infoPersona, setInfoPersona] = useState({
    id: null,
    nombre: "",
  });

  // handleChange: Función para actualizar el estado de infoPersona
  const handleChange = (e) => {
    // Actualizamos el estado
    const id = Math.floor(Math.random() * 100000);
    const nombre = e.target.value;
    const infoPersonaObject = {
      id,
      nombre,
    };
    setInfoPersona(infoPersonaObject);
  };

  // handleSubmit: Función para enviar los datos al servidor
  const handleSubmit = (e) => {
    e.preventDefault();
    // Actualizamos el estado
    console.log("infoPersona", infoPersona);
    // if (infoPersona.nombre === "" || infoPersona.nombre === null) {
    //   alert("El campo nombre no puede estar vacío");
    //   return;
    // }

    // ---- Enviamos los datos al servidor ----
    // Especificamos el método POST, los headers (tipo de contenido) y el body (los datos a enviar)
    fetch("/api/ejemplo-2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(infoPersona),
    })
      .then((res) => {
        console.log("response", res);
        return res.json();
      })
      .then((data) => setDataPost(data));

    // Limpiamos el formulario
    setInfoPersona({
      id: null,
      nombre: "",
    });
  };

  return (
    <SubLayout pageId="api">
      <Head>
        <title>API Ejemplo - 2</title>
      </Head>

      <div className="container">
        <h1 className="title">Ejemplo 2 - POST</h1>

        {/* EJEMPLO POST: Visualizar datos enviados al servidor */}
        {dataPost.length > 0 ? (
          <div className="container__data">
            <h2>Datos enviados al servidor</h2>
            <ul>
              {dataPost.map((persona) => (
                <li key={persona.id}>
                  <p>Id: {persona.id}</p>
                  <p>Nombre: {persona.nombre}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* EJEMPLO POST: Enviar datos al servidor */}
        <div className="container__form">
          <form onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: "white", border: "1px solid black" }}
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={infoPersona.nombre}
              onChange={handleChange}
            />
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </SubLayout>
  );
}
