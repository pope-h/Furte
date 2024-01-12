/**
 * Renders the layout for the admin dashboard.
 * 
 * @returns {JSX.Element} The rendered admin dashboard layout.
 */
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../sections/Sidebar";
import AdminHeader from "../components/AdminHeader";
import useStorePackage from "../store";
import { useEffect, useState } from "react";

const AdminDashBoardLayout = () => {
  const { userRole } = useStorePackage();
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


   //console.log("User role:", userRole);

  useEffect(() => {
    if (userRole !== "Admin") {
      navigate("/404");
    }
  }, [userRole, navigate]);

  if (userRole !== "Admin") {
    return null;
  }

  if (screenWidth < 1024) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-center mx-8 flex flex-wrap">
          PLEASE ROTATE YOUR SCREEN OR USE A DEVICE WITH A LARGER SCREEN<br/>
          (minimum res 1024px)
        </p>
      </div>
    );
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