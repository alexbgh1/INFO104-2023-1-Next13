import SubLayout from "@/app/components/sub-layout";
import Link from "next/link";
import styles from "@/app/styles/Query.module.css";

export const metadata = {
  title: "Query",
  description: "Esta es la página de Query",
};

// Utilizar query params
export default function Query() {
  return (
    <SubLayout pageId="query">
      <h1 className={styles.title}>¿Cómo ha ido tu semana?</h1>
      <div className={styles.container}>
        <Link
          href={{
            pathname: "/query/response",
            query: { opt: 0 },
          }}
        >
          Excelente!
        </Link>
        <Link
          href={{
            pathname: "/query/response",
            query: { opt: 1 },
          }}
        >
          Más o menos no mas!
        </Link>
        <Link
          href={{
            pathname: "/query/response",
            query: { opt: 2 },
          }}
        >
          Horrible! :(
        </Link>
        <Link
          href={{
            pathname: "/query/response",
            query: { opt: 3, msg: "Este es el mensaje" },
          }}
        >
          click me!
        </Link>
      </div>
    </SubLayout>
  );
}
