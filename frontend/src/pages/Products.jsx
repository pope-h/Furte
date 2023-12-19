import { useEffect, useState } from "react";
import ProductsCarousel from "../sections/ProductsCarousel"
import ProductsPage from "../sections/ProductsPage"
import useStorePackage from "../store";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { accessToken } = useStorePackage();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (!accessToken) {
      navigate("/signin");
    }
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <main className="max-sm:my-12 mt-2 mb-24">
      <section className="pb-12 padding-t max-md:pt-12">
        <ProductsCarousel />
      </section>
      <section className="max-sm:mx-8 mx-16">
        <div className="flex gap-3 pb-4 border-b-2 border-b-gray-300">
          <label htmlFor="category" className="text-lg font-extralight text-gray-500">Filter Products:</label>
          <select
            id="category"
            name="category"
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="text-lg"
          >
            <option value="">All Categories</option>
            <option value="livingroom">Living Room</option>
            <option value="bedroom">Bedroom</option>
            <option value="dining">Dining Room</option>
            <option value="kitchen">Kitchen</option>
            <option value="workplace">Work Place</option>
            <option value="outdoor">Outdoor</option>
            <option value="other">Other</option>
          </select>
        </div>
        <ProductsPage selectedCategory={selectedCategory}  />
      </section>
    </main>
  );
}

export default Products