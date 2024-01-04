/**
 * Styles for the form component.
 * @typedef {Object} FormStyles
 * @property {Object} app - Styles for the app container.
 * @property {Object} error - Styles for the error message.
 * @property {Object} checkbox - Styles for the checkbox container.
 * @property {Object} form - Styles for the form container.
 * @property {Object} formLabel - Styles for the form label.
 * @property {Object} input - Styles for the input field.
 * @property {Object} select - Styles for the select field.
 * @property {Object} inputFocus - Styles for the input field when focused.
 * @property {Object} selectFocus - Styles for the select field when focused.
 * @property {Object} inputPlaceholder - Styles for the input field placeholder.
 * @property {Object} selectPlaceholder - Styles for the select field placeholder.
 * @property {Object} checkboxInput - Styles for the checkbox input.
 * @property {Object} button - Styles for the button.
 * @property {Object} inputError - Styles for the input field when there is an error.
 * @property {Object} selectInputError - Styles for the select field when there is an error.
 * @property {Object} buttonDisabled - Styles for the disabled button.
 */
const FormStyles = {
  app: {
    textAlign: 'center',
    padding: '2rem 1rem',
  },
  error: {
    color: '#fc8181',
    fontSize: '0.75rem',
    textAlign: 'left',
    marginTop: '0.25rem',
  },
  checkbox: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '1rem',
  },
  form: {
    width: '95%',
    maxWidth: '800px',
    margin: '0 auto',
  },
  formLabel: {
    fontSize: '1rem',
    fontWeight: 'bold',
    display: 'block',
    textAlign: 'left',
    margin: '1rem 0 0.2rem',
    color: 'white',
  },
  input: {
    width: '100%',
    padding: '0.65rem 0.5rem',
    fontSize: '1rem',
    color: 'white',
    border: '2px solid #4a5568',
    backgroundColor: '#2d3748',
    borderRadius: '10px',
    outline: 'none',
    whiteSpace: 'normal',
  },
  select: {
    width: '100%',
    padding: '0.65rem 0.5rem',
    fontSize: '1rem',
    color: 'white',
    border: '2px solid #4a5568',
    backgroundColor: '#2d3748',
    borderRadius: '10px',
    outline: 'none',
  },
  inputFocus: {
    borderColor: '#4299e1',
  },
  selectFocus: {
    borderColor: '#4299e1',
  },
  inputPlaceholder: {
    color: '#a0aec0',
  },
  selectPlaceholder: {
    color: '#a0aec0',
  },
  checkboxInput: {
    width: 'fit-content',
    marginRight: '0.5rem',
    transform: 'scale(1.25)',
  },
  button: {
    display: 'block',
    margin: '1rem 0',
    padding: '0.35rem 0.5rem',
    backgroundColor: '#4299e1',
    color: '#1a202c',
    border: 'none',
    borderRadius: '3px',
    width: '100%',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  inputError: {
    borderColor: '#fc8181',
  },
  selectInputError: {
    borderColor: '#fc8181',
  },
  buttonDisabled: {
    opacity: '0.35',
  },
};

export default FormStyles;