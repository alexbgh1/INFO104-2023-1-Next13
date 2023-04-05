import Navigation from "./Navigation";
import info_json from "@/pages/api/allLinks.json";

export default function SubLayout({ children, pageId }) {
  // Utilizamos .find para encontrar el elemento que cumpla con la condición
  const info_link = info_json.find((link) => link.pageId === pageId);

  // Si no existe el elemento, retornamos un h1
  if (!info_link) {
    return <h1>Algo se rompió</h1>;
  }

  const { links } = info_link;

  return (
    <>
      <Navigation links={links} />
      {children}
    </>
  );
}
