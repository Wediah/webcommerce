import React from 'react'
import { Element } from 'react-scroll'
import Image from 'next/legacy/image'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import Accra from '../public/Accra.jpg'
import Carousel from 'react-multi-carousel';

function Reviews() {

  return (
    <Element id='reviews' name='reviews'>
        <div className=' bg-white px-5 md:px-3'>
            <h1 className='text-black px-5 text-3xl font-bold pt-40'>Recent Activity</h1>
            <div className="gap-3 pb-8 pt-20 grid lg:grid-cols-4">
                <div className='bg-white p-5 rounded-lg shadow-xl text-center mx-5'>
                    <div className='relative w-40 h-40 rounded-full m-auto mb-2 '>
                        <Image  alt="" src={Accra} className="block object-cover rounded-full relative" width={"100"}  height={'100'} layout="responsive" />
                        <span className="absolute top-0 right-0 w-10 h-10 grid place-items-center  rounded-full shadow-2xl bg-orange-600 m-2  text-white translate-x-5"><FaQuoteRight /> </span>
                    </div>
                    <p className='font-bold text-center text-lg'>Emma W.</p>
                    <p className='text-black text-md  '>Using E&M to plan my holiday was supper nice. <br /> Great customer service </p>

                </div>
                <div className='bg-white p-5 rounded-lg shadow-xl text-center mx-5'>
                    <div className='relative w-40 h-40 rounded-full m-auto mb-2 '>
                        <Image  alt="" src={Accra} className="block object-cover rounded-full relative" width={"100"}  height={'100'} layout="responsive" />
                        <span className="absolute top-0 right-0 w-10 h-10 grid place-items-center shadow-2xl rounded-full bg-orange-500 m-2  text-white translate-x-5"><FaQuoteRight /> </span>
                    </div>
                    <p className='font-bold text-center text-lg'>Emma W.</p>
                    <p className='text-black text-md '>Using E&M to plan my holiday was supper nice. <br /> Great customer service </p>
                </div>
                <div className='bg-white p-5 rounded-lg shadow-xl text-center mx-5'>
                    <div className='relative w-40 h-40 rounded-full m-auto mb-2 '>
                        <Image  alt="" src={Accra} className="block object-cover rounded-full relative" width={"100"}  height={'100'} layout="responsive" />
                        <span className="absolute top-0 right-0 w-10 h-10 grid place-items-center shadow-2xl rounded-full bg-orange-500 m-2  text-white translate-x-5"><FaQuoteRight /> </span>
                    </div>
                    <p className='font-bold text-center text-lg'>Emma W.</p>
                    <p className='text-black text-md '>Using E&M to plan my holiday was supper nice. <br /> Great customer service </p>
                </div>
                <div className='bg-white p-5 rounded-lg shadow-xl text-center mx-5'>
                    <div className='relative w-40 h-40 rounded-full m-auto mb-2 '>
                        <Image  alt="" src={Accra} className="block object-cover rounded-full relative" width={"100"}  height={'100'} layout="responsive" />
                        <span className="absolute top-0 right-0 w-10 h-10 grid place-items-center shadow-2xl rounded-full bg-orange-500 m-2  text-white translate-x-5"><FaQuoteRight /> </span>
                    </div>
                    <p className='font-bold text-center text-lg'>Emma W.</p>
                    <p className='text-black text-md '>Using E&M to plan my holiday was supper nice. <br /> Great customer service </p>
                </div>
                <div className='bg-white p-5 rounded-lg shadow-xl text-center mx-5'>
                    <div className='relative w-40 h-40 rounded-full m-auto mb-2 '>
                        <Image  alt="" src={Accra} className="block object-cover rounded-full relative" width={"100"}  height={'100'} layout="responsive" />
                        <span className="absolute top-0 right-0 w-10 h-10 grid place-items-center shadow-2xl rounded-full bg-orange-500 m-2  text-white translate-x-5"><FaQuoteRight /> </span>
                    </div>
                    <p className='font-bold text-center text-lg'>Emma W.</p>
                    <p className='text-black text-md '>Using E&M to plan my holiday was supper nice. <br /> Great customer service </p>
                </div>
                <div className='bg-white p-5 rounded-lg shadow-xl text-center mx-5'>
                    <div className='relative w-40 h-40 rounded-full m-auto mb-2 '>
                        <Image  alt="" src={Accra} className="block object-cover rounded-full relative" width={"100"}  height={'100'} layout="responsive" />
                        <span className="absolute top-0 right-0 w-10 h-10 grid place-items-center shadow-2xl rounded-full bg-orange-500 m-2  text-white translate-x-5"><FaQuoteRight /> </span>
                    </div>
                    <p className='font-bold text-center text-lg'>Emma W.</p>
                    <p className='text-black text-md '>Using E&M to plan my holiday was supper nice. <br /> Great customer service </p>
                </div>
                <div className='bg-white p-5 rounded-lg shadow-xl text-center mx-5'>
                    <div className='relative w-40 h-40 rounded-full m-auto mb-2 '>
                        <Image  alt="" src={Accra} className="block object-cover rounded-full relative" width={"100"}  height={'100'} layout="responsive" />
                        <span className="absolute top-0 right-0 w-10 h-10 grid place-items-center shadow-2xl rounded-full bg-orange-500 m-2  text-white translate-x-5"><FaQuoteRight /> </span>
                    </div>
                    <p className='font-bold text-center text-lg'>Emma W.</p>
                    <p className='text-black text-md '>Using E&M to plan my holiday was supper nice. <br /> Great customer service </p>
                </div>
                <div className='bg-white p-5 rounded-lg shadow-xl text-center mx-5'>
                    <div className='relative w-40 h-40 rounded-full m-auto mb-2 '>
                        <Image  alt="" src={Accra} className="block object-cover rounded-full relative" width={"100"}  height={'100'} layout="responsive" />
                        <span className="absolute top-0 right-0 w-10 h-10 grid place-items-center shadow-2xl rounded-full bg-orange-500 m-2  text-white translate-x-5"><FaQuoteRight /> </span>
                    </div>
                    <p className='font-bold text-center text-lg'>Emma W.</p>
                    <p className='text-black text-md '>Using E&M to plan my holiday was supper nice. <br /> Great customer service </p>
                </div>
            </div>
        </div>
    </Element>
    
  )
}

export default Reviews