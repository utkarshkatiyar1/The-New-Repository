"use client"



export default function LeftChatbar() {
   const contacts = [{"name": "user1"}, {"name" : "user2"}, {"name": "user3"}, {"name": "user4"}, {"name": "user5"}]

  return (
    <div className="bg-[#eaeaea] w-[20%]">
        <div>search chat</div>
        <div className="flex flex-col gap-2">
        {contacts.map((person, index)=> <div key={index} className="bg-gray-200">{person.name}</div>)}
        </div>


      
    </div>
  );
}
