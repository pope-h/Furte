import { Form, Formik } from "formik";
import CustomInput from "../components/CustomInput";
import { personalDataSchema } from "../schemas";
import { useEffect, useState } from "react";
import useStorePackage from "../store";
import { getUser, updateUserInfo } from "../API";

const DashboardPersonalData = () => {
  const store = useStorePackage();
  const userId = store.userId;
  console.log("DashboardPersonalData", userId);
  const [user, setUser] = useState(null);
  const token = store.accessToken;

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData = await getUser(token, userId);
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

  const onSubmit = async (values, actions) => {
    try {
      await updateUserInfo(token, userId, values);
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
                      type="username"
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
