import Link from 'next/link'
import React from 'react'
// import { Link } from 'next/link'
import {MdLocationOn} from 'react-icons/md'

const ChatListingItem = ({name, address, price, imagePath}) => {
    

  return (
    <div className='bg-white shadow-md hover:scale-105 transition-scale duration-300 overflow-hidden rounded-lg w-[80%] border h-[7rem]'>
        <div className='flex p-3'>
            <img src={imagePath} alt='listing cover' className='h-[5rem]  object-cover rounded-lg'/>

            <div className='flex p-3'>
                <div className=' flex flex-col gap-2 w-full '>
                    <p className='truncate text-lg font-semibold text-slate-700'>{name}</p>

                    <div className='flex items-center gap-1'>
                        <MdLocationOn className='h-4 w-4 text-green-700'/>
                        <p className='text-sm text-gray-600 truncate w-full'>{address}</p>
                    </div>

                    <p className='text-sm text-gray-600 line-clamp-2'></p>

                </div>
                

                <p className='text-sm text-slate-500 mt-2 font-semibold w-[7rem]'>
                     ₹
                    {`${price.toLocaleString('en-Us')} / kg`}
             
                </p>
          

      

            </div>
        </div>
    </div>
  )
}

export default ChatListingItem