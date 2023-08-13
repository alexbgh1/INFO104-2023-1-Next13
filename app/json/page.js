import SubLayout from "@/app/components/sub-layout";

// Utilizar JSON
export const metadata = {
  title: "Json",
  description: "Esta es la página de Json",
};

export default function JsonT() {
  return (
    <SubLayout pageId="json">
      <div className="container">
        <h1 className="title">Json</h1>
        <p className="text">
          Un archivo <b>JSON</b> es un archivo de texto que contiene información
          en formato de objeto JavaScript (una colección de pares clave/valor),
          separados por comas y encerrados entre corchetes.
        </p>
      </div>
    </SubLayout>
  );
}
