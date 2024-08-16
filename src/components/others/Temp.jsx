"use client"
// import LeftSidebar from '@/components/LeftSidebar';
// import PullRequests from '@/components/PullRequests';
// import RightSidebar from '@/components/RightSidebar';
// import { currentUser } from '@clerk/nextjs/server';
// import Image from "next/image";
// import { redirect } from 'next/navigation';
import { useState } from 'react';
import LeftSidebar from '../LeftSidebar';
import PullRequests from '../PullRequests';
import RightSidebar from '../RightSidebar';

export default function Temp() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = (e) => {
        if (e.target.id === 'sidebar-overlay') {
            setIsSidebarOpen(false);
        }
    };

    // const check = async () => {
    //   const user = await currentUser();
    //   if(!user) {
    //       redirect('/')
    //   }
    // }
    // check();

  return (
   
    <div className='flex w-full min-h-screen justify-between'>
      {/* Left Sidebar */}
      <div className="w-1/5 bg-gray-200 p-4 hidden md:block">
                {/* LeftSidebar Component */}
                <LeftSidebar/>
            </div>

            {/* Pull Requests */}
            <div className="w-full md:w-3/5 bg-white p-4 relative">
                {/* PullRequests Component */}
                <PullRequests/>
                
                {/* Three Dot Icon for Small Screens */}
                <button
                    onClick={toggleSidebar}
                    className="md:hidden absolute top-4 right-4 text-2xl"
                >
                    &#x22EE; {/* Three dots icon */}
                </button>
            </div>

            {/* Right Sidebar */}
            <div className="w-1/5 bg-gray-200 p-4 hidden md:block">
                {/* RightSidebar Component */}
                <RightSidebar/>
            </div>

            {/* Overlay for Small Screens */}
            {isSidebarOpen && (
                <div
                    id="sidebar-overlay"
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50"
                    onClick={closeSidebar}
                >
                    <div className="w-1/5 bg-gray-200 p-4 h-full">
                        {/* RightSidebar Component */}
                        <RightSidebar/>
                    </div>
                </div>
            )}
        
    </div>
  );
}

{/* <LeftSidebar/>
<PullRequests/>
<RightSidebar/> */}