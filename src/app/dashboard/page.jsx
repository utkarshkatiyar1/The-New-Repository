"use server"
import Image from "next/image";
import { currentUser } from '@clerk/nextjs/server';
import Button from '../../components/Button'
import { redirect } from "next/navigation";
import {DashboardForm} from "../../components/form/DashboardForm"

 const Home = async () => {
    const user = await currentUser();
    if(!user) redirect('/sign-up')
    console.log(user)

  return (
    <div className="flex w-full items-center justify-center mt-[4rem]">
      <DashboardForm/>
      
      
      {/* <Button username={user.username}/> */}
    </div>
  );
}

export default Home
