import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../API";
import useStorePackage from "../store";

/**
 * Cart component displays the user's cart items and handles cart-related functionality.
 */
const Cart = () => {
  const store = useStorePackage();
  const cart = store.cart;
  const [productsFromServer, setProductsFromServer] = useState([]);
  const navigate = useNavigate();
  const token = store.accessToken();
  const addToCart = store.addToCart;
  const removeOneItemFromCart = store.removeOneItemFromCart;
  const removeProduct = store.removeProduct;
  const [wishlistStates, setWishlistStates] = useState([]);

  useEffect(() => {
    // Check if the user is logged in
    if (!token) {
      // Redirect the user to the login page or handle it as per your app's logic
      navigate("/signin");
      return;
    }

    // Check if the cart is empty and navigate to "/products" if true
    if (cart.length < 1) {
      navigate("/products");
      return;
    }

    /**
     * Fetches product details for each item in the cart.
     */
    const fetchProducts = async () => {
      try {
        const products = await Promise.all(
          cart.map((product) => getProduct(token, product._id))
        );
        setProductsFromServer(products);

        // Calculate total here, when product data is available
        const total = products.reduce(
          (acc, product, index) =>
            acc + product.price * cart[index]?.quantity || 0,
          0
        );
        console.log("Total:", total.toFixed(2));
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, [cart, token, navigate]);

  /**
   * Calculates the total price of all products in the cart.
   * @returns {number} The total price.
   */
  const calculateTotal = () => {
    if (!productsFromServer || productsFromServer.length === 0) {
      return 0;
    }

    return productsFromServer
      .reduce((total, product, index) => {
        const cartProduct = cart[index];

        if (cartProduct) {
          return total + product.price * cartProduct.quantity;
        }

        return total;
      }, 0)
      .toFixed(2);
  };

  // Calculate delivery dates
  const currentDate = new Date();
  const deliveryEndDate = new Date(currentDate);
  deliveryEndDate.setDate(deliveryEndDate.getDate() + 6);

  /**
   * Removes an item from the cart.
   * @param {string} productId - The ID of the product to remove.
   */
  const handleRemoveFromCart = (productId) => {
    removeOneItemFromCart(productId);
  };

  /**
   * Adds a product to the cart.
   * @param {Object} product - The product to add.
   */
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  /**
   * Removes a product from the cart.
   * @param {string} productId - The ID of the product to remove.
   */
  const handleRemoveProduct = (productId) => {
    alert("Product will be removed from cart");
    removeProduct(productId);
  };

  /**
   * Adds or Removes a product to the wishlist.
   */
  useEffect(() => {
    // Initialize wishlist states when the cart changes
    setWishlistStates(new Array(cart.length).fill(false));
  }, [cart]);

  const addToWishlist = (index) => {
    // Create a copy of the current wishlist states array
    const updatedWishlistStates = [...wishlistStates];

    if (!wishlistStates[index]) {
      // Add product to wishlist
      alert("Product will be added to wishlist");
    } else {
      // Remove product from wishlist
      alert("Product will be removed from wishlist");
    }

    // Toggle the heart icon for the specific item
    updatedWishlistStates[index] = !wishlistStates[index];

    // Update the wishlist states
    setWishlistStates(updatedWishlistStates);
  };


  return (
    <div className="padding flex flex-col my-12 gap-[100px] max-sm:gap-[50px]">
      <h1 className="font-palanquin text-center font-thin text-[55px] text-neutral-800">
        Your Cart
      </h1>
      <div className="flex items-start gap-16 max-lg:flex-col max-sm:items-center">
        <div className="flex lg:w-[70%] w-full flex-col max-sm:items-center gap-14 max-lg:max-h-80 max-lg:overflow-y-auto">
          {productsFromServer.map((productFromServer, index) => {
            const cartProduct = cart[index];

            return (
              <div
                key={productFromServer?._id}
                className="flex gap-4 max-sm:flex-col max-sm:items-center"
              >
                <img
                  src={productFromServer?.imageUrl}
                  alt={productFromServer?.name}
                  className="h-40 w-40 max-sm:w-full rounded-md object-cover my-1"
                />
                <div className="flex-1 flex flex-col justify-between max-sm:gap-3">
                  <div className="flex justify-between">
                    <h3 className="font-bold font-palanquin text-2xl max-sm:text-lg max-sm:font-bold">
                      {productFromServer?.name}
                    </h3>
                    <div className="flex gap-4 max-lg:gap-8 cursor-pointer">
                      <i
                        className={`bx ${
                          wishlistStates[index] ? "bxs-heart" : "bx-heart"
                        } bx-sm hover:text-coral-red`}
                        onClick={() => addToWishlist(index)}
                      ></i>
                      <i
                        className="bx bx-trash bx-sm hover:text-coral-red"
                        onClick={() =>
                          handleRemoveProduct(productFromServer._id)
                        }
                      ></i>
                    </div>
                  </div>
                  <div className="flex justify-between max-lg:flex-col max-lg:gap-3">
                    <div className="flex flex-col gap-2">
                      <p className="font-thin font-palanquin text-lg text-gray-400">
                        Delivery Time
                      </p>
                      <p>{`${currentDate.toDateString()} - ${deliveryEndDate.toDateString()}`}</p>
                    </div>
                    <div className="flex max-lg:justify-between gap-8">
                      <div className="flex flex-col gap-2">
                        <p className="font-thin font-palanquin text-lg text-gray-400">
                          Quantity
                        </p>
                        <div className="flex justify-between text-lg font-bold">
                          <button
                            onClick={() =>
                              handleRemoveFromCart(productFromServer._id)
                            }
                            className="hover:text-coral-red"
                          >
                            -
                          </button>
                          <p>{cartProduct?.quantity || 0}</p>
                          <button
                            onClick={() => handleAddToCart(productFromServer)}
                            className="hover:text-coral-red"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col md:text-right gap-2">
                        <p className="font-thin font-palanquin text-lg text-gray-400">
                          Total
                        </p>
                        <p>
                          $
                          {(
                            productFromServer.price * cartProduct?.quantity
                          ).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <aside className="flex flex-col w-[30%] lg:sticky lg:top-0 justify-between max-lg:w-full gap-4 max-lg:gap-8">
          <div className="flex justify-between">
            <p className="font-palanquin font-thin text-lg text-gray-600">
              Subtotal
            </p>
            <p className="font-palanquin font-thin text-lg text-gray-600">
              ${calculateTotal()}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-palanquin font-thin text-lg text-gray-600">
              Shipping
            </p>
            <p className="font-palanquin font-thin text-lg text-gray-600">
              Free
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-palanquin font-bold text-lg text-gray-600">
              Total
            </p>
            <p className="font-palanquin font-bold text-lg text-gray-600">
              ${calculateTotal()}
            </p>
          </div>
          <button
            className="bg-neutral-800 hover:bg-neutral-600 text-white-400 h-12 w-full"
            onClick={() => navigate("/checkout")}
          >
            CHECKOUT
          </button>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
