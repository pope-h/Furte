import { ErrorMessage, useField } from "formik";
import { Link } from "react-router-dom";

const CustomSignCheckbox = ({ label, showLink, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <input
            {...field}
            {...props}
            className={`${
              meta.touched && meta.error ? "border-coral-red" : ""
            }`}
          />
          <label htmlFor={field.name}>{label}</label>
        </div>
        {showLink && (
          <Link
            to="#"
            className="text-orange-700 hover:no-underline hover:text-orange-600"
          >
            Forgot Password?
          </Link>
        )}
      </div>
      <ErrorMessage name={field.name} />
    </div>
  );
};

export default CustomSignCheckbox;
