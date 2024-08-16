
import LeftSidebar from '@/components/LeftSidebar';
import PullRequests from '@/components/PullRequests';
import RightSidebar from '@/components/RightSidebar';
import Temp from '@/components/others/Temp';
import { currentUser } from '@clerk/nextjs/server';
// import Image from "next/image";
import { redirect } from 'next/navigation';
// import { useState } from 'react';

export default async function Home() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //   const toggleSidebar = () => {
  //       setIsSidebarOpen(!isSidebarOpen);
  //   };

  //   const closeSidebar = (e) => {
  //       if (e.target.id === 'sidebar-overlay') {
  //           setIsSidebarOpen(false);
  //       }
  //   };

    const check = async () => {
      const user = await currentUser();
      if(!user) {
          redirect('/')
      }
    }
    check();

  return (
   
    <div className='flex w-full min-h-screen'>
      {/* <Temp/> */}
   
        <LeftSidebar/>

 

        <PullRequests/>

  
        <RightSidebar/>

 
      
        
    </div>
  );
}

{/* <LeftSidebar/>
<PullRequests/>
<RightSidebar/> */}