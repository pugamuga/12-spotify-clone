import { BsFillGridFill } from "react-icons/bs";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import Dropdown from "./Dropdown";

export default function RightBar({
  spotiftApi,
  chooseTrack,
}: any): JSX.Element {
  return (
    <section className=" p-4 pr-8 space-y-8">
      <div className=" flex space-x-8 items-center justify-between">
        <div className="flex items-center space-x-4 border-2 border-[#262626] rounded-full h-14 py-3 px-4 ">
          <HiOutlineShieldCheck className=" text-xl text-[#ccc]" />
          <MdOutlineSettings className=" text-xl text-[#ccc]" />
          <BiBell className=" text-xl text-[#ccc]" />
        </div>
        <Dropdown />
      </div>
      <div className="bg-[#0d0d0d] border-2 border-[#262626] p-4 rounded-xl space-y-4  ">
        <div className=" flex items-center justify-between">
          <p className="text-white font-semibold text-sm">Recently played</p>
          <BsFillGridFill className="text-[#686868] h-6" />
        </div>
        <div className="space-y-4 overflow-y-scroll overflow-x-hidden h-[250px] md:h-[400px] scrollbar-hide"></div>
      </div>
    </section>
  );
}
