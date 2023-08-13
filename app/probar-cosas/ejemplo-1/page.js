import SubLayout from "@/app/components/sub-layout";
import Cow from "@/app/components/Cow";

export const metadata = {
  title: "Probar Cosas - Ejemplo 1",
  description: "Utilizando un audio",
};

// Utilizar Sonido
export default function Ejemplo1() {
  return (
    <SubLayout pageId="probar-cosas">
      <div className="container">
        <h1 className="title">Ejemplo 1</h1>
        <p className="text">
          Utilizando un <b>audio</b>
        </p>
        <Cow />
      </div>
    </SubLayout>
  );
}
