import { Link, useNavigate } from "react-router-dom";
import { background } from "../assets/images";
import { Form, Formik } from "formik";
import CustomSignInput from "../components/CustomSignInput";
import { signUpSchema } from "../schemas";
import CustomSignCheckbox from "../components/CustomSignCheckbox";
import { signUpUser } from "../API";
import useStorePackage from "../store";

const SignIn = () => {
  const navigate = useNavigate();
  const token = useStorePackage().accessToken;

  const onSubmit = async (values, actions) => {
    try {
      const res = await signUpUser(token, values);
      console.log(res);
      if (res && res.msg === "User registered successfully") {
        console.log("Sign up successful:", res);
        navigate("/signin");
      } else {
        console.error("Error signing up:", res?.msg || "Unknown error");
        actions.setSubmitting(false);
      }
    } catch (error) {
      console.error("Error signing in:", error);
      alert("Error signing in!");
      actions.setSubmitting(false);
    }
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
                <i className="bx bxs-user absolute top-4 right-4"></i>
              </div>
              <div className="relative">
                <CustomSignInput
                  label="Email"
                  name="email"
                  type="email"
                  id="email"
                />
                <i className="bx bxs-envelope absolute top-4 right-4"></i>
              </div>
              <div className="relative">
                <CustomSignInput
                  label="Password"
                  name="password"
                  type="password"
                  id="password"
                />
                <i className="bx bxs-lock-alt absolute top-4 right-4"></i>
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
