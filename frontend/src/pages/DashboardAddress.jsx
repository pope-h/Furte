import { Form, Formik } from "formik";
import DashboardInput from "../components/DashboardInput";
import { shippingAddressSchema } from "../schemas";
import { useEffect, useState } from "react";
import useStorePackage from "../store";
import { getUser, updateUserInfo } from "../API";

const DashboardAddress = () => {
  const store = useStorePackage();
  const userId = store.userId;
  console.log("DashboardAddress", userId);
  const [user, setUser] = useState(null);
  const token = store.accessToken;

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData = await getUser(token, userId);
        setUser(userData);
        console.log("DashboardAddress", userData);
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
      await updateUserInfo(token, userId, values);
      console.log("DashboardPersonalData", userId, values);
      alert("User Info updated successfully!");
      actions.resetForm();
      setUser((prevUser) => ({ ...prevUser, ...values }));
    } catch (error) {
      console.error("Error Updating User Info:", error);
      alert("Error Updating User Info!");
      actions.setSubmitting(false);
    }
  };

  return (
    <>
      <h2 className="font-semibold text-xl font-palanquin border-b-2 pb-2 border-b-gray-300">
        Your Address
      </h2>
      <div className="flex max-md:flex-col gap-20 max-md:gap-10 pt-4">
        <div className="w-1/2 max-md:w-full">
          {user && (
            <div className="flex flex-col gap-2 pt-6 border-b-2 border-b-gray-300 pb-4">
              <h3 className="text-xl font-semibold">Your Shipping Address</h3>
              <div className="flex gap-1 text-lg border-t-2 border-t-gray-300 pt-4">
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>
              </div>
              <p className="text-lg">{user.country}</p>
              <p className="text-lg">{user.address}</p>
              <p className="text-lg">{user.phoneNumber}</p>
            </div>
          )}
        </div>
        <div className="w-1/2 max-md:w-full">
          {user && (
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                country: "",
                address: "",
                phoneNumber: "",
              }}
              validationSchema={shippingAddressSchema}
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
                    <button
                      className={`w-[60%] bg-neutral-800 hover:bg-neutral-600 text-white h-12 ${
                        isSubmitting && "opacity-50 cursor-not-allowed"
                      }`}
                      type="submit"
                    >
                      SAVE
                    </button>
                  </Form>
                </div>
              )}
            </Formik>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardAddress;
