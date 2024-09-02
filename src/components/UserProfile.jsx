"use client"
import Link from "next/link";
import { useState } from "react";

import { FaUserCircle } from "react-icons/fa";

export default function UserProfile() {

  const [open, setOpen] = useState(false);





  return (
    

      <div className="">
        <FaUserCircle onClick={() => setOpen(!open)} className="text-[2.2rem] text-gray-200 cursor-pointer relative"/>
        {open && <div className="bg-white rounded-md absolute right-8 top-[3.3rem] p-2 flex flex-col gap-1 shadow-md text-[0.9rem]">
          <div className="hover:bg-gray-200 p-1 rounded-md cursor-pointer">Your profile</div>
          <div className="hover:bg-gray-200 p-1 rounded-md cursor-pointer">Payment history</div>
          <div className="hover:bg-gray-200 p-1 rounded-md cursor-pointer">About</div>
          <div className="hover:bg-gray-200 p-1 rounded-md cursor-pointer">Notes</div>
        </div>}
        

      </div>

      
 
  );
}
