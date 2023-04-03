import QueryLayout from "@/components/sub-layout";
import Head from "next/head";

export default function Hooks() {
  return (
    <QueryLayout pageId="hooks">
      <Head>
        <title>Hooks</title>
      </Head>
      <div className="container">
        <h1 className="title">Hooks</h1>
        <p className="text">
          Algunos de los hooks más usados son <b>useState</b> y <b>useEffect</b>
          .
        </p>
      </div>
    </QueryLayout>
  );
}
