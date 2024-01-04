import { useNavigate } from "react-router-dom"
import SidebarLink from "../components/SidebarLink"
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from "../constants"
import classNames from 'classnames'
import useStorePackage from "../store"

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

const Sidebar = () => {
    const navigate = useNavigate();
    const { logout } = useStorePackage();

    const handleLogout = () => {
        logout();
        navigate("/");
    }

  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
      <div
        className="flex items-center gap-1 px-1 py-3 font-bold text-2xl font-palanquin cursor-pointer hover:text-coral-red"
        onClick={() => navigate("/")}
      >
        <i className="bx bxl-firebase"></i>
        <span>Furte</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
      <div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700" onClick={handleLogout}>
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}
          <div className={classNames(linkClass, "cursor-pointer text-red-500")}>
            <span className="text-xl">
              <i className="bx bx-log-out"></i>
            </span>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Sidebar component.
 * This component represents the sidebar section of the application.
 * It provides navigation and additional functionality.
 *
 * @component
 * @example
 * // Usage:
 * <Sidebar />
 */
export default Sidebar