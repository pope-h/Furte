import { useEffect, useState } from "react";
import useStorePackage from "../store";
import { getUser } from "../API";

/**
 * Component for displaying the dashboard summary.
 * @returns {JSX.Element} The rendered component.
 */
const DashboardSummary = () => {
  const store = useStorePackage();
  const userId = store.userId;
  const [user, setUser] = useState(null);
  const token = store.accessToken();

  useEffect(() => {
    /**
     * Fetches the user details from the API.
     * @returns {Promise<void>} A promise that resolves when the user details are fetched.
     */
    const fetchUserDetails = async () => {
      try {
        const userData = await getUser(token, userId);
        setUser(userData);
        console.log("DashboardSummary", userData);
      } catch (err) {
        console.error("Error fetching user details:", err);
        alert("Could not fetch user details. Please try again.");
        //    navigate('/error-page'); // Redirect to an error page
      }
    };

    fetchUserDetails();
  }, [userId, token]);

  return (
    <>
      {user && (
        <div className="flex flex-col gap-16">
          <div>
            <h2 className="font-semibold text-xl font-palanquin border-b-2 pb-2 border-b-gray-300">
              Order Summary
            </h2>
            <p className="pt-4">No orders found.</p>
          </div>
          <div className="flex gap-8">
            <div className="w-1/2">
              <h2 className="font-semibold text-xl font-palanquin border-b-2 pb-2 border-b-gray-300">
                Personal Data
              </h2>
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-md font-thin text-gray-400">User Name</h3>
                  <p>{user.userName}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-md font-thin text-gray-400">
                    Your Email Address
                  </h3>
                  <p>{user.email}</p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <h2 className="font-semibold text-xl font-palanquin border-b-2 pb-2 border-b-gray-300">
                Shipping Address
              </h2>
              <div className="flex flex-col pt-4 gap-2">
                <div className="flex gap-1">
                  <p>{user.firstName}</p>
                  <p>{user.lastName}</p>
                </div>
                <div className="flex gap-1 max-md:flex-wrap">
                  <p>{user.address}, </p>
                  <p>{user.country}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardSummary;
