import Link from "next/link";
import MainLayout from "../components/MainLayout";
const Index = () => {
  return (
    <MainLayout title={'Home'}>
      <h1>Hello! I'am main page</h1>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </MainLayout>
  );
};
export default Index;
