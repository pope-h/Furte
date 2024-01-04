/**
 * Renders the admin header component.
 * @returns {JSX.Element} The admin header component.
 */
import { Menu } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
import NotificationPopover from './popover/NotificationPopover'
import PopoverButton from './popover/PopoverButton'
import { DropdownMenu } from './popover/DropdownMenu'
import useStorePackage from '../store'

export default function AdminHeader() {
	const navigate = useNavigate();
  const { logout, userName } = useStorePackage();
  console.log("User Name:", userName);

	return (
    <div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
      <div className="relative">
        <span className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2">
          <i className="bx bx-search"></i>
        </span>
        <input
          name="search"
          id="search"
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
        />
      </div>
      <div className="flex items-center gap-2 mr-2">
        <PopoverButton
          iconClass="bx bx-chat bx-sm"
          popoverContent={() => (
            <NotificationPopover
              title="Messages"
              content="This is messages panel."
            />
          )}
        />
        <PopoverButton
          iconClass="bx bx-bell bx-sm"
          popoverContent={() => (
            <NotificationPopover
              title="Notifications"
              content="This is notification panel."
            />
          )}
        />
        <DropdownMenu
          buttonContent={
            <Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <span className="sr-only">Open user menu</span>
              <div
                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/80x80?face")',
                }}
              >
                <span className="sr-only">Marc Backes</span>
              </div>
            </Menu.Button>
          }
          items={[
            {
              label: "Your Profile",
              onClick: () => navigate("/dashboard"),
            },
            {
              label: "Settings",
              onClick: () => navigate("/settings"),
            },
            {
              label: "Sign out",
              onClick: () => {
                logout();
                navigate("/");
              },
            },
          ]}
          userName={userName}
        />
      </div>
    </div>
  );
}