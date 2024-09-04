
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { auth, currentUser } from '@clerk/nextjs/server';
// import Button from "./Button";

import { GiCorn } from "react-icons/gi";
import { Input } from "./ui/input";
import { CiSearch } from "react-icons/ci";
import ProfileDropDown from "./ProfileDropDown";

export default async function Home() {
  const user = await currentUser();
  console.log(user)


  const {userId} = auth();



  return (
    <div className="bg-green-400 flex items-center justify-between h-[5rem] border-b-[0.09rem] border-green-700 w-full">
      {/* <Button/> */}
      <Link href={`/`} className="ml-3 font-bold text-white text-[3rem] flex items-center gap-3">
        <GiCorn className="text-green-700"/>
        <div className="text-[1.7rem]">Green Room</div>
      </Link>

      <div className="w-[19rem] rounded-sm bg-white/70 shadow-md flex items-center">
        <Input placeholder="Search" className="bg-white/0"/>
        <div className="hover:bg-slate-200/50 p-2 rounded-tr-sm rounded-br-sm cursor-pointer">
          <CiSearch className="text-[1.5rem] "/>

        </div>


      </div>

      {!userId && <div className="flex gap-2 items-center mr-4">
        <div className="bg-blue-700 pl-2 pr-2 pt-1 pb-1 rounded-md text-white hover:opacity-85"><Link className="" href="/sign-up">Sign Up</Link></div>
        <div className="bg-blue-700 pl-2 pr-2 pt-1 pb-1 rounded-md text-white hover:opacity-85"><Link className="" href="/sign-in">Sign In</Link></div>
        
      </div>
      }

      <div className={`flex mr-4 ${!userId && "hidden"} border-none outline-none`}>
        {userId && <ProfileDropDown userId={userId} />}


        {/* {userId && <UserButton className=""/>} */}

      </div>

      
      
    </div>
  );
}
