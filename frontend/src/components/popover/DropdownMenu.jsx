import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MenuItem } from "./MenuItem";

export const DropdownMenu = ({ buttonContent, items, userName }) => {
  console.log("DropdownMenu:", userName);
  const capitalizeFirstLetter = (str) => {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
  };
  userName = capitalizeFirstLetter(userName);
  console.log("DropdownMenu2:", userName);
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