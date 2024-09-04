"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useClerk } from "@clerk/nextjs";
import PostListDialogBox from "./dialogbox/PostListDialogBox";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";


export default function ProfileDropDown({userId}) {

    const { signOut } = useClerk();
    const [open, setOpen] = useState(false);

 
  
  
    const handleLogout = async () => {
      signOut();
    }
   


  return (
    <div>
        <DropdownMenu className="relative">
            <DropdownMenuTrigger className="outline-none"><FaUserCircle className="text-[2.2rem] text-gray-200 cursor-pointer"/></DropdownMenuTrigger>
            <DropdownMenuContent className={`absolute right-2`}>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Link href={`/profile/${userId}`}>Your profile</Link></DropdownMenuItem>
                <DropdownMenuItem ><Link href={`/post/${userId}`}>Post</Link></DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" >Chats</DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer" >Log out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    
     
    </div>
  );
}
