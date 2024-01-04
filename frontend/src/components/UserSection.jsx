/**
 * Renders the user section component.
 * @param {string} accessToken - The access token of the user.
 * @param {string} userName - The name of the user.
 * @param {function} navigate - Function to navigate to a specific route.
 * @param {function} logout - Function to log out the user.
 * @returns {JSX.Element} The user section component.
 */
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { DropdownMenu } from "./popover/DropdownMenu";

const UserSection = ({ accessToken, userName, navigate, logout }) => {
  console.log("User is logged in", accessToken);
  console.log("User Name:", userName);
  if (accessToken) {
    // User is logged in
    return (
      <DropdownMenu
        buttonContent={
          <Menu.Button>
            <i className="bx bx-user bx-sm hover:text-coral-red cursor-pointer"></i>
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
    );
  } else {
    // User is not logged in
    return (
      <DropdownMenu
        buttonContent={
          <Menu.Button>
            <i className="bx bx-user bx-sm hover:text-coral-red cursor-pointer"></i>
          </Menu.Button>
        }
        items={
          <div className="bg-white flex flex-col rounded-sm ring-1 ring-black ring-opacity-5 px-4 py-4 gap-8">
            <strong className="text-gray-700 font-medium text-lg">
              Sign In
            </strong>
            <Link
              to="/signin"
              className="bg-neutral-800 hover:bg-neutral-600 text-white-400 h-12 hover:no-underline pt-[4%] w-full text-center"
            >
              SIGN IN
            </Link>
          </div>
        }
      />
    );
  }
};

export default UserSection;
