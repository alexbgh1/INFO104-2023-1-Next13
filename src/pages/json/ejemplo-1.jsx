import SubLayout from "@/components/sub-layout";
import Head from "next/head";

// Recorrer un JSON
export default function Ejemplo1() {
  const data = [
    {
      id: 1,
      name: "Juan",
      age: 20,
      country: "Chile",
    },
    {
      id: 2,
      name: "Pedro",
      age: 25,
      country: "Argentina",
    },
  ];

  return (
    <SubLayout pageId="json">
      <Head>
        <title>Json - Ejemplo 1</title>
      </Head>
      <div className="container">
        <h1 className="title">Ejemplo 1</h1>
        <p className="text">
          Ejemplo para recorrer una estructura utilizando <b>.map()</b>.
        </p>

        {/* Notar que se da un parámetro "key", esto es para que React 
        pueda identificar cada elemento de la lista y no se repitan
        */}
        <div className="container__map">
          {data.map((item) => (
            <div key={item.id}>
              <p className="text">Nombre: {item.name}</p>
              <p className="text">Edad: {item.age}</p>
              <p className="text">País: {item.country}</p>
            </div>
          ))}
        </div>

        {/* Esto es lo mismo pero se aplica "destructuring" 
        al utilizar las llaves { } */}
        <div className="container__map">
          {data.map(({ id, name, age, country }) => (
            <div key={id}>
              <p className="text">Nombre: {name}</p>
              <p className="text">Edad: {age}</p>
              <p className="text">País: {country}</p>
            </div>
          ))}
        </div>
      </div>
    </SubLayout>
  );
}
