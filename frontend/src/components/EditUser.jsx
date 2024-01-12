/**
 * EditUser component for editing user information.
 * @component
 * @example
 * return (
 *   <EditUser />
 * )
 */
import { Form, Formik } from "formik";
import { updateUserSchema } from "../schemas";
import CustomCheckbox from "./CustomCheckbox";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useStorePackage from "../store";
import CustomSelect from "./CustomSelect";
import CustomInput from "./CustomInput";
import axios from "../API/axios";
import handleApiError from "../API/handleApiError";

const EditUser = () => {
  const { id: userId } = useParams();
   //console.log("EditUser", userId);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = useStorePackage().accessToken;

  useEffect(() => {
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
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.put(
        "/users",
        { ...values, id: userId },
        config
      );
      await handleApiError(response);
      actions.resetForm();
      alert("User Info updated successfully!");
      navigate("/admin/customers");
    } catch (error) {
      console.error("Error Updating User Info:", error);
      alert("Error Updating User Info!");
    }
  };

  return (
    <section className="mx-16">
      {user && (
        <Formik
          initialValues={{
            userName: user.userName,
            role: user.role,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            address: user.address,
            country: user.country,
            phoneNumber: user.phoneNumber,
            acceptedTos: false,
          }}
          validationSchema={updateUserSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <>
              <h1 className="font-bold text-4xl mb-8 text-center">
                Edit User Info
              </h1>
              <Form>
                <CustomSelect id="role" label="Role" name="role">
                  <option value="">{user.role}</option>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </CustomSelect>
                <CustomInput
                  id="userName"
                  label="Username"
                  name="userName"
                  type="text"
                  autoComplete="on"
                />
                <CustomInput
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  type="text"
                  autoComplete="on"
                />
                <CustomInput
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  type="text"
                  autoComplete="on"
                />
                <CustomInput
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="on"
                />
                <CustomInput
                  id="address"
                  label="Address"
                  name="address"
                  as="textarea"
                  autoComplete="on"
                />
                <CustomInput
                  id="country"
                  label="Country"
                  name="country"
                  type="text"
                  autoComplete="on"
                />
                <CustomInput
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  type="number"
                  autoComplete="on"
                />
                <CustomCheckbox type="checkbox" name="acceptedTos" />
                <div className="flex justify-center mb-8">
                  <button
                    className={`lg:w-[45%] w-1/3 mt-8 max-md:w-full bg-neutral-800 hover:bg-neutral-600 text-white h-12 ${
                      isSubmitting && "opacity-50 cursor-not-allowed"
                    }`}
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </div>
              </Form>
            </>
          )}
        </Formik>
      )}
    </section>
  );
};

export default EditUser;
