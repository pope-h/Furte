import { Link, useNavigate } from "react-router-dom";
import { background } from "../assets/images";
import { Form, Formik } from "formik";
import CustomSignInput from "../components/CustomSignInput";
import { signUpSchema } from "../schemas";
import CustomSignCheckbox from "../components/CustomSignCheckbox";
import useStorePackage from "../store";
import { useState } from "react";
import axios from "../API/axios";
import handleApiError from "../API/handleApiError";

/**
 * Component for the Sign Up page.
 * Allows users to sign up by providing their username, email, password, and agreeing to terms and conditions.
 */
const SignIn = () => {
  const navigate = useNavigate();
  const token = useStorePackage().accessToken;

  // State to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Handles form submission when the user clicks the "Sign Up" button.
   * @param {Object} values - The form values containing the username, email, password, and agreeCheckbox.
   * @param {Object} actions - The formik actions object.
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
      const response = await axios.post("/signup", values, config);
      const res = await handleApiError(response);
       //console.log(res);
      if (res && res.msg === "User registered successfully") {
        alert("Sign up successful!");
         //console.log("Sign up successful:", res);
        navigate("/signin");
      } else {
        console.error("Error signing up:", res?.msg || "Unknown error");
        actions.setSubmitting(false);
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Error signing up!", error);
      actions.setSubmitting(false);
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div
      className="text-white-400 h-[100vh] flex justify-center items-center bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
          agreeCheckbox: false,
        }}
        validationSchema={signUpSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <div className="bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
            <h1 className="text-4xl text-white-400 font-bold text-center mb-8">
              Sign Up
            </h1>
            <Form>
              <div className="relative">
                <CustomSignInput
                  label="Username"
                  name="userName"
                  type="username"
                  id="userName"
                />
                <i className="bx bxs-user absolute top-3 right-4"></i>
              </div>
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
                label="I agree NOT to terms & conditions."
                name="agreeCheckbox"
                type="checkbox"
                id="agreeCheckbox"
                showLink={false}
              />
              <button
                className={`w-full mb-4 text-[18px] mt-6 rounded-full bg-orange-700 text-white-400 hover:bg-orange-600 py-2 transition-colors duration-300 ${
                  isSubmitting && "opacity-50 cursor-not-allowed"
                }`}
                type="submit"
              >
                Sign Up
              </button>
              <div>
                <span className="m-4">
                  {"Already have an account? "}
                  <Link
                    className="text-orange-700 hover:no-underline hover:text-orange-600"
                    to="/signin"
                  >
                    Sign In
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
