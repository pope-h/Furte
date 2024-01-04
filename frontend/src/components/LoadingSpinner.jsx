/**
 * A component that displays a loading spinner.
 * @returns {JSX.Element} The LoadingSpinner component.
 */
import '../styles/loadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;