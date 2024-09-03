"use client"


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabListingItem from "./TabListingItem";



export default function ProfileTabs() {


    const offerListings = [
        {_id: 1, imageUrl: "/images/Corn.webp", name: "Corn", address: "kanpur", price: 400},
        {_id: 2, imageUrl: "/images/Onions.webp", name: "Onions", address: "Rawatpur", price: 890},
        {_id: 3, imageUrl: "/images/Potatoes.webp", name: "Potatoes", address: "Geetanagar", price: 40},
        {_id: 4, imageUrl: "/images/Tomatoes.jpg", name: "Tomatoes", address: "Swaroop Nagar", price: 200},
    ]
   


  return (
    <div className="w-full min-h-screen">
        <Tabs defaultValue="posts" className="w-full">
            <TabsList className="flex justify-between border-b-2">
                <TabsTrigger className="w-1/3" value="posts">Posts</TabsTrigger>
                <TabsTrigger className="w-1/3" value="activities">Activities</TabsTrigger>
                <TabsTrigger className="w-1/3" value="message">Message</TabsTrigger>
            </TabsList>
            <TabsContent className="flex flex-col gap-2 items-center" value="posts">
                {offerListings.map((listing) => (
                    <TabListingItem name={listing.name} address={listing.address} price={listing.price} imagePath={listing.imageUrl} />
                ))}
            </TabsContent>
            <TabsContent value="activities">activity tab</TabsContent>
            <TabsContent value="message">message tab</TabsContent>
        </Tabs>

     
    </div>
  );
}
