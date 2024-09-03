"use client"
import Link from "next/link";
import { useState } from "react";

import { FaUserCircle } from "react-icons/fa";

export default function UserProfile({userId}) {

  const [open, setOpen] = useState(false);





  return (
    

      <div className="">
        <FaUserCircle onClick={() => setOpen(!open)} className="text-[2.2rem] text-gray-200 cursor-pointer relative"/>
        {open && <div className="bg-white rounded-md absolute right-8 top-[3.3rem] p-2 flex flex-col gap-1 shadow-md text-[0.9rem] z-50">
          <Link href={`/profile/${userId}`} className="hover:bg-gray-200 p-1 rounded-md cursor-pointer">Your profile</Link>
          <div className="hover:bg-gray-200 p-1 rounded-md cursor-pointer">Payment history</div>
          <div className="hover:bg-gray-200 p-1 rounded-md cursor-pointer">List</div>
          <div className="hover:bg-gray-200 p-1 rounded-md cursor-pointer">Notes</div>
        </div>}
        

      </div>

      
 
  );
}
