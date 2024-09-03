"use client"

import ChatListingItem from "./ChatListingItem";
import { FaCircleUser } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";



export default function ChatHeader({name, address, price, imagePath}) {
    const [open, setOpen] = useState(false)
   


  return (
    <div className="bg-[#F3F4F6] w-full flex justify-between items-center border-b-[0.09rem] border-gray-500">
        <div className="flex items-center gap-2">
            <div className="p-2 ml-2">
            <FaCircleUser className="text-[2rem]"/>
            </div>

            <h1 className="font-semibold">user</h1>
        </div>

        <div className="p-1 mr-2 relative">
            <BsThreeDotsVertical onClick={() => setOpen(!open)} className="text-[1.3rem] cursor-pointer"/>
            {
                open &&  <div className="absolute bg-white right-6 p-2 top-6 flex flex-col gap-1 rounded-lg shadow-md z-40">
                <div className="cursor-pointer hover:bg-[#F3F4F6] p-1 rounded-md">CreateContract</div>
                <div className="cursor-pointer hover:bg-[#F3F4F6] p-1 rounded-md">DeleteChat</div>
                <div className="cursor-pointer hover:bg-[#F3F4F6] p-1 rounded-md">Block</div>
                <div className="cursor-pointer hover:bg-[#F3F4F6] p-1 rounded-md">Refresh</div>
            </div>
            }
            
        </div>
    </div>
  );
}