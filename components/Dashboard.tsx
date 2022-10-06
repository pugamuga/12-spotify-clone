import Body from "./Body";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import SpotifyWebApi from "spotify-web-api-node";
import { playingTrackState } from "../recoilState/state";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});

export default function Dashboard(): JSX.Element {
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  const chooseTrack = (track: any) => {
    setPlayingTrack(track);
  };

  return (
    <main>
      <LeftBar />
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <RightBar />
    </main>
  );
}
