import Image from "next/image";
import {HomeIcon, ChartBarIcon, ClockIcon } from "@heroicons/react/24/solid"
import {FaMicrophoneAlt} from "react-icons/fa"
import {RiCompassFill} from "react-icons/ri"
import {BsThreeDots} from "react-icons/bs"

export default function LeftBar(): JSX.Element {
  return (
    <section className=" fixed z-40 top-0 left-0 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8">
      <Image
        src={`https://rb.gy/xkacau`}
        height={56}
        width={56}
        objectFit="contain"
      />
      <div className="flex flex-col space-y-8">
        <HomeIcon className="leftBarIcon text-white opacity-[85%]"/>
        <RiCompassFill className="leftBarIcon"/>
        <FaMicrophoneAlt className="leftBarIcon"/>
        <ChartBarIcon className="leftBarIcon"/>
        <ClockIcon className="leftBarIcon"/>
        <BsThreeDots className="leftBarIcon"/>
      </div>
    </section>
  );
}
