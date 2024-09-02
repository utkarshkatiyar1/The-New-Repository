"use client"

import ChatListingItem from "./ChatListingItem";



export default function MainChat({name, address, price, imagePath}) {
   


  return (
    <div className="bg-[#eaeaea] w-[80%] min-h-screen flex justify-center">
        <ChatListingItem name={name} address={address} price={price} imagePath={imagePath}/>
    </div>
  );
}
