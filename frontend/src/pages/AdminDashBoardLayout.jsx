import { Outlet } from "react-router-dom";
import Sidebar from "../sections/Sidebar";
import AdminHeader from "../components/AdminHeader";

const AdminDashBoardLayout = () => {
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