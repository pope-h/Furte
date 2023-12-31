import { Outlet } from "react-router-dom";
import DashboardNavigation from "./DashboardNavigation";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-[100vh] gap-16 max-md:gap-8 overflow-hidden">
      <DashboardNavigation />
      <div className="flex-1 px-10 pb-36">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
