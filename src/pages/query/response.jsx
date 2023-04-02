import QueryLayout from "@/components/sub-layout";
import styles from "../../styles/Query.module.css";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Response() {
  let texts = [
    "Que bien! me alegro!",
    "Qué pasó? bueno no debe ser para tanto...",
    "Pucha, la próximo semana mejor!",
  ];

  const router = useRouter();
  const { opt, msg } = router.query;

  return (
    <QueryLayout pageId="query">
      <Head>
        <title>Query - Response</title>
      </Head>

      {/* Esto significa:
          Si opt no existe && msg no existe
          entonces muestra el h1 "No se recibieron parámetros"
      */}
      {!opt && !msg && (
        <h1 className={styles.title}>No se recibieron parámetros</h1>
      )}

      <div>
        {/* 
          Esto significa:
          Si opt existe: entonces muestra el h1 con el texto de la opción
          Si msg existe: entonces muestra el p con el mensaje
          En caso de no existir opt o msg, no se muestra el html
        */}
        {opt && <h1 className={styles.title}>{texts[opt]}</h1>}
        {msg && <p className={styles.text}>Mensaje: {msg}</p>}
        <div className={styles.container}>
          <Link href={"/query"}>Volver a Query</Link>
        </div>
      </div>
    </QueryLayout>
  );
}
