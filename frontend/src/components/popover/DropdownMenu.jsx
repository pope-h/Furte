import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MenuItem } from "./MenuItem";

/**
 * Renders a dropdown menu component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.buttonContent - The content to display in the button.
 * @param {Array|ReactNode} props.items - The items to display in the dropdown menu.
 * @param {string} props.userName - The username to display in the dropdown menu.
 * @returns {JSX.Element} The rendered dropdown menu component.
 */
export const DropdownMenu = ({ buttonContent, items, userName }) => {
   //console.log("DropdownMenu:", userName);

  /**
   * Capitalizes the first letter of a string.
   *
   * @param {string} str - The input string.
   * @returns {string} The input string with the first letter capitalized.
   */
  const capitalizeFirstLetter = (str) => {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
  };

  userName = capitalizeFirstLetter(userName);
   //console.log("DropdownMenu2:", userName);

  return (
    <Menu as="div" className="">
      <div>{buttonContent}</div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-4 w-80 rounded-sm p-1 py-6 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {userName && (
            <MenuItem label={`Welcome, ${userName}`} isUsername disabled />
          )}
          {Array.isArray(items) ? (
            items.map((item, index) => <MenuItem key={index} {...item} />)
          ) : (
            <div>{items}</div>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};