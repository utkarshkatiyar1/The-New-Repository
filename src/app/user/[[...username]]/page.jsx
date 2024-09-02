
// import LeftSidebar from '@/components/LeftSidebar';
// import PullRequests from '@/components/PullRequests';
// import RightSidebar from '@/components/RightSidebar';
// import Temp from '@/components/others/Temp';
import { currentUser } from '@clerk/nextjs/server';
// import Image from "next/image";
import { redirect } from 'next/navigation';
// import { useDispatch } from 'react-redux';
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

  // const dispatch = useDispatch();

    const check = async () => {
      const user = await currentUser();
      if(!user) {
          redirect('/')
      }
    }
    check();

  return (
   
    <div className=''>
      {/* <Temp/> */}

      <div className='hidden md:flex w-full min-h-screen relative justify-between'>
        {/* <LeftSidebar/>

        <PullRequests/>


        <RightSidebar/> */}

      </div>

      <div className='flex md:hidden w-full min-h-screen relative justify-between'>
        <div className='w-full flex flex-col'>
          {/* <LeftSidebar/>

          <PullRequests/> */}

        </div>


        {/* <RightSidebar/> */}

      </div>
   





 
      
        
    </div>
  );
}

{/* <LeftSidebar/>
<PullRequests/>
<RightSidebar/> */}