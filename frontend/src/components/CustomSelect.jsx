import { useField } from "formik";
import FormStyles from "./FormStyles";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label style={FormStyles.formLabel}>{label}</label>
      <select
        {...field}
        {...props}
        style={{
            ...FormStyles.select,
            ...FormStyles.selectFocus,
            ...FormStyles.selectPlaceholder,
            ...(meta.touched && meta.error ? FormStyles.selectInputError : {})
        }}
      />
      {meta.touched && meta.error && <div style={FormStyles.error}>{meta.error}</div>}
    </>
  );
};
export default CustomSelect;