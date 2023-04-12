import Link from "next/link";
import Head from "next/head";
import SubLayout from "@/components/sub-layout";

function Posts() {
  const links = [1, 2, 3, 4, 5, 6, 7, 8, "no-existe", "abc"];

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <SubLayout pageId="posts">
        <div>
          <h1 className="title">Posts</h1>
          <p className="text">
            Los post se basan en esta URL:{" "}
            <a
              href="https://jsonplaceholder.typicode.com/posts"
              className="link"
              target="_blank"
            >
              https://jsonplaceholder.typicode.com/posts
            </a>
          </p>
          {/* Generamos posibles links */}
          <ul>
            {links.map((post) => (
              <li key={post}>
                <Link href={`/posts/${post}`} className="link">
                  Post {post}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SubLayout>
    </>
  );
}

export default Posts;
