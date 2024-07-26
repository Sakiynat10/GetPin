"use client"

import { useParams } from "next/navigation";

 
export default function SearchBar() {
    const pathname = useParams();
    console.log(pathname);

  return <>{pathname}</>
}