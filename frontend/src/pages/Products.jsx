import { useEffect, useState } from "react";
import PagesCarousel from "../sections/PagesCarousel"
import ProductsPage from "../sections/ProductsPage"
import useStorePackage from "../store";
import { useNavigate } from "react-router-dom";

/**
 * Renders the Products page.
 * @returns {JSX.Element} The Products page component.
 */
const Products = () => {
  const { accessToken } = useStorePackage();
  console.log("Products accessToken", accessToken);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const carouselImage = [
    {
      src: "https://cdn.pixabay.com/photo/2015/06/27/16/34/wall-823611_640.jpg",
      title: "Products",
    },
    // Add more images as needed
  ];

  useEffect(() => {
    if (!accessToken) {
      navigate("/signin");
    }
  });

  /**
   * Handles the change of the selected category.
   * @param {string} category - The selected category.
   */
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <main className="max-sm:my-12 mt-2 mb-24 overflow-hidden">
      <section className="pb-12 mt-24 max-md:pt-12">
        <PagesCarousel imageInfo={carouselImage} />
      </section>
      <section className="max-sm:mx-8 mx-16">
        <div className="flex gap-3 pb-4 border-b-2 border-b-gray-300">
          <label
            htmlFor="category"
            className="text-lg font-extralight text-gray-500"
          >
            Filter Products:
          </label>
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
        <ProductsPage selectedCategory={selectedCategory} />
      </section>
    </main>
  );
}

export default Products