import { categories } from "../constants"
import ProductCard from "../components/ProductCard"

const ProductCategory = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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