import Image from "next/image";

export default function LeftBar():JSX.Element {
  return (
    <section className=" fixed z-40 top-0 left-0 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8">
      <Image src={`https://rb.gy/xkacau`} height={56} width={56} objectFit="contain"/>
      <div>

      </div>
    </section>
  )
}