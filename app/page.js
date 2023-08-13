import { Inter, Fira_Code } from "next/font/google";

// Fuentes de texto (fonts)
// Referencia: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
const inter = Inter({ subsets: ["latin"] });
const fira_code = Fira_Code({ subsets: ["latin"] });

// Agregando un título y descripción a la página
// Referencia: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata = {
  title: "Home",
  description: "Esta es la página de inicio",
};

export default function Home() {
  return (
    <>
      <div className="container">
        <h1 className="title">Home</h1>
        {/* Ejemplo usando Font: Inter y Fira_Code */}
        <p className={inter.className}>Ejemplo usando Inter</p>
        <p className={fira_code.className}>Ejemplo usando Fira</p>
      </div>
    </>
  );
}
