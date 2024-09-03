"use client"

import { Input } from "./ui/input";
import { CiSearch } from "react-icons/ci";
import { RiChatNewLine } from "react-icons/ri";

export default function LeftChatbar() {
   const contacts = [{"name": "user1"}, {"name" : "user2"}, {"name": "user3"}, {"name": "user4"}, {"name": "user5"}]

  return (
    <div className="bg-[#eaeaea] w-[20%] flex flex-col gap-3">
        <div className="p-2">
          <span className="p-2 font-semibold">Chats</span>
          <div>
            <RiChatNewLine/>
          </div>
        </div>
        <div className="flex items-center">
          <CiSearch />
          <Input
          type='text'
          className='rounded-md w-[90%] bg-[#F3F4F6] focus:bg-white'
          placeholder='Search Chat'
          />
        </div>
        <div className="flex flex-col gap-2 items-center">
        {contacts.map((person, index)=> <div key={index} className="bg-gray-200 p-2 rounded-md w-[90%] cursor-pointer hover:bg-white">{person.name}</div>)}
        </div>


      
    </div>
  );
}
