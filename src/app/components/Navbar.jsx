import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
        <NavbarItem title="Trending" prams="fetchTrending"/>
        <NavbarItem title="Top Rated" prams="fetchTopRated"/>
    </div>
  )
}
