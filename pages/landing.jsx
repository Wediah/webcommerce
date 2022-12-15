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
import Searchbar from '../components/Searchbar'
import { Popover } from '@headlessui/react'
import { Fragment } from 'react'




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
                    <Popover>
                    <Popover.Button className='p-5 border-solid border-2 border-white hover:border-black rounded-md text-md inline-flex hover:bg-black hover:text-white  h-20 cursor-pointer'>Hotels <MdOutlineBed className='text-3xl ml-10'/> </Popover.Button>
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"><Searchbar/></Popover.Panel>
                    </Popover>

                    <Popover>
                    <Popover.Button className='p-5 border-solid border-2 border-white hover:border-black rounded-md text-md inline-flex hover:bg-black hover:text-white h-20 cursor-pointer'>Vacation Rentals <TfiHome className='text-3xl ml-10'/> </Popover.Button>
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"><Searchbar/></Popover.Panel>
                    </Popover>
                    
                    <Popover>
                    <Popover.Button className='p-5 border-solid border-2 border-white hover:border-black rounded-md text-md inline-flex hover:bg-black hover:text-white h-20 cursor-pointer'>Things to do <HiOutlineTicket className='text-3xl ml-10'/>  </Popover.Button>
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"><Searchbar/></Popover.Panel>
                    </Popover>
                    
                    <Popover>
                    <Popover.Button className='p-5 border-solid border-2 border-white hover:border-black rounded-md text-md inline-flex hover:bg-black hover:text-white h-20 cursor-pointer'>Restaurants <IoRestaurantOutline className='text-3xl ml-10'/> </Popover.Button>
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"><Searchbar/></Popover.Panel>
                    </Popover>
                    
                    <Popover>
                    <Popover.Button className='p-5 border-solid border-2 border-white hover:border-black rounded-md text-md inline-flex hover:bg-black hover:text-white h-20 cursor-pointer'>Travel Stories <TbWorld className='text-3xl ml-10'/> </Popover.Button>
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"><Searchbar/></Popover.Panel>
                    </Popover>
                    
                    <Popover>
                    <Popover.Button className='p-5 border-solid border-2 border-white hover:border-black rounded-md text-md inline-flex hover:bg-black hover:text-white h-20 cursor-pointer'>More <TfiMoreAlt className='text-3xl ml-10'/> </Popover.Button>
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"><Searchbar/></Popover.Panel>
                    </Popover>
                    
                    
                </div>
                <Searchbar/>
                
                
            </>

        </Element>
    );
    
}

export default Homepage;