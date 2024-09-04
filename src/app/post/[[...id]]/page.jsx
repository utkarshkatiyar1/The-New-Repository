import { PostListForm } from "@/components/form/PostListForm";
import ProfileTabs from "@/components/ProfileTabs";
import UserCard from "@/components/UserCard";
import { currentUser } from "@clerk/nextjs/server";

const PostPage = async ({params, searchParams}) => {
    // const {name} = params
    // console.log(searchParams)
    // const name = searchParams.name;
    // const address = searchParams.address;
    // const price = searchParams.price;
    // const imagePath = decodeURIComponent(searchParams.imagePath);
    // console.log(imagePath)
    const user = await currentUser();


  return (
    <div className="flex h-full w-full items-center justify-center">
        
        <PostListForm/>
    </div>
  );
};

export default PostPage;
