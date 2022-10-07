import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { newRelisesState, searchState, searchTop } from "../recoilState/state";
import Search from "./Search";
import SpotifyWebApi from "spotify-web-api-node";
import { ITrack } from "../typing/typing";
import Poster from "./Poster";
import { genres } from "../data";

interface IProps {
  spotifyApi: SpotifyWebApi;
  chooseTrack: any;
}

export default function Body({ spotifyApi, chooseTrack }: IProps): JSX.Element {
  const [searchResult, setSearchResult] = useRecoilState(searchState);
  const [newRelises, setNewRelises] = useRecoilState(newRelisesState);
  const [search, setSearch] = useRecoilState(searchTop);
  const { data: session } = useSession();
  const accessToken = session?.accessToken;

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    if (typeof accessToken === "string") {
      spotifyApi.setAccessToken(accessToken);
    }
  }, [accessToken]);

  useEffect(() => {
    if (!search) {
      return setSearchResult([]);
    }
    if (!accessToken) {
      return;
    }
    spotifyApi.searchTracks(search).then((res: any) => {
      setSearchResult(
        res.body.tracks?.items.map((track: any) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
            popularity: track.popularity,
          };
        })
      );
    });
  }, [search, accessToken]);

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    spotifyApi.getNewReleases().then((res: any) => {
      setNewRelises(
        res.body.albums?.items.map((track: any) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.images[0].url,
          };
        })
      );
    });
  }, [accessToken]);
  return (
    <section className="ml-24 bg-black py-4 space-y-8 md:max-w-6xl flex-grow md:mr-3">
      <Search />
      <div className="grid overflow-y-scroll scrollbar-hide h-96 py-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4">
        {searchResult.length === 0
          ? newRelises
              .slice(0, 4)
              .map((track: any) => (
                <Poster
                  key={track.id}
                  track={track}
                  chooseTrack={chooseTrack}
                />
              ))
          : newRelises
              .slice(0, 4)
              .map((track: any) => (
                <Poster
                  key={track.id}
                  track={track}
                  chooseTrack={chooseTrack}
                />
              ))}
      </div>

      <div className=" flex gap-x-8 absolute min-w-full md:relative ml-6 ">
        <div className=" hidden xl:inline max-w-[270px]">
          <p className=" text-white font-bold mb-3">Genres</p>
          <div className=" flex gap-x-2 gap-y-2 flex-wrap mb-3">
            {genres.map((genre: string, index: number) => {
              return (
                <div className="genre" key={index}>
                  {genre}
                </div>
              );
            })}
          </div>
          <button className="text-[#CECECE] bg-[#1a1a1a] text-[13px] py-4 px-5 rounded-2xl w-full font-bold bg-opacity-80 hover:bg-opacity-100 tr-300">
            All genres
          </button>
        </div>
      </div>
    </section>
  );
}
