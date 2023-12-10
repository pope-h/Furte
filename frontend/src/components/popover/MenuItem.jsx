import { Menu } from "@headlessui/react";
import classNames from "classnames";

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
