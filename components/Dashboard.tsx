import Body from "./Body";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import SpotifyWebApi from "spotify-web-api-node";
import { playingTrackState } from "../recoilState/state";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Player from "./Player";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});

export default function Dashboard(): JSX.Element {
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  const [showPlayer, setShowPlayer] = useState<boolean>(false);

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  const chooseTrack = (track: any) => {
    setPlayingTrack(track);
  };

  return (
    <main className=" flex min-h-screen min-w-max bg-black lg:pb-24">
      <LeftBar />
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <RightBar spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <div className=" fixed bottom-0 left-0 right-0 z-50">
        <Player accessToken={accessToken} trackUri={playingTrack.uri}/>
      </div>
    </main>
  );
}
