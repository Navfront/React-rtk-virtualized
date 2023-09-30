import { Header } from "@src/widgets/header";
import { Link } from "react-router-dom";

export const ProductsPage = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Products Page</h1>
        <Link to={"/product/123"}>To prod</Link>
        <Link to="prod">404</Link>
      </main>
    </>
  );
};
