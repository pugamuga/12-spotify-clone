import { BsFillGridFill } from "react-icons/bs";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import Dropdown from "./Dropdown";
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../recoilState/state";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import RecentlyPlayed from "./RecentlyPlayed";

export default function RightBar({
  spotifyApi,
  chooseTrack,
}: any): JSX.Element {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 }).then((res: any) => {
      setRecentlyPlayed(
        res.body.items.map((track: any) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
          };
        })
      );
    });
  }, [accessToken]);



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
        <div className="space-y-4 overflow-y-scroll overflow-x-hidden h-[250px] md:h-[400px] scrollbar-hide">
          {recentlyPlayed.map((track: any, i: number) => {
            return (
              <RecentlyPlayed track={track} key={i} chooseTrack={chooseTrack} />
            );
          })}
        </div>
        <button className="text-[#CECECE] bg-[#1a1a1a] text-[13px] py-4 px-5 rounded-2xl w-full font-bold bg-opacity-80 hover:bg-opacity-100 tr-300">
          View All
        </button>
      </div>
    </section>
  );
}
