"use client";

import SubLayout from "@/app/components/sub-layout";
import { useState } from "react";

// Recordar un formulario
export default function Ejemplo1() {
  // Localstorage on Nextjs
  // Debemos verificar con typeof si existe localStorage
  // porque Next.js no soporta localStorage en el lado del servidor (Server Side Rendering)
  const nombreLS =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("nombre")
      : undefined;
  const apellidoLS =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("apellido")
      : undefined;
  const [nombre, setNombre] = useState(nombreLS || "");
  const [apellido, setApellido] = useState(apellidoLS || "");

  return (
    <SubLayout pageId="localStorage">
      <div className="container">
        <h1 className="title">Ejemplo 1</h1>
        <Formulario
          nombre={nombre}
          setNombre={setNombre}
          apellido={apellido}
          setApellido={setApellido}
        />
      </div>
    </SubLayout>
  );
}

const Formulario = ({ nombre, setNombre, apellido, setApellido }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "" || apellido === "") {
      alert("Debes ingresar un nombre y un apellido");
      return;
    }

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);

    alert("Formulario enviado, datos guardados en localStorage");
  };

  return (
    <>
      <h2 className="title-2">Formulario</h2>
      <form onSubmit={handleSubmit} className="form-LS">
        <div>
          <label htmlFor="nombre">Ingresa tu Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="apellido">Ingresa tu Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Guardar
        </button>
      </form>
    </>
  );
};
