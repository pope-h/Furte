import { ErrorMessage, useField } from "formik";

const CustomSelect = ({ label, margin, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={`${margin || "my-6"} relative`}>
      <label
        htmlFor={props.id}
        className="absolute text-lg pt-1 px-4 text-gray-500 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-8"
      >
        {label}
      </label>
      <select
        className={`block w-full py-2 pt-4 px-3 text-lg text-black border-[1px] h-16 hover:border-b-[1px] border-gray-300 hover:border-b-black peer ${
          meta.touched && meta.error ? "border-b-[#fc8181]" : ""
        }`}
        placeholder=""
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name} />
    </div>
  );
};
export default CustomSelect;
