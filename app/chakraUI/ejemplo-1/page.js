import SubLayout from "@/app/components/sub-layout";
import Content from "./Content";

export const metadata = {
  title: "ChakraUI - Ejemplo 1",
  description: "ChakraUI - Ejemplo 1",
};

export default function Ejemplo1() {
  return (
    <SubLayout pageId="chakraUI">
      <div className="container">
        <h1 className="title">Ejemplo 1</h1>
        <Content />
      </div>
    </SubLayout>
  );
}
