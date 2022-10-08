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
          <div className="rounded-full w-14 h-14 -right-1 absolute object-cover bg-[#999] text-xl superflex ">
            {(Array.from(session.user?.email)[0]).toUpperCase()}
            {(Array.from(session.user?.email)[1]).toUpperCase()}
          </div>
        </Menu.Button>
      </div>
    </Menu>
  );
}
