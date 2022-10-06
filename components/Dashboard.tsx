import Body from "./Body";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import SpotifyWebApi from "spotify-web-api-node"


const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID
})


console.log(spotifyApi)

export default function Dashboard():JSX.Element {
  return (
    <main>
      <LeftBar/>
      <Body spotifyApi={spotifyApi}/>
      <RightBar/>
    </main>
  )
}