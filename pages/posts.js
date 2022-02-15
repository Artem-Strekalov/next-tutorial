import MainLayout from "../components/MainLayout";
import { useState, useEffect } from "react";
import Link from "next/link";
const Posts = ({ posts }) => {
  return (
    <MainLayout>
      <h1>Posts Page</h1>
      <p>lorem disdns dosbhd dsbfdushbn sdiufusdbfnd</p>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                <a>{post.text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </MainLayout>
  );
};
Posts.getInitialProps = async () => {
  const responce = await fetch("http://localhost:4200/posts");
  const posts = await responce.json();
  return {
    posts,
  };
};

export default Posts;
