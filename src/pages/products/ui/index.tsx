import { PAGE_NAMES } from "@shared/config";
import { PageMeta } from "@shared/ui/page-meta";
import { Header } from "@widgets/header";
import { Posts } from "@widgets/posts";
import { Link } from "react-router-dom";

export const ProductsPage = () => {
  return (
    <>
      <PageMeta title={PAGE_NAMES.HOME} />
      <Header />
      <main className="container py-4">
        <h1>Products Page</h1>
        <Link to={"/product/123"}>To prod</Link> <br />
        <Link to="prod">404</Link>
        <Posts />
      </main>
    </>
  );
};
