import { useEffect } from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../recoilState/state";

export default function Poster({ track, chooseTrack }: any): JSX.Element {
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const handlePlay = () => {
    chooseTrack(track);
    if (track.uri == playingTrack.uri) {
      setPlay(!play);
    }
  };

  return (
    <div
      onClick={handlePlay}
      className=" w-[260px] h-[360px] rounded-[50px] overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 hover:text-white tr-300 group mx-auto "
    >
      <img
        src={track.albumUrl}
        alt="poster"
        className="h-full w-full object-cover absolute inset-0 opacity-80 group-hover:opacity-100 tr-300"
      />
      <div className=" absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-4">
        <div className="h-10 w-10 bg-[#15883e] rounded-full superflex group-hover:bg-[#1db954] tr-300 flex-shrink-0">
          {track.uri === playingTrack.uri && play ? (
            <BsFillPauseFill className="w-6 h-6" />
          ) : (
            <BsFillPlayFill className="w-6 h-6 ml-[2px]" />
          )}
        </div>
        <div className=" text-[15px]">
          <p className=" font-extrabold truncate w-44">{track.title}</p>
          <p>{track.artist}</p>
        </div>
      </div>
    </div>
  );
}
