import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteUser, fetchUsers } from "../API";

const Customer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersFromServer = await fetchUsers();
        setUsers(usersFromServer);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching users:", err);
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (confirmDelete) {
      try {
        await deleteUser(id);
        setUsers(users.filter((user) => user._id !== id));
      } catch (err) {
        console.error("Error deleting user:", err);
      }
    }
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between items-center mb-3">
        <strong className="text-gray-700 font-medium">Customers</strong>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        {loading ? (
          // Show loading spinner while data is being fetched
          <div className="flex items-center justify-center h-32">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          // Show table once data is loaded
          <table className="w-full text-gray-700">
            <thead>
              <tr>
                <th>Role</th>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Country</th>
                <th>Phone Number</th>
                <th>Joined</th>
                <th>Update</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <Link to={`/admin/${user.user_id}`}>{user.role}</Link>
                  </td>
                  <td>
                    <Link to={`/admin/${user.user_id}`}>{user.userName}</Link>
                  </td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>{user.country}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{format(new Date(user.createdAt), "dd MMM yyyy")}</td>
                  <td>
                    <Link
                      to={`/admin/edit/user/${user._id}`}
                      className="text-blue-500 hover:text-coral-red"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <i
                      className="bx bx-trash text-coral-red cursor-pointer"
                      onClick={() => handleDelete(user._id)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Customer;
