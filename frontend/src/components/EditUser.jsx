import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import FormStyles from "./FormStyles";
import { updateUserSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { useEffect, useState } from "react";
import { getUser, updateUserInfo } from "../API";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id: userId } = useParams();
  console.log("EditUser", userId);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData = await getUser(userId);
        setUser(userData);
      } catch (err) {
        console.error("Error fetching user details:", err);
        alert("Could not fetch user details. Please try again.");
        //    navigate('/error-page'); // Redirect to an error page
      }
    };

    fetchUserDetails();
  }, [userId]);

  const onSubmit = async (values, actions) => {
    try {
      await updateUserInfo(userId, values);
      console.log("EditUser", userId, values);
      actions.resetForm();
      alert("User Info updated successfully!");
      navigate("/admin/customers");
    } catch (error) {
      console.error("Error Updating User Info:", error);
      alert("Error Updating User Info!");
    }
  };

  return (
    <section className="bg-neutral-800" style={FormStyles.app}>
      {user && (
        <Formik
          initialValues={{
            userName: user.userName,
            role: user.role,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            address: user.address,
            city: user.city,
            country: user.country,
            phoneNumber: user.phoneNumber,
            acceptedTos: false,
          }}
          validationSchema={updateUserSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <>
              <h1 className="text-white font-bold text-4xl mb-8">
                Edit User Info
              </h1>
              <Form style={FormStyles.form}>
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
                  id="city"
                  label="City"
                  name="city"
                  type="text"
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
                <button
                  type="submit"
                  style={{
                    ...FormStyles.button,
                    ...(isSubmitting ? FormStyles.buttonDisabled : {}),
                  }}
                >
                  Submit
                </button>
              </Form>
            </>
          )}
        </Formik>
      )}
    </section>
  );
};

export default EditUser;
