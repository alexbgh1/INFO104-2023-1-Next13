import SubLayout from "@/app/components/sub-layout";
import AddPerson from "./AddPerson";

export default function Ejemplo2() {
  return (
    <SubLayout pageId="api">
      <div className="container">
        <h1 className="title">Ejemplo 2 - POST</h1>
        <AddPerson />
      </div>
    </SubLayout>
  );
}
