import SubLayout from "@/app/components/sub-layout";

const fetchSinglePost = async (pid) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${pid}`,
    {
      next: {
        revalidate: 1,
      },
    }
  ).then((res) => res.json());

  // If result is empty or {}, throw error
  if (!result || Object.keys(result).length === 0) {
    throw new Error("Post not found");
  }

  return result;
};

const Post = async ({ params }) => {
  const { pid } = params;
  const post = await fetchSinglePost(pid);

  return (
    <>
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
