import styles from "@/app/styles/General-Layout.module.css";
import Navigation from "./Navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/query", label: "Query" },
  { href: "/json", label: "Json" },
  { href: "/hooks", label: "Hooks" },
  { href: "/localStorage", label: "LocalStorage" },
  { href: "/probar-cosas", label: "Probar_Cosas" },
  { href: "/chakraUI", label: "ChakraUI" },
  { href: "/api-ejemplo", label: "API" },
  { href: "/posts", label: "Posts" },
];

export default function GeneralLayout({ children, pageId }) {
  return (
    <div className={styles.content}>
      <Navigation links={links} />
      <main className={styles.main__content}>{children}</main>
      <footer className={styles.footer}>
        <p>Pie de página</p>
      </footer>
    </div>
  );
}

// Podemos retornar "<></>" en vez de "<div></div>, recibe el nombre de "Fragment"
// es un componente que no se renderiza en el DOM, es útil cuando queremos retornar varios
// elementos sin necesidad de envolverlos en un elemento padre.
