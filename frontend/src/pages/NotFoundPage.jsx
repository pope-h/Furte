import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-gray-700">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </p>
        <p className="text-gray-600 mb-8">
          The page you are looking for might be under construction or does not
          exist.
        </p>
        <Link
          to="/"
          className="text-xl text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full transition-colors duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
