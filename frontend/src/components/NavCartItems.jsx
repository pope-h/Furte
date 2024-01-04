import { useEffect, useState } from "react";
import { getProduct } from "../API";
import useStorePackage from "../store";

/**
 * Renders the cart items in the navigation bar.
 * @returns {JSX.Element} The component JSX element.
 */
const NavCartItems = () => {
  const store = useStorePackage();
  const cart = store.cart;
  const [productsFromServer, setProductsFromServer] = useState([]);
  const token = store.accessToken;

  useEffect(() => {
    /**
     * Fetches the product details from the server for each item in the cart.
     * @returns {Promise<void>} A promise that resolves when all products are fetched.
     */
    const fetchProducts = async () => {
      try {
        const products = await Promise.all(
          cart.map((product) => getProduct(token, product._id))
        );
        setProductsFromServer(products);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, [cart, token]);

  return (
    <div className="max-h-60 overflow-y-auto flex flex-col gap-2">
      {productsFromServer.map((productFromServer, index) => {
        const cartProduct = cart[index]; // Get the corresponding product from the cart

        return (
          <div
            key={productFromServer?._id}
            className="flex-1 flex gap-4 max-sm:flex-col max-sm:items-center"
          >
            <img
              src={productFromServer?.imageUrl}
              alt={productFromServer?.name}
              className="h-20 w-20 rounded-md object-cover my-1"
            />
            <div className="flex-1 flex flex-col justify-between max-sm:gap-8">
              <h3 className="font-semibold font-palanquin text-lg">
                {productFromServer?.name}
              </h3>
              <div className="flex justify-between max-sm:flex-col max-sm:gap-8">
                <div className="flex flex-col gap-1">
                  <p className="font-thin font-palanquin text-base text-gray-400">
                    Quantity
                  </p>
                  <p className="text-sm font-medium">{cartProduct.quantity}</p>
                </div>
                <div className="flex flex-col md:text-right gap-1">
                  <p className="font-thin font-palanquin text-base text-gray-400">
                    Total
                  </p>
                  <p>
                    $
                    {(productFromServer.price * cartProduct.quantity).toFixed(
                      2
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NavCartItems;
