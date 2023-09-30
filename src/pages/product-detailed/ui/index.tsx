import { Header } from "@widgets/header";
import { useParams } from "react-router-dom";

export const ProductDetailedPage = () => {
  const { productId } = useParams();

  if (!productId) {
    throw new Error("Product ID is undefined");
  }

  return (
    <>
      <Header />
      <main className="container py-4">Product detailed page: {productId}</main>
    </>
  );
};
