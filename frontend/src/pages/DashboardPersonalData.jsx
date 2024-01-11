import { Form, Formik } from "formik";
import CustomInput from "../components/CustomInput";
import { personalDataSchema } from "../schemas";
import { useEffect, useState } from "react";
import useStorePackage from "../store";
import handleApiError from "../API/handleApiError";
import axios from "../API/axios";

/**
 * DashboardPersonalData component displays and allows users to update their personal data.
 * It fetches user details from the API and renders a form for updating the user's information.
 */
const DashboardPersonalData = () => {
  const store = useStorePackage();
  const userId = store.userId;
  console.log("DashboardPersonalData", userId);
  const [user, setUser] = useState(null);
  const token = store.accessToken;

  useEffect(() => {
    /**
     * Fetches the user details from the API and sets the user state.
     * If there's an error, it displays an alert message.
     */
    const fetchUserDetails = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(`/users/${userId}`, config);
        const userData = await handleApiError(response);
        setUser(userData);
        console.log("DashboardPersonalData", userData);
      } catch (err) {
        console.error("Error fetching user details:", err);
        alert("Could not fetch user details. Please try again.");
        //    navigate('/error-page'); // Redirect to an error page
      }
    };

    fetchUserDetails();
  }, [userId, token]);

  /**
   * Handles the form submission and updates the user's information.
   * If there's an error, it displays an alert message.
   * @param {Object} values - The form values containing the updated user information.
   * @param {Object} actions - The formik actions object.
   */
  const onSubmit = async (values, actions) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      console.log("DashboardPersonalData", userId, values);
      console.log("entering axios.put")
      const response = await axios.put(
        "/users",
        { ...values, id: userId },
        config
      );
      console.log("exiting axios.put")
      await handleApiError(response);
      console.log("DashboardPersonalData", userId, values);
      alert("User Info updated successfully!");
    } catch (error) {
      console.error("Error Updating User Info:", error);
      alert("Error Updating User Info!");
      actions.setSubmitting(false);
    }
  };

  return (
    <>
      <h2 className="font-semibold text-xl font-palanquin border-b-2 pb-2 border-b-gray-300">
        Your Data
      </h2>
      <div className="flex max-md:flex-col-reverse max-md:gap-10 gap-20 pt-4">
        <div className="w-1/2 max-md:w-full">
          {user && (
            <Formik
              initialValues={{
                userName: user.userName || "",
                firstName: user.firstName || "",
                lastName: user.lastName || "",
              }}
              validationSchema={personalDataSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <div>
                  <Form>
                    <CustomInput
                      label="User Name"
                      name="userName"
                      type="userName"
                      id="userName"
                    />
                    <CustomInput
                      label="First Name"
                      name="firstName"
                      type="firstName"
                      id="firstName"
                    />
                    <CustomInput
                      label="Last Name"
                      name="lastName"
                      type="lastName"
                      id="lastName"
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
        {user && (
          <div className="flex flex-col w-1/2 max-md:w-full gap-8 pt-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-thin text-gray-400">
                Your E-Mail address
              </h3>
              <p>{user.email}</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-thin text-gray-400">Password</h3>
              <p className="px-1">************</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardPersonalData;
