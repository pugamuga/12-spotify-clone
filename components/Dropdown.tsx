import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";

export default function Dropdown(): JSX.Element {
  const { data: session } = useSession();

  console.log(session);
  return (
    <Menu as="div" className="w-24 h-12 relative flex items-center">
      <div className=" w-full absolute right-1 group">
        <Menu.Button
          className={`flex items-center w-full px-4 py-3 text-sm font-medium text-white bg-[#1a1a1a] rounded-full hover:bg-[#3e3e3e]`}
        >
          <ChevronDownIcon className="h-6 text-[#686868]" aria-hidden="true" />
          <div className="rounded-full w-14 h-14 -right-1 absolute object-cover bg-gradient-to-br from-green-400 to-blue-400 text-xl superflex ">
            {Array.from(session?.user?.email!)[0].toUpperCase()}
            {Array.from(session?.user?.email!)[1].toUpperCase()}
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition easy-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition easy-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={` absolute right-0 w-56 mt-24 origin-top-right bg-[#1a1a1a] divide-y divide-gray-100
        rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active && "bg-white/10"
                  } group flex rounded-md items-center w-full p-2 text-sm font-semibold
                        tracking-wide text-white cursor-default`}
                  onClick={() => {
                    signOut({ redirect: false });
                  }}
                >
                  <ArrowLeftOnRectangleIcon
                    className=" w-5 h-5 mr-2"
                    aria-hidden="true"
                  />
                  Log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
