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
      <div className=" flex space-x-2 items-center justify-between">
        <div className="flex items-center space-x-4 border-2 border-[#262626] rounded-full h-14 py-3 px-4 ">
          <HiOutlineShieldCheck className=" text-xl text-[#ccc]" />
          <MdOutlineSettings className=" text-xl text-[#ccc]" />
          <BiBell className=" text-xl text-[#ccc]" />
        </div>
        <Dropdown/>
      </div>
    </section>
  );
}
