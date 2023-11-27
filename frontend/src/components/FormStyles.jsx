const FormStyles = {
  app: {
    textAlign: 'center',
    padding: '5rem 1rem',
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
    maxWidth: '400px',
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