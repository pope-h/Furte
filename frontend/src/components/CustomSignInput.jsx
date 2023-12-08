import { ErrorMessage, useField } from "formik";

const CustomSignInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="my-6">
      <input
        className={`block w-80 py-2 px-0 text-sm text-white-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-emerald-700 focus:outline-none focus:ring-0 focus:text-white-400 focus:border-coral-red peer ${meta.touched && meta.error ? "border-b-[#fc8181]" : ""}`}
        placeholder=""
        {...field}
        {...props}
        autoComplete="off"
      />
      <label
        htmlFor={field.name}
        className="absolute text-sm text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-coral-red peer-focus:dark:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
      >
        {label}
      </label>
      <ErrorMessage name={field.name} />
    </div>
  );
};

export default CustomSignInput;
