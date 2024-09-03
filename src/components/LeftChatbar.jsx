"use client"

import { Input } from "./ui/input";
import { CiSearch } from "react-icons/ci";
import { RiChatNewLine } from "react-icons/ri";

export default function LeftChatbar() {
   const contacts = [{"name": "user1"}, {"name" : "user2"}, {"name": "user3"}, {"name": "user4"}, {"name": "user5"}]

  return (
    <div className="bg-[#eaeaea] w-[20%] flex flex-col gap-3">
        <div className="p-1 flex items-center justify-between">
          <span className="p-2 font-semibold">Chats</span>
          <div className="p-2">
            <RiChatNewLine className="text-[1.3rem]"/>
          </div>
        </div>
        <div className="flex items-center rounded-md w-[90%] mx-auto bg-[#F3F4F6] overflow-hidden border-b-[0.09rem] border-gray-500 shadow-md">
          <div className="p-2">
            <CiSearch/>
          </div>
          <Input
          type='text'
          className='bg-[#F3F4F6]'
          placeholder='Search Chat'
          />
        </div>
        <div className="flex flex-col gap-2 items-center">
        {contacts.map((person, index)=> <div key={index} className="bg-gray-200 p-2 rounded-md w-[90%] cursor-pointer hover:bg-white shadow-md">{person.name}</div>)}
        </div>


      
    </div>
  );
}
