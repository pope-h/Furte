/**
 * Renders a grid of product categories with corresponding product cards.
 * @returns {JSX.Element} The rendered product category component.
 */
import { categories } from "../constants"
import ProductCard from "../components/ProductCard"

const ProductCategory = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="products">
        {categories.map((item) => (
            <div key={item.id}>
                <ProductCard
                    {...item}
                />
            </div>
        ))}
    </div>
  )
}

export default ProductCategory