import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../recoilState/state";

export default function Poster({ track }: any): JSX.Element {
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const handlePlay = () => {
    return 
  }
  
  return (
    <div className=" w-[260px] h-[360px] rounded-[50px] overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 hover:text-white tr-300 group mx-auto ">
      <img
        src={track.albumUrl}
        alt="poster"
        className="h-full w-full object-cover absolute inset-0 opacity-80 group-hover:opacity-100 tr-300"
      />
      <div className=" absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-4">
        <div className="h-10 w-10 bg-[#15883e] rounded-full superflex group-hover:bg-[#1db954] tr-300 flex-shrink-0">
          {false ? (
            <BsFillPauseFill className="w-6 h-6" />
          ) : (
            <BsFillPlayFill className="w-6 h-6" />
          )}
        </div>
      </div>
    </div>
  );
}
