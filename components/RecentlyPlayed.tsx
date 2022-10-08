import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../recoilState/state";

export default function RecentlyPlayed({
  track,
  chooseTrack,
}: any): JSX.Element {
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const handlePlay = () => {
    chooseTrack(track);
    if (track.uri == playingTrack.uri) {
      setPlay(!play);
    }
  };

  return (
    <div className=" flex items-center space-x-3" onClick={handlePlay}>
      <img
        src={track.albumUrl}
        alt=""
        className="rounded-full object-cover w-12 h-12"
      />
      <div>
        <p className=" text-white text-[13px] mb-1 font-semibold hover:underline cursor-pointer truncate max-w-[150px]">
          {track.title}
        </p>
        <p className=" text-xs text-[#686868] font-semibold cursor-pointer hover:underline">
          {track.artist}
        </p>
      </div>
    </div>
  );
}
