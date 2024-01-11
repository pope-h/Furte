/**
 * Sign In page component.
 * Renders a sign in form for users to enter their email and password.
 * Handles form submission and authentication.
 */
import { Link, useNavigate } from "react-router-dom";
import { background } from "../assets/images";
import { Form, Formik } from "formik";
import CustomSignInput from "../components/CustomSignInput";
import { signInSchema } from "../schemas";
import CustomSignCheckbox from "../components/CustomSignCheckbox";
import useStorePackage from "../store";
import { useState } from "react";
import axios from "../API/axios";
import handleApiError from "../API/handleApiError";

/**
 * Sign In page component.
 * Renders a sign in form for users to enter their email and password.
 * Handles form submission and authentication.
 *
 * @returns {JSX.Element} The Sign In page component.
 */
const SignIn = () => {
  const { login } = useStorePackage();
  const navigate = useNavigate();
  const token = useStorePackage().accessToken;

  // State to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Handles form submission.
   * Authenticates the user by calling the signInUser API function.
   * If authentication is successful, redirects the user to the appropriate page based on their role.
   * If authentication fails, displays an error message.
   *
   * @param {Object} values - The form values containing email and password.
   * @param {Object} actions - The formik actions object.
   * @returns {Promise<void>} A promise that resolves when the form submission is complete.
   */
  const onSubmit = async (values, actions) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      };
      const response = await axios.post("/signin", values, config);
      const data = await handleApiError(response);

      login(data.accessToken, data.role, data.userName, data.userId);
      console.log("SignIn", data);
      if (data.role === "Admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      alert("Error signing in!", error);
      actions.setSubmitting(false);
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div
      className="text-white-400 h-[100vh] overflow-hidden flex justify-center items-center bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        validationSchema={signInSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <div className="bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
            <h1 className="text-4xl text-white-400 font-bold text-center mb-8">
              Sign In
            </h1>
            <Form>
              <div className="relative">
                <CustomSignInput
                  label="Email"
                  name="email"
                  type="email"
                  id="email"
                />
                <i className="bx bxs-envelope absolute top-3 right-4"></i>
              </div>
              <div className="relative">
                <CustomSignInput
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                />
                <i
                  className={`bx ${
                    showPassword ? "bxs-show" : "bxs-hide"
                  } absolute top-3 right-4 cursor-pointer`}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>

              <CustomSignCheckbox
                label="Remember me"
                name="rememberMe"
                type="checkbox"
                id="rememberMe"
                showLink={true}
              />
              <button
                className={`w-full mb-4 text-[18px] mt-6 rounded-full bg-orange-700 text-white-400 hover:bg-orange-600 py-2 transition-colors duration-300 ${
                  isSubmitting && "opacity-50 cursor-not-allowed"
                }`}
                type="submit"
              >
                Sign In
              </button>
              <div>
                <span className="m-4">
                  {"Don't have an account? "}
                  <Link
                    className="text-orange-700 hover:no-underline hover:text-orange-600"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </span>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
