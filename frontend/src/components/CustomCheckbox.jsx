import { useField } from "formik"
import FormStyles from "./FormStyles"

const CustomCheckbox = ({ ...props }) => {
    const [field, meta] = useField(props)
    
  return (
    <>
      <div style={FormStyles.checkbox}>
        <input
          {...field}
          {...props}
          style={{
            ...FormStyles.checkboxInput,
            ...(meta.touched && meta.error ? FormStyles.inputError : {}),
          }}
        />
        <span className="text-white">
          I have the user permission to make this changes and understand this
          activity will be logged.
        </span>
      </div>
      {meta.touched && meta.error && (
        <div style={FormStyles.error}>{meta.error}</div>
      )}
    </>
  );
}

export default CustomCheckbox;