import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react/cjs/react.development";
import MainLayout from "../../components/MainLayout";
const Post = ({ post: serverPost }) => {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();
  useEffect(() => {
    const load = async () => {
      const responce = await fetch(
        `http://localhost:4200/posts/${router.query.id}`
      );
      const data = await responce.json();
      setPost(data);
    };
    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div>
        <h1>{post.text}</h1>
        <hr />
        <p>{post.body}</p>
        <Link href={"/posts"}>
          <a>Back to all Posts</a>
        </Link>
      </div>
    </MainLayout>
  );
};
export default Post;

Post.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { post: null };
  }
  const responce = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await responce.json();
  return {
    post,
  };
};
