import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const NotificationPopover = ({ title, content, button }) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Popover.Panel className="absolute right-0 z-10 mt-2 transform w-80 origin-top-right focus:outline-none">
        <div className="bg-white flex flex-col rounded-sm ring-1 ring-black ring-opacity-5 px-4 py-8 gap-4">
          <strong className="text-gray-700 font-medium text-lg pt-3">{title}</strong>
          <div className="mt-2 py-1 text-sm">{content}</div>
          {button && (
            <div className="bg-neutral-800 hover:bg-neutral-600 text-white-400 h-12 hover:no-underline pt-[4%] w-full text-center">
              {/* Optional button component */}
              {button}
            </div>
          )}
        </div>
      </Popover.Panel>
    </Transition>
  );
}

export default NotificationPopover