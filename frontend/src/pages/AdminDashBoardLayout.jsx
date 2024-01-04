/**
 * Renders the layout for the admin dashboard.
 * 
 * @returns {JSX.Element} The rendered admin dashboard layout.
 */
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../sections/Sidebar";
import AdminHeader from "../components/AdminHeader";
import useStorePackage from "../store";
import { useEffect } from "react";

const AdminDashBoardLayout = () => {
  const { userRole } = useStorePackage();
  const navigate = useNavigate();

  console.log("User role:", userRole);

  useEffect(() => {
    if (userRole !== "Admin") {
      navigate("/404");
    }
  }, [userRole, navigate]);

  if (userRole !== "Admin") {
    return null;
  }

  return (
    <main className="flex bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <section className="flex flex-col flex-1">
        <AdminHeader />
        <div className="flex-1 p-4 min-h-0 overflow-auto">{<Outlet />}</div>
      </section>
    </main>
  );
};

export default AdminDashBoardLayout;