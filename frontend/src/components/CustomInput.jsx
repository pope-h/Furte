// CustomInput.js
import { useField } from 'formik';
import FormStyles from './FormStyles';

const CustomInput = ({ label, as, ...props }) => {
  const [field, meta] = useField(props);

  const isTextarea = as === 'textarea';

  return (
    <>
      <label style={FormStyles.formLabel}>{label}</label>
      {isTextarea ? (
        <textarea
          {...field}
          {...props}
          style={{
            ...FormStyles.input,
            ...FormStyles.inputFocus,
            ...FormStyles.inputPlaceholder,
            ...(meta.touched && meta.error ? FormStyles.inputError : {}),
          }}
        />
      ) : (
        <input
          {...field}
          {...props}
          style={{
            ...FormStyles.input,
            ...FormStyles.inputFocus,
            ...FormStyles.inputPlaceholder,
            ...(meta.touched && meta.error ? FormStyles.inputError : {}),
          }}
        />
      )}
      {meta.touched && meta.error && (
        <div style={FormStyles.error}>{meta.error}</div>
      )}
    </>
  );
};

export default CustomInput;
