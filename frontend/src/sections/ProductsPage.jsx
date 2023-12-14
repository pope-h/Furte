import { useEffect, useState } from "react";
import { fetchProducts } from "../API";
import ProductsPageCard from "../components/ProductsPageCard";
import { Link } from "react-router-dom";
import useStorePackage from "../store";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = useStorePackage().accessToken;

    useEffect(() => {
        const getProducts = async () => {
            try {
                const productsFromServer = await fetchProducts(token);
                setProducts(productsFromServer);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching products:', err);
                setLoading(false);
            }
        };

        getProducts();
    }, [token]);

  return (
    <>
        {loading ? (
          // Show loading spinner while data is being fetched
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div key={product._id}>
                        <Link to={`/products/details/${product._id}`} className="hover:no-underline">
                            <ProductsPageCard {...product} />
                        </Link>
                    </div>
                ))}
            </div>
        )}
    </>
  )
}

export default ProductsPage