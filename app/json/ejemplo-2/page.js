import SubLayout from "@/app/components/sub-layout";
import ShowContent from "./ShowContent";

export const metadata = {
  title: "Json - Ejemplo 2",
  description: "Esta es la página de Json - Ejemplo 2",
};

// Referencia: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
async function getData() {
  const res = await fetch("https://alexbgh1.github.io/cositas/data/data.json");

  if (!res.ok) {
    throw new Error("Error al obtener los datos");
  }
  return await res.json();
}

export default async function Ejemplo2() {
  const data = await getData();

  return (
    <SubLayout pageId="json">
      <div className="container">
        <h1 className="title">Ejemplo 2</h1>
        <p className="text">
          Ejemplo para pedir datos de una <b>API</b> utilizando{" "}
          <b>getServerSideProps</b> (función de Next.js).
        </p>
        <p className="text">
          También existe <b>getStaticProps</b> aunque se utilizaría para
          contenido estático
        </p>
        <ShowContent data={data} />
      </div>
    </SubLayout>
  );
}
