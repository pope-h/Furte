import { Menu } from "@headlessui/react";
import classNames from "classnames";

/**
 * Represents a menu item in a popover.
 *
 * @component
 * @param {Object} props - The properties of the menu item.
 * @param {Function} props.onClick - The function to be called when the menu item is clicked.
 * @param {string} props.label - The label of the menu item.
 * @param {boolean} props.active - Indicates whether the menu item is active.
 * @param {boolean} props.isUsername - Indicates whether the menu item represents a username.
 * @returns {JSX.Element} The rendered menu item.
 */
export const MenuItem = ({ onClick, label, active, isUsername }) => (
  <Menu.Item>
    {({ active: itemActive }) => (
      <div
        onClick={onClick}
        className={classNames(
          itemActive && !isUsername && "bg-gray-100",
          "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer hover:text-coral-red focus:bg-gray-200",
          isUsername && "font-medium text-lg hover:text-gray-700 pointer-events-none"
        )}
      >
        {label}
        {active}
      </div>
    )}
  </Menu.Item>
);
