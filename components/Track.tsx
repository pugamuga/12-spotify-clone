import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ImHeadphones } from "react-icons/im";

export default function Track({ track, chooseTrack }: any): JSX.Element {
  console.log(track);
  return (
    <div className=" flex items-center justify-between space-x-20 cursor-default hover:bg-white/10 py-2 px-4 rounded-lg group tr-300">
      <div className=" flex items-center">
        <img
          src={track.albumUrl}
          alt=""
          className=" rounded-xl h-12 w-12 object-cover mr-3"
        />
        <div>
          <p className=" text-white text-sm font-semibold truncate w-[450px]">
            {track.title}
          </p>
          <p className=" text-[#999] text-[13px] font-semibold group-hover:text-white tr-300">
            {track.artist}
          </p>
        </div>
      </div>
      <div className="md:ml-auto flex items-center space-x-3 font-semibold">
        <div className=" flex space-x-1 text-sm text-white">
          <p>{track.popularity}</p>
          <ImHeadphones className=" text-xl " />
        </div>
          <div className="text-white border border-white/10 flex items-center h-[44px] rounded-full pl-3 ">
            {!true ? (
              <AiFillHeart className="w-6 h-6 text-green-500 hover:scale-110 tr-300" />
            ) : (
              <AiOutlineHeart className="w-6 h-6 hover:scale-110 tr-300" />
            )}

            <div className=" h-12 w-12 border superflex border-[#999] rounded-full bg-[#0d0d0d] -mr-4 ml-3">
              {!true ? (
                <BsFillPauseFill className="w-6 h-6" />
              ) : (
                <BsFillPlayFill className="w-6 h-6 ml-[2px]" />
              )}
            </div>
        </div>
      </div>
    </div>
  );
}
