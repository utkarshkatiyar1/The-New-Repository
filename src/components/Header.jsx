import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { auth } from '@clerk/nextjs/server';

export default function Home() {

  const {userId} = auth();

  return (
    <div className="bg-[#0F0F0F] flex justify-end h-[3.7rem]">
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
