/**
 * Renders the navigation component for the dashboard.
 * @returns {JSX.Element} The rendered navigation component.
 */
import { Link } from "react-router-dom";

const DashboardNavigation = () => {
  return (
    <nav className="pt-24 max-md:pt-12 px-10 max-md:px-6">
      <h2 className="text-4xl max-md:text-2xl font-medium font-palanquin text-gray-800 my-12 max-md:my-10 text-center">
        Your Account
      </h2>
      <ul className="flex gap-8 max-md:gap-2 max-md:justify-between max-md:text-center">
        <li>
          <Link
            to="/dashboard"
            className="text-slate-gray hover:text-red-600 fonts-montserrat leading-normal md:text-lg hover:no-underline"
          >
            Summary
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/orders"
            className="text-slate-gray hover:text-red-600 fonts-montserrat leading-normal md:text-lg hover:no-underline"
          >
            Orders
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/personal-data"
            className="text-slate-gray hover:text-red-600 fonts-montserrat leading-normal md:text-lg hover:no-underline"
          >
            Personal Data
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/address"
            className="text-slate-gray hover:text-red-600 fonts-montserrat leading-normal md:text-lg hover:no-underline"
          >
            Address
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNavigation;
