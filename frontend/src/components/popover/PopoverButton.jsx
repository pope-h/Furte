import { Popover } from "@headlessui/react";
import classNames from "classnames";

const PopoverButton = ({ iconClass, popoverContent }) => {
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open && "bg-gray-100",
              "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
            )}
          >
            <i className={iconClass}></i>
          </Popover.Button>
          {popoverContent()}
        </>
      )}
    </Popover>
  );
}

export default PopoverButton