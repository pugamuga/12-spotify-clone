import { useState } from "react";
import warImage from "../public/assets/war.jpg";

export default function test(): JSX.Element {

    const [like, setlike] = useState(false);
  return (
    <div className=" text-white p-12">
      <div style={{ backgroundImage: `url(${warImage})` }}>assaas</div>
      <img src="/assets/war.jpg" className="w-96 h-96 " />
        <div
        onClick={() => {
         setlike(!like)   
        }}
          style={{ backgroundImage: "url(/assets/heart.png)" }}
          className={`w-12 h-12 bg-left absolute border-2 cursor-pointer  bg-cover ${like&&"heartAnim"}`}
        />
    </div>
  );
}
