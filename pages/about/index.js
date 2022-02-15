import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../components/MainLayout";

const About = () => {
  const router = useRouter();
  return (
    <MainLayout title={'about'}>
      <h1>About page</h1>
      <button onClick={() => router.push("/")}>Go back to home</button>
    </MainLayout>
  );
};
export default About;
