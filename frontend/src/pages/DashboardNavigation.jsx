import { Link } from "react-router-dom";

const DashboardNavigation = () => {
  return (
    <nav className="pt-24 px-10">
      <h2 className="text-4xl font-medium font-palanquin text-gray-800 my-12 text-center">
        Your Account
      </h2>
      <ul className="flex gap-8 max-sm:justify-center">
        <li>
          <Link
            to="/dashboard"
            className="text-slate-gray hover:text-red-600 fonts-montserrat leading-normal text-lg hover:no-underline"
          >
            Summary
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/orders"
            className="text-slate-gray hover:text-red-600 fonts-montserrat leading-normal text-lg hover:no-underline"
          >
            Orders
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/personal-data"
            className="text-slate-gray hover:text-red-600 fonts-montserrat leading-normal text-lg hover:no-underline"
          >
            Personal Data
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/address"
            className="text-slate-gray hover:text-red-600 fonts-montserrat leading-normal text-lg hover:no-underline"
          >
            Address
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNavigation;
