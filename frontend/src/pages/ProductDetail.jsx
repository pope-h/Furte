import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../API";
import useStorePackage from "../store";

const ProductDetail = () => {
    const { id: productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showNotification, setShowNotification] = useState(false);
    const token = useStorePackage().accessToken;
    const addToCart = useStorePackage().addToCart;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productFromServer = await getProduct(token, productId);
                setProduct(productFromServer);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId, token]);

    if (loading || !product) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
  }

    const handleAddToCart = () => {
        addToCart(product);
        setShowNotification(true);
    }

    const handleCloseNotification = () => {
        setShowNotification(false);
    };

  return (
    <main className="padding relative overflow-hidden">
      <div className="flex max-lg:flex-col gap-4 lg:h-[580px] max-lg:items-center pt-8 max-sm:pt-16">
        <div className="lg:w-3/5 max-lg:w-full max-lg:h-[500px]">
          <img
            key={product._id}
            src={product.imageUrl}
            alt={product.name}
            className="object-fill h-full w-full rounded-2xl"
          />
        </div>
        <section className="lg:pl-8 flex flex-col gap-4 max-lg:gap-2 lg:w-2/5 max-lg:w-[85%] justify-center items-center">
          <h2 className="font-palanquin xl:text-4xl md:text-4xl lg:text-[33px] max-sm:text[35px] text-neutral-800 font-semibold">
            {product.name}
          </h2>
          <p className="font-semibold text-2xl text-neutral-500 mb-8">
            {product.category}
          </p>
          <p className="leading-normal font-montserrat text-neutral-800">
            {product.description}
          </p>
          <p className="text-neutral-800 mt-8 font-medium">${product.price}</p>
          <button
            className="bg-neutral-800 hover:bg-neutral-600 text-white-400 h-12 w-fit px-12"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
        </section>
      </div>

      {showNotification && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50 w-full h-full">
          <i
            className="bx bx-x absolute top-0 right-0 m-4 text-white-400 text-4xl cursor-pointer"
            onClick={handleCloseNotification}
          ></i>
          <div className="bg-white p-16 shadow-md w-96 h-96 flex flex-col gap-4 items-center justify-center">
            <p className="mb-12 w-[90%] text-center text-xl font-thin leading-normal">
              The product has been successfully added to your cart.
            </p>
            <Link
              to="/products"
              className="bg-white-400 hover:bg-neutral-800 border-y-2 border-neutral-800 hover:text-white-400 text-neutral-800 h-12 hover:no-underline pt-[3%] w-full text-center"
            >
              CONTINUE SHOPPING
            </Link>
            <Link
              to="/cart"
              className="bg-neutral-800 hover:bg-neutral-600 text-white-400 h-12 hover:no-underline pt-[11px] w-full text-center"
            >
              CHECKOUT
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default ProductDetail