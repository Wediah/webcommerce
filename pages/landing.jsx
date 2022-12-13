import Image from 'next/image'
import React from 'react'
import { Element } from "react-scroll"
import beach from '../public/beach2.jpg'
import { MdOutlineBed } from 'react-icons/md'
import { TfiHome } from 'react-icons/tfi'
import { HiOutlineTicket } from 'react-icons/hi'
import { IoRestaurantOutline } from 'react-icons/io'


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
                <div className='text-white  inline-flex p-10 object-center'>
                    <div className='p-5 border-solid border-2 border-white rounded-md text-md'>Hotels <MdOutlineBed/> </div>
                    <div className='p-5 border-solid border-2 border-white rounded-md text-md'>Vacation Rentals <TfiHome/> </div>
                    <div className='p-5 border-solid border-2 border-white rounded-md text-md'>Things to do <HiOutlineTicket/> </div>
                    <div className='p-5 border-solid border-2 border-white rounded-md text-md'>Restaurants <IoRestaurantOutline/> </div>
                    <div className='p-5 border-solid border-2 border-white rounded-md text-md'>Travel Stories <TbWorld/> </div>
                    <div className='p-5 border-solid border-2 border-white rounded-md text-md'>More</div>
                    
                </div>
            </>

        </Element>
    );
    
}

export default Homepage;