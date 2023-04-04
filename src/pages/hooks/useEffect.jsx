import QueryLayout from "@/components/sub-layout";
import Head from "next/head";

// Deberemos importar useEffect
import { useState, useEffect } from "react";

export default function useEffectT() {
  const [mensaje, setMensaje] = useState("Hola Mundo");
  const [color, setColor] = useState("#ffffff"); // Inicializa conblanco -> esto no lo veremos

  const handleOnChange = (e) => {
    setMensaje(e.target.value);
  };

  useEffect(() => {
    // Cuando cambia el mensaje genera un color al azar

    // # : para indicar que es un color hexadecimal (6 dígitos) ej: #ffffff (blanco)
    // Math.floor(Math....) : para generar 6 números y/o letras (hexadecimal)
    // 34: para que sean colores pasteles (Si un hexadecimal tiene 8 dígitos, los 2 últimos son la transparencia)
    // ej: #00000034 (blanco con transparencia)

    const colorAleatorio =
      "#" + Math.floor(Math.random() * 16777215).toString(16) + "34";
    console.log("Se cambió el mensaje y el color ahora es: " + colorAleatorio);
    setColor(colorAleatorio);
  }, [mensaje]);

  // [ Importante! ] : El orden SI importa, el useEffect de arriba se ejecuta antes que el de abajo
  // De la forma que está ahora, al entrar a la página debería quedar un fondo rojo
  // La secuencia sería: Blanco (state inicial) -> ColorRandom (useEffect[mensaje]) -> Rojo (useEffect[] 1 sola vez)
  // Después cada vez que cambie el mensaje, se ejecutará el useEffect[mensaje] y cambiará el color

  useEffect(() => {
    // Este código se ejecuta cuando el componente se monta
    setColor("red");
    console.log("Se 'montó' el componente");
  }, []);

  return (
    <QueryLayout pageId="hooks">
      <Head>
        <title>Hooks - useEffect</title>
      </Head>

      <div style={{ backgroundColor: color }} className="container">
        <h1 className="title">useEffect</h1>
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
