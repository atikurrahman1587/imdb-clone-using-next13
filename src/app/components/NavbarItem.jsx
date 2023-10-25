"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, prams }) {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");
  return (
    <>
        <Link className={`m-4 hover:text-amber-600  font-semibold p-2 ${genre && genre === prams && "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"}`} href={`/?genre=${prams}`}>
            {title}
        </Link>
    </>
  )
}
