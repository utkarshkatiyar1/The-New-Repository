"use client"





export default function UserCard({username, imageUrl, firstName}) {
   


  return (
    <div className=" p-3 bg-[#F1F5F9] border-b-[0.09rem] ">

        <div className="flex items-center gap-3">
            <div className="relative w-20 h-20 object-cover">
                <img src={imageUrl} alt='Profile Image' fill className="rounded-full object-cover shadow-2xl"/>
            </div>
            <div className="flex-1">
                <h2 className="text-left text-heading3-bold text-light-1">{firstName}</h2>
                <p className="text-base-medium text-gray-1" >@{username}</p>
            </div>
        </div>
      
    </div>
  );
}
