import { ErrorMessage, useField } from "formik";
import { Link } from "react-router-dom";

/**
 * CustomSignCheckbox component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the checkbox.
 * @param {boolean} props.showLink - Determines whether to show the "Forgot Password?" link.
 * @returns {JSX.Element} The rendered CustomSignCheckbox component.
 */
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
      <div className="text-[#fc8181] text-sm text-left mt-1">
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
};

export default CustomSignCheckbox;
