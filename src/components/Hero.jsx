"use client"

// import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import Link from "next/link";
import ListingItem from "./ListingItem";
// import img1 from "./assets/"
// import img1 from './dialogbox/Corn.webp'

export default function Hero() {
    SwiperCore.use([Navigation]);
    const onionListings = [
        {_id: 1, imageUrl: "onions/1000_F_678136242_LB3RDaJXWxaTVSpcv4za5d7fwdNz0vhd.jpg", name: "Yellow Onion", address: "kanpur", price: 400},
        {_id: 2, imageUrl: "onions/1000_F_731702005_g4vZriF3sBFRFHmggOLNRKUPKqXWRwX3.jpg", name: "Red onion", address: "Rawatpur", price: 890},
        {_id: 3, imageUrl: "onions/1000_F_936446558_OxLxALP7M1OcXKo33XOLUYsljBjSV0Wn.jpg", name: "Raw onion", address: "Geetanagar", price: 40},
    ]

    const potatoListings =[
      {_id: 4, imageUrl: "potato/potatoes-1585075_1280.jpg", name: "Yellow Potato", address: "Mandhana", price: 40},
      {_id: 5, imageUrl:"potato/potatoes-2329648_1280.jpg", name: "Raw Potato", address: "Lucknow", price: 35},
      {_id: 6, imageUrl:"potato/red potato.jpg", name: "Red Potato", address: "Prayagraj", price: 50}
    ]




  return (
    <div className="">



        <div className=" flex flex-col gap-6 py-28 px-3 max-w-6xl mx-auto">
            <h1 className="text-green-700 font-bold text-3xl lg:text-6xl">
            Find the <span className="text-green-300">Best</span> <br />{" "}
            Seller and Buyer
            </h1>

            <div className="text-green-600 text-xs sm:text-sm">
            Green Room will help you find best seller and buyer of crop of any kind.{" "}
            <br />
            Our expert support are always available.
            </div>

        
        </div>

        {/* <div className="flex w-[90%] items-center justify-center rounded-lg border-2 border-red-700"> */}
            <Swiper  modules={[Autoplay, Navigation]}
            navigation
            autoplay={{ delay: 2600 }}
            loop={true} className="flex w-[90%] items-center justify-center rounded-lg relative">
                {onionListings &&
                onionListings.length > 0 &&
                onionListings.map((listing) => (
                    <SwiperSlide key={listing._id}>
                    <div
                        style={{
                        background: `url('${listing.imageUrl}') center no-repeat`,
                        backgroundSize: "cover",
                        }}
                        className="h-[500px] relative"
                        
                    >
                        <div className="w-[19rem] h-[5rem] absolute left-[27rem] top-[20rem] bg-white/50 flex flex-col items-center justify-center rounded-md text-white  gap-2 p-3">
                        
                        <div className="font-bold text-[1.3rem] w-[6rem] flex items-center justify-center"><span>{listing.name}</span></div>
                        <div>{`We have fresh and clean ${listing.name}`}</div>
                    
                       </div>
                    </div>
                
                    </SwiperSlide>
                ))}

            </Swiper>

        {/* </div> */}

        

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
      {
          onionListings && onionListings.length > 0 && (
            <div>
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">Recent offers on onions</h2>
                <div  className="text-sm text-blue-800 hover:underline">
                  Show more offers
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                {onionListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id}/>
                ))}
              </div>
            </div>
          )
        }
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
      {
          potatoListings && potatoListings.length > 0 && (
            <div>
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">offers on potato</h2>
                <div  className="text-sm text-blue-800 hover:underline">
                  Show more offers
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                {potatoListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id}/>
                ))}
              </div>
            </div>
          )
        }
      </div>
      

      
      
    </div>
  );
}
