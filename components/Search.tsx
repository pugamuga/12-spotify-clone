import { useRecoilState } from "recoil";
import { searchTop } from "../recoilState/state";

export default function Search(): JSX.Element {
  const [search, setSearch] = useRecoilState(searchTop);
  return (
    <div className="rounded-full overflow-hidden border-2 border-[#333333] p-2 max-w-[1150px] bg-[#1a1a1a] px-5 pr-8 flex items-center">
      <div className=" h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse" />
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="bg-[#1a1a1a] text-white border-none lg:w-full focus:ring-0 outline-none placeholder-[#fafafa] text-xs"
        placeholder="Search..."
      />
      <div className="flex items-center">
        <div className=" flex space-x-2 pr-5">
          <button className="tag">Minimal</button>
          <button className="tag">House</button>
          <button className="tag">Minimal</button>
        </div>
      </div>
    </div>
  );
}
