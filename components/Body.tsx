import { useRecoilState } from "recoil";
import { searchState } from "../recoilState/state";
import Search from "./Search";

export default function Body():JSX.Element {
  const [searchRes, setSearchRes] = useRecoilState(searchState);

  return (
    <section className="ml-24 bg-black py-4 space-y-8 md:max-w-6xl flex-grow md:mr-3">
      <Search/>
      <div className="grid overflow-y-scroll scrollbar-hide h-96 bg-white/10 py-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4">
 
      </div>
    </section>
  )
}