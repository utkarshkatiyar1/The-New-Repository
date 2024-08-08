
import Image from "next/image";
import { currentUser } from '@clerk/nextjs/server';
import Button from '../../components/Button'
import { redirect } from "next/navigation";

 const Home = async () => {
    const user = await currentUser();
    if(!user) redirect('/sign-up')
    console.log(user)

  return (
    <div>
      
      dashboard
      <Button username={user.username}/>
    </div>
  );
}

export default Home
