import SubLayout from "@/app/components/sub-layout";

export const metadata = {
  title: "LocalStorage",
  description: "Esta es la página de LocalStorage",
};

export default function JsonT() {
  return (
    <SubLayout pageId="localStorage">
      <div className="container">
        <h1 className="title">LocalStorage</h1>
        <p className="text">
          <b>LocalStorage</b> es un objeto que nos permite almacenar datos en el
          navegador del usuario.
        </p>
        <p className="text">
          Se espera guardar preferencias del usuario o selecciones, pero no
          datos de importancia
        </p>
      </div>
    </SubLayout>
  );
}
