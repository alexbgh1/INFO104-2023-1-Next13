import { useRouter } from "next/router";
import SubLayout from "@/components/sub-layout";
import Head from "next/head";

// https://nextjs.org/docs/routing/dynamic-routes

// URL TO FETCH: https://jsonplaceholder.typicode.com/posts
const Post = ({ post }) => {
  const router = useRouter();
  const { pid } = router.query;

  /* ¿ Por qué hacemos este paso intermedio de pasarlo a una variable? */
  /* R: Es un tema de renderizado, no podemos usar el {pid} directamente en el title */
  /* https://github.com/vercel/next.js/discussions/38256 */
  const title_post = `Posts - ${pid}`;

  return (
    <>
      <Head>
        <title>{title_post}</title>
      </Head>
      <SubLayout pageId="posts">
        <div className="container">
          <h1 className="title">Post pid: {pid}</h1>
          <h2 className="title-2">{post.title}</h2>
          <p className="text">{post.body}</p>
        </div>

        <p style={{ marginTop: "1rem" }}>
          El post fue sacado desde:{" "}
          <a
            className="link"
            href={`https://jsonplaceholder.typicode.com/posts/${pid}`}
          >
            https://jsonplaceholder.typicode.com/posts/{pid}
          </a>
        </p>
      </SubLayout>
    </>
  );
};

export default Post;

// Utilizamos getStaticProps para obtener los datos de la API
// En este caso, la información de un post en específico
// la cual es estática, por lo que no cambia
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.pid}`
  );
  const post = await res.json();

  // Retorna el post que será utilizado por la página
  return { props: { post } };
}

// También utilizamos getStaticPaths para obtener los paths
// de los posts, para que NextJS pueda generar las páginas
// estáticas de cada post
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // Obtenemos los paths de los posts
  const paths = posts.map((post) => ({
    params: { pid: post.id.toString() },
  }));

  // Retorna los paths, y fallback: false para que
  // NextJS no genere páginas dinámicas

  // Por ejemplo, si no existe el post con id 1000
  // no se generará una página para ese post
  return { paths, fallback: false };
}
