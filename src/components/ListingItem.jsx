import Link from 'next/link'
import React from 'react'
// import { Link } from 'next/link'
import {MdLocationOn} from 'react-icons/md'

const ListingItem = ({listing}) => {
    const id = listing._id
  return (
    <div className='bg-white shadow-md hover:scale-105 transition-scale duration-300 overflow-hidden rounded-lg w-full sm:w-[330px] border'>
        <div className='p-3'>
            <img src={listing.imageUrl} alt='listing cover' className='h-[320px] sm:h-[220px] w-full object-cover rounded-lg'/>

            <div className='p-3 flex flex-col gap-2 w-full'>
                <p className='truncate text-lg font-semibold text-slate-700'>{listing.name}</p>

                <div className='flex items-center gap-1'>
                    <MdLocationOn className='h-4 w-4 text-green-700'/>
                    <p className='text-sm text-gray-600 truncate w-full'>{listing.address}</p>
                </div>
          
                <p className='text-sm text-gray-600 line-clamp-2'>{listing.description}</p>

                <p className='text-sm text-slate-500 mt-2 font-semibold'>
                     ₹
                    {listing.price.toLocaleString('en-Us')}
                    {' / kg'}
                </p>
                <Link href={`/chat/${id}?name=${listing.name}&imagePath=${encodeURIComponent(listing.imageUrl)}&address=${listing.address}&price=${listing.price}`} className='text-white bg-green-600 rounded-md p-2 flex w-[6rem] items-center justify-center hover:shadow-lg hover:border-2 hover:border-green-600 hover:bg-white hover:text-green-600 cursor-pointer'><span>Negotiate</span></Link>

      

            </div>
        </div>
    </div>
  )
}

export default ListingItem