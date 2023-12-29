import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../API";
import useStorePackage from "../store";

const Cart = () => {
  const store = useStorePackage();
  const cart = store.cart;
  const [productsFromServer, setProductsFromServer] = useState([]);
  const navigate = useNavigate();
  const token = store.accessToken;
  //   const cartCount = store.cartCount;
  const addToCart = store.addToCart;
  const removeOneItemFromCart = store.removeOneItemFromCart;
  const removeProduct = store.removeProduct;

  useEffect(() => {
    // Check if the cart is empty and navigate to "/products" if true
    if (cart.length < 1) {
      navigate("/products");
      return;
    }

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
  // const deliveryStartDate = new Date(currentDate);
  const deliveryEndDate = new Date(currentDate);
  deliveryEndDate.setDate(deliveryEndDate.getDate() + 6);

  const handleRemoveFromCart = (productId) => {
    removeOneItemFromCart(productId);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleRemoveProduct = (productId) => {
    alert("Product will be removed from cart");
    removeProduct(productId);
  };

  const addToWishlist = () => {
    // Add product to wishlist
    alert("Product will be added to wishlist");
  };

  return (
    <div className="padding flex flex-col my-12 gap-[100px] max-sm:gap-[50px]">
      <h1 className="font-palanquin text-center font-thin text-[55px] text-neutral-800">
        Your Cart
      </h1>
      <div className="flex items-start gap-16 max-lg:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-between flex-col max-sm:items-center gap-14">
          {productsFromServer.map((productFromServer, index) => {
            const cartProduct = cart[index];

            return (
              <div
                key={productFromServer?._id}
                className="flex gap-8 max-sm:flex-col max-sm:items-center"
              >
                <img
                  src={productFromServer?.imageUrl}
                  alt={productFromServer?.name}
                  className="h-40 w-40 rounded-md object-cover my-1"
                />
                <div className="flex-1 flex flex-col justify-between max-sm:gap-8">
                  <div className="flex justify-between">
                    <h3 className="font-bold font-palanquin text-2xl">
                      {productFromServer?.name}
                    </h3>
                    <div className="flex gap-4 cursor-pointer">
                      <i
                        className="bx bx-heart bx-sm hover:text-coral-red"
                        onClick={addToWishlist}
                      ></i>
                      <i
                        className="bx bx-trash bx-sm hover:text-coral-red"
                        onClick={() =>
                          handleRemoveProduct(productFromServer._id)
                        }
                      ></i>
                    </div>
                  </div>
                  <div className="flex justify-between max-sm:flex-col max-sm:gap-8">
                    <div className="flex flex-col gap-2">
                      <p className="font-thin font-palanquin text-lg text-gray-400">
                        Delivery Time
                      </p>
                      <p>{`${currentDate.toDateString()} - ${deliveryEndDate.toDateString()}`}</p>
                    </div>
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
            );
          })}
        </div>
        <aside className="flex flex-col sticky top-0 justify-between gap-4 max-lg:gap-8">
          <div className="flex justify-between gap-44">
            <p className="font-palanquin font-thin text-lg text-gray-600">
              Subtotal
            </p>
            <p className="font-palanquin font-thin text-lg text-gray-600">
              ${calculateTotal()}
            </p>
          </div>
          <div className="flex justify-between gap-44">
            <p className="font-palanquin font-thin text-lg text-gray-600">
              Shipping
            </p>
            <p className="font-palanquin font-thin text-lg text-gray-600">
              Free
            </p>
          </div>
          <div className="flex justify-between gap-44">
            <p className="font-palanquin font-bold text-lg text-gray-600">
              Total
            </p>
            <p className="font-palanquin font-bold text-lg text-gray-600">
              ${calculateTotal()}
            </p>
          </div>
          <button className="bg-neutral-800 hover:bg-neutral-600 text-white-400 h-12 w-full">
            CHECKOUT
          </button>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
