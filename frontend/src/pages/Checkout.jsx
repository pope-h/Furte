import { Form, Formik } from "formik";
import DashboardInput from "../components/DashboardInput";
import { checkoutSchema } from "../schemas";
import { useEffect, useState } from "react";
import useStorePackage from "../store";
import { getUser } from "../API";
import { getProduct } from "../API";

const Checkout = () => {
  const store = useStorePackage();
  const cart = store.cart;
  const [productsFromServer, setProductsFromServer] = useState([]);
  const userId = store.userId;
  console.log("CheckoutId", userId);
  const [user, setUser] = useState(null);
  const token = store.accessToken;
  const [invalidPaymentMethod, setInvalidPaymentMethod] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData = await getUser(token, userId);
        setUser(userData);
        console.log("CheckoutData", userData);
      } catch (err) {
        console.error("Error fetching user details:", err);
        alert("Could not fetch user details. Please try again.");
        //    navigate('/error-page'); // Redirect to an error page
      }
    };

    fetchUserDetails();
  }, [userId, token]);

  const onSubmit = async (values, actions) => {
    try {
      //The below is commented ot so the form wouldn't submit
      //   await updateUserInfo(token, userId, values);
      //   alert("User Info updated successfully!");
      //   setUser((prevUser) => ({ ...prevUser, ...values }));

      // Check if there are no available payment methods and display the message
      if (!hasAvailablePaymentMethods()) {
        setInvalidPaymentMethod(true);
      }
    } catch (error) {
      console.error("Error Placing Order:", error);
      alert("Error Placing Order!");
      actions.setSubmitting(false);
    }
  };

  // Function to check if there are available payment methods
  const hasAvailablePaymentMethods = () => {
    // You can implement your logic here to check for available payment methods
    // For now, let's assume there are no available payment methods
    return false;
  };

  useEffect(() => {
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

  return (
    <div className="padding flex gap-16 max-lg:flex-col-reverse max-md:items-center">
      <div className="flex flex-col gap-8 max-md:gap-10 pt-4 w-7/12 max-lg:w-full">
        <h3 className="text-xl font-semibold max-lg:text-center">
          Customer Information
        </h3>
        {user && (
          <Formik
            initialValues={{
              firstName: user.firstName || "",
              lastName: user.lastName || "",
              email: user.email || "",
              country: user.country || "",
              address: user.address || "",
              phoneNumber: user.phoneNumber || "",
            }}
            validationSchema={checkoutSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <div>
                <Form>
                  <DashboardInput
                    label="First Name"
                    name="firstName"
                    type="firstName"
                    id="firstName"
                  />
                  <DashboardInput
                    label="Last Name"
                    name="lastName"
                    type="lastName"
                    id="lastName"
                  />
                  <DashboardInput
                    label="Email"
                    name="email"
                    type="email"
                    id="email"
                    disabled
                  />
                  <DashboardInput
                    label="Country"
                    name="country"
                    type="country"
                    id="country"
                  />
                  <DashboardInput
                    label="Address"
                    name="address"
                    type="address"
                    as="textarea"
                    id="address"
                  />
                  <DashboardInput
                    label="Phone Number"
                    name="phoneNumber"
                    type="phoneNumber"
                    id="phoneNumber"
                  />
                  <DashboardInput
                    label="Notes about your order, e.g. special notes for delivery."
                    name="notes"
                    type="notes"
                    as="textarea"
                    id="notes"
                  />
                  <DashboardInput
                    label="Have a coupon?"
                    name="coupon"
                    type="coupon"
                    id="coupon"
                  />
                  <h3 className="text-xl pt-4 font-semibold">Payment</h3>
                  <p className="border-b-4 mt-8 ml-4 border-gray-500"></p>
                  <div className="flex pt-4 pl-8 gap-2">
                    <i className="bx bx-notification bx-sm"></i>
                    <p className="lg:pr-28 max-md:pr-4 leading-6 text-gray-500">
                      Sorry, it seems that there are no available payment
                      methods. Please contact us if you require assistance or
                      wish to make alternate arrangements.
                    </p>
                  </div>
                  {invalidPaymentMethod && (
                    <div className="flex gap-2 px-8 pt-2 border-t-2 mt-4 border-red-500">
                      <i className="bx bxs-error-circle bx-sm text-red-500"></i>
                      <p className="pr-28 text-lg font-montserrat">
                        Invalid payment method.
                      </p>
                    </div>
                  )}
                  <button
                    className={`w-[60%] mt-8 max-md:w-full bg-neutral-800 hover:bg-neutral-600 text-white h-12 ${
                      isSubmitting && "opacity-50 cursor-not-allowed"
                    }`}
                    type="submit"
                  >
                    Place Order ${calculateTotal()}
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        )}
      </div>
      <aside className="flex flex-col gap-8 pt-4 max-lg:pt-16 max-lg:w-full">
        <h3 className="text-xl font-semibold pb-5 max-lg:text-center">
          Order Summary
        </h3>
        <div className="flex flex-col gap-4 max-md:gap-2 max-h-72 overflow-y-auto">
          {productsFromServer.map((productFromServer, index) => {
            const cartProduct = cart[index]; // Get the corresponding product from the cart

            return (
              <div
                key={productFromServer?._id}
                className="flex gap-4 max-md:gap-2"
              >
                <img
                  src={productFromServer?.imageUrl}
                  alt={productFromServer?.name}
                  className="h-20 w-20 rounded-md object-cover my-1"
                />
                <div className="flex-1 flex flex-col justify-between max-md:gap-2">
                  <h3 className="font-semibold font-palanquin text-lg">
                    {productFromServer?.name}
                  </h3>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="font-thin font-palanquin text-base text-gray-400">
                        Quantity
                      </p>
                      <p className="text-sm font-medium">
                        {cartProduct.quantity}
                      </p>
                    </div>
                    <div className="flex flex-col md:text-right gap-1">
                      <p className="font-thin font-palanquin text-base text-gray-400">
                        Subtotal
                      </p>
                      <p>
                        $
                        {(
                          productFromServer.price * cartProduct.quantity
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4">
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
        </div>
      </aside>
    </div>
  );
};

export default Checkout;
