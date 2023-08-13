"use client";

import { useEffect, useState } from "react";

const AddPerson = () => {
  const [data, setData] = useState([]);
  const [infoPersona, setInfoPersona] = useState({
    id: 0,
    nombre: "",
  });

  // Obtenemos los datos del servidor
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/ejemplo-2", { method: "GET" });
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  // Al escribir en el input, actualizamos el estado
  const handleChange = (e) => {
    setInfoPersona({
      id: Math.floor(Math.random() * 1000000),
      nombre: e.target.value,
    });
  };

  // Al enviar el formulario, enviamos los datos al servidor
  const handleSubmit = (e) => {
    e.preventDefault();
    // Envia los datos al servidor (POST)
    fetch("/api/ejemplo-2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(infoPersona),
    }).then((res) => {
      // Si Recibe la respuesta del servidor, actualizamos los datos mostrados
      res.json().then((data) => setData(data));
    });

    // Reseteamos el estado
    setInfoPersona({
      id: 0,
      nombre: "",
    });
  };

  return (
    <div className="container__form">
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
      <form onSubmit={handleSubmit}>
        <input
          style={{ backgroundColor: "white", border: "1px solid black" }}
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
          value={infoPersona.nombre}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default AddPerson;
