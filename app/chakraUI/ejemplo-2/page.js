import SubLayout from "@/app/components/sub-layout";
import Content from "./Content";

export const metadata = {
  title: "ChakraUI - Ejemplo 2",
  description: "ChakraUI - Ejemplo 2",
};

export default function Ejemplo2() {
  return (
    <SubLayout pageId="chakraUI">
      <div className="container">
        <Content />
      </div>
    </SubLayout>
  );
}
