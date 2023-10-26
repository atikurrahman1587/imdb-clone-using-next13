"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
    const [search, setSearch] = useState("");
    const router = useRouter();
    const handelSubmit = (e) => {
        e.preventDefault()
        if(!search) return;
        router.push(`/search/${search}`);
    }
  return (
    <form onSubmit={handelSubmit} className="flex max-w-6xl mx-auto justify-between items-center px-5">
        <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search keywords..." className="w-full h-14 rounded-sm placeholder-gray-500 outline-none flex-1 bg-transparent" />
        <button disabled={!search} type="submit" className="text-amber-600 disabled:text-gray-400">Search</button>
    </form>
  )
}
