import SubLayout from "@/app/components/sub-layout";

export const metadata = {
  title: "ChakraUI",
  description: "ChakraUI",
};

export default function ChakraUIT() {
  return (
    <SubLayout pageId="chakraUI">
      <div className="container">
        <h1 className="title">ChakraUI</h1>
        <p className="text">
          <b>ChrakaUI</b> nos proporciona componentes en forma de herramientas.
        </p>
        <p className="text">
          Ya sea en forma de <b>interfaces bonitas</b>, o <b>funcionalidades</b>
          .
        </p>
      </div>
    </SubLayout>
  );
}
