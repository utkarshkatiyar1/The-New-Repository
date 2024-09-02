"use client"

import ChatListingItem from "./ChatListingItem";
import { Input } from "./ui/input";



export default function MainChat({name, address, price, imagePath}) {
   


  return (
    <div className="bg-[#eaeaea] w-[80%] min-h-screen flex justify-between flex-col items-center ">
        <ChatListingItem name={name} address={address} price={price} imagePath={imagePath}/>
        <Input
                  type="text"
                  className="border-[1px]  border-gray-600 mb-[5rem]"
                  
                />
    </div>
  );
}
