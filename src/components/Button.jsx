"use client"
import Link from "next/link";
// import { useRouter } from "next/router";
// import { Router } from "next/router";

export default function Home({username}) {
    // const router = useRouter();

    // const handleclick = async () => {
    //     router.push(`/user${username}`);
    // }
    
  return (
    // <button onClick={handleclick} className="bg-slate-600">
    //     click me
      
    // </button>
    <Link href={`/user/${username}`} className="bg-slate-600">click me</Link>

  );
}
