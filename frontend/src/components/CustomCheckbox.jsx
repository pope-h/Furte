import { ErrorMessage, useField } from "formik";

/**
 * Custom Checkbox component.
 *
 * @component
 * @param {Object} props - The props object.
 * @returns {JSX.Element} The JSX element representing the Custom Checkbox.
 */
const CustomCheckbox = ({ ...props }) => {
    const [field, meta] = useField(props)
    
  return (
    <>
      <div className="flex justify-start items-center mt-4">
        <input
          {...field}
          {...props}
          className={`w-fit mr-2 transform scale-125 ${
            meta.touched && meta.error ? "border-b-[#fc8181]" : ""
          }`}
        />
        <span className="text-black">
          I understand this activity will be logged and I am responsible for any actions taken.
        </span>
      </div>
      <div className="text-[#fc8181] text-sm text-left mt-1">
        <ErrorMessage name={field.name} />
      </div>
    </>
  );
}

export default CustomCheckbox;