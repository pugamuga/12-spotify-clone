import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../recoilState/state";

export default function Player({ accessToken, trackUri }: any): JSX.Element|null {
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
useEffect(() => {
    if (trackUri){
        setPlay(true)
    }
}, [trackUri]);

if(!accessToken) return null

  return <div></div>;
}
