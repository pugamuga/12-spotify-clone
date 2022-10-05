import Search from "./Search";

export default function Body():JSX.Element {
  return (
    <section className="ml-24 bg-black py-4 space-y-8 md:max-w-6xl flex-grow md:mr-3">
      <Search/>
    </section>
  )
}