import Image from 'next/image'
import React from 'react'
import { Element } from "react-scroll"
import beach from '../public/beach2.jpg'
import { MdOutlineBed } from 'react-icons/md'
import { TfiHome } from 'react-icons/tfi'
import { HiOutlineTicket } from 'react-icons/hi'
import { IoRestaurantOutline } from 'react-icons/io5'
import { TbWorld } from 'react-icons/tb'
import { TfiMoreAlt } from 'react-icons/tfi'


function Homepage () {
    return (
        <Element id="home" name="home">
            <>
                <div style={{
                    zIndex: -1,
                    position: "fixed",
                    width: "100vw",
                    height: "100vh"
                    }}>
                    <Image className='brightness-50'
                    src={beach}
                    alt=""
                    layout="fill"
                    objectFit='cover'
                    />
                </div>
                <h1 className='pt-40 text-4xl font-bold text-white text-center'>
                    Vacation anywhere in the world with E&M tours.
                </h1>
                <div className='text-white w-screen flex gap-5 px-5 pt-5 justify-center items-center'>
                    <div className='p-5 border-solid border-2 border-white hover:border-black rounded-md text-md inline-flex hover:bg-black hover:text-white '>Hotels <MdOutlineBed className='text-xl ml-10'/> </div>
                    <div className='p-5 border-solid border-2 border-white hover:border-black rounded-md text-md inline-flex hover:bg-black hover:text-white'>Vacation Rentals <TfiHome className='text-xl ml-10'/> </div>
                    <div className='p-5 border-solid border-2 border-white hover:border-black rounded-md text-md inline-flex hover:bg-black hover:text-white'>Things to do <HiOutlineTicket className='text-xl ml-10'/>  </div>
                    <div className='p-5 border-solid border-2 border-white hover:border-black rounded-md text-md inline-flex hover:bg-black hover:text-white'>Restaurants <IoRestaurantOutline className='text-xl ml-10'/> </div>
                    <div className='p-5 border-solid border-2 border-white hover:border-black rounded-md text-md inline-flex hover:bg-black hover:text-white'>Travel Stories <TbWorld className='text-xl ml-10'/> </div>
                    <div className='p-5 border-solid border-2 border-white hover:border-black rounded-md text-md inline-flex hover:bg-black hover:text-white'>More <TfiMoreAlt className='text-xl ml-10'/> </div>
                    
                </div>
            </>

        </Element>
    );
    
}

export default Homepage;