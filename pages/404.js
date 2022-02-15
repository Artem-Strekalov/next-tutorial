import Link from "next/link";
import MainLayout from "../components/MainLayout";

const ErrorPage = () => {
  return (
    <MainLayout>
      <h1>Error 404</h1>
      <p>
        Please
        <Link href={"/"}>
          <a> go back </a>
        </Link>
        to home
      </p>
    </MainLayout>
  );
};
export default ErrorPage;
