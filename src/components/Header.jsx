
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { auth } from '@clerk/nextjs/server';
// import Button from "./Button";

export default function Home() {

  const {userId} = auth();



  return (
    <div className="bg-[#F6F8FA] flex justify-end h-[3.7rem] border-b-[0.09rem] border-[#D0D7DE] w-full">
      {/* <Button/> */}

      {!userId && <div className="flex gap-2 items-center mr-4">
        <div className="bg-blue-700 pl-2 pr-2 pt-1 pb-1 rounded-md text-white hover:opacity-85"><Link className="" href="/sign-up">Sign Up</Link></div>
        <div className="bg-blue-700 pl-2 pr-2 pt-1 pb-1 rounded-md text-white hover:opacity-85"><Link className="" href="/sign-in">Sign In</Link></div>
        
      </div>
      }

      <div className="flex mr-4">
        {userId && <UserButton className=""/>}

      </div>

      
      
    </div>
  );
}
