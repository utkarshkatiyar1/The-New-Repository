import ProfileTabs from "@/components/ProfileTabs";
import UserCard from "@/components/UserCard";
import { currentUser } from "@clerk/nextjs/server";

const ProfilePage = async ({params, searchParams}) => {
    // const {name} = params
    // console.log(searchParams)
    // const name = searchParams.name;
    // const address = searchParams.address;
    // const price = searchParams.price;
    // const imagePath = decodeURIComponent(searchParams.imagePath);
    // console.log(imagePath)
    const user = await currentUser();


  return (
    <div className="flex flex-col h-full gap-2 w-full">
        <UserCard username={user.username} imageUrl={user.imageUrl} name={user.firstName}/>
        <ProfileTabs/>
        
    </div>
  );
};

export default ProfilePage;
