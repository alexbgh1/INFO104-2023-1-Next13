"use client";
import { useState } from "react";
import Image from "next/image";

const ShowContent = ({ data }) => {
  const [random, setRandom] = useState(null);

  const handleOnClick = () => {
    const random = Math.floor(Math.random() * data.length);
    setRandom(data[random]);
  };

  return (
    <>
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
    </>
  );
};

export default ShowContent;
