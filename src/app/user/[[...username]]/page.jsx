import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import { currentUser } from '@clerk/nextjs/server';
import Image from "next/image";
import { redirect } from 'next/navigation';

export default async function Home() {
    const user = await currentUser();
    if(!user) {
        redirect('/')
    }

  return (
   
    <div className='flex w-full min-h-screen'>
        <LeftSidebar/>
        <div className='w-[60%]'>{user.username}</div>
        <RightSidebar/>
    </div>
  );
}
