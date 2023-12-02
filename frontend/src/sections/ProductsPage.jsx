import { useEffect, useState } from "react";
import { fetchProducts } from "../API";
import ProductsPageCard from "../components/ProductsPageCard";
import { Link } from "react-router-dom";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const productsFromServer = await fetchProducts();
                setProducts(productsFromServer);
            } catch (err) {
                console.error('Error fetching products:', err);
            }
        };

        getProducts();
    });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
            <div key={product._id}>
                <Link to={`/products/details/${product._id}`} className="hover:no-underline">
                    <ProductsPageCard {...product} />
                </Link>
            </div>
        ))}
    </div>
  )
}

export default ProductsPage