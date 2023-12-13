import { useEffect } from "react";
import ProductsCarousel from "../sections/ProductsCarousel"
import ProductsPage from "../sections/ProductsPage"
import useStorePackage from "../store";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { accessToken } = useStorePackage();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/signin");
    }
  });

  return (
    <main className="max-sm:my-12 mt-2 mb-24">
      <section className="pb-12 padding-t max-md:pt-12">
        <ProductsCarousel />
      </section>
      <section className="max-sm:mx-8 mx-16">
        <ProductsPage />
      </section>
    </main>
  )
}

export default Products