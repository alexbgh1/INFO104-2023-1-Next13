"use client";
import Image from "next/image";
import { useState } from "react";

const Cow = () => {
  //https://lenguajejs.com/javascript/multimedia/api-multimedia-nativa/
  // Utilizar imágen y sonido de la carpeta public
  const [sound, setSound] = useState(
    typeof Audio !== "undefined" ? new Audio("/cow-sound.mp3") : undefined
  );
  // NOTA: Es necesario hacer la validación de Audio porque Next.js
  //       no soporta el objeto Audio en el lado del servidor (Server Side Rendering)
  const [showImage, setShowImage] = useState(false);

  const handleOnClick = () => {
    // Bloquear si el sonido está reproduciendo o está en pausa
    // sound? es como preguntar si existe sound
    if (sound?.currentTime > 0 && !sound?.paused) {
      return;
    }

    sound?.play();
    console.log();
    setShowImage(true);

    // Desplegar imágen por su duración en milisegundos,
    // luego ocultarla
    setTimeout(() => {
      setShowImage(false);
    }, sound?.duration * 1000);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {
        // Mostrar la imágen si showImage es true
        showImage && (
          <Image
            src="/cow-image.png"
            alt="Vaca"
            className="vaca-shake" // vaca-backflip
            width={200}
            height={200}
            priority
          />
        )
      }

      <button className="btn" onClick={handleOnClick}>
        Vaca
      </button>
    </div>
  );
};

export default Cow;
