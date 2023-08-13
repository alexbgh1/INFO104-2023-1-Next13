import SubLayout from "@/app/components/sub-layout";

export const metadata = {
  title: "Hooks",
  description: "Esta es la página de Hooks",
};

// Hooks
export default function Hooks() {
  return (
    <SubLayout pageId="hooks">
      <div className="container">
        <h1 className="title">Hooks</h1>
        <p className="text">
          Algunos de los hooks más usados son <b>useState</b> y <b>useEffect</b>
          .
        </p>
        <p className="text">
          <b>useState:</b> Nos ayuda a almacenar variables "reactivas", por
          ejemplo almacenar un mensaje.
        </p>
        <p className="text">
          <b>useEffect:</b> Nos ayuda a "escuchar (listener)" variables, por
          ejemplo que al cambiar una variable, cambie el fondo de color.
        </p>
      </div>
    </SubLayout>
  );
}
