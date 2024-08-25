"use client"
import { putShooData } from "@/lib/actions/shoo.action";
import Link from "next/link";
import { shoodata } from "./shooproduct";
import { PiArrowArcRightThin } from "react-icons/pi";
import { putOneShooData } from "@/lib/actions/oneshoo.action";
// import { useRouter } from "next/router";
// import { Router } from "next/router";



export default function Button({username}) {
    // const router = useRouter();

    const handleclick = async () => {

      // const data = await putShooData(shoodata);
      
      shoodata.map(async (d) => {
        const dd = await putOneShooData(d)
        console.log(dd)
      })
        
    }
    
  return (
    // <button onClick={handleclick} className="bg-slate-600">
    //     click me
      
    // </button>
    <Link href={`/user/${username}`} className="bg-slate-600">click me</Link>

  );
}
