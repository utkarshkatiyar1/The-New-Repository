"use client"

import ChatListingItem from "./ChatListingItem";
import { Input } from "./ui/input";
import { IoSend } from "react-icons/io5";
import { IoAttachOutline } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import ChatHeader from "./ChatHeader";


export default function MainChat({name, address, price, imagePath}) {
   


  return (
    <div className="bg-white w-[80%] min-h-screen flex justify-between flex-col items-center">
      <div className="w-full flex flex-col items-center gap-1">
        <ChatHeader/>
        <ChatListingItem name={name} address={address} price={price} imagePath={imagePath}/>
      </div>
        <div className="flex w-full bg-gray-100 mb-[4rem] p-2 border-t-[0.09rem] border-gray-500 justify-center items-center gap-2">

          <div className="hover:bg-white p-2">
            <MdEmojiEmotions className="text-[1.3rem]"/>
          </div>
          <div className="hover:bg-white p-2">
            <IoAttachOutline className="text-[1.3rem]"/>
          </div>
        <Input
                  type="text"
                  className="bg-gray-100 hover:bg-white focus:bg-white"
                  placeholder="Type a massege..."
                  
                />
                <div className="hover:bg-white p-2">
                  <IoSend className="text-[1.6rem] "/>

                </div>
        </div >
    </div>
  );
}
