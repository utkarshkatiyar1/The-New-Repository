
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { auth, currentUser } from '@clerk/nextjs/server';
// import Button from "./Button";
import { FaUserCircle } from "react-icons/fa";
import UserProfile from "./UserProfile";

export default async function Home() {
  const user = await currentUser();
  console.log(user)


  const {userId} = auth();



  return (
    <div className="bg-green-400 flex items-center justify-between h-[5rem] border-b-[0.09rem] border-green-700 w-full">
      {/* <Button/> */}
      <div className="ml-3 font-bold text-white text-[2.5rem]">Green Room</div>

      {!userId && <div className="flex gap-2 items-center mr-4">
        <div className="bg-blue-700 pl-2 pr-2 pt-1 pb-1 rounded-md text-white hover:opacity-85"><Link className="" href="/sign-up">Sign Up</Link></div>
        <div className="bg-blue-700 pl-2 pr-2 pt-1 pb-1 rounded-md text-white hover:opacity-85"><Link className="" href="/sign-in">Sign In</Link></div>
        
      </div>
      }

      <div className="flex mr-4">
        <UserProfile userId={userId} />


        {/* {userId && <UserButton className=""/>} */}

      </div>

      
      
    </div>
  );
}
