import Body from "./Body";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

export default function Dashboard():JSX.Element {
  return (
    <main>
      <LeftBar/>
      <Body/>
      <RightBar/>
    </main>
  )
}