import SubLayout from "@/app/components/sub-layout";
import ListOfPersons from "./ListOfPersons";

export default async function Ejemplo1() {
  return (
    <SubLayout pageId="api">
      <div className="container">
        <h1 className="title">Ejemplo 1 - GET</h1>
        <div className="container__map">
          <ListOfPersons />
        </div>
      </div>
    </SubLayout>
  );
}
