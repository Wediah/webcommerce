import React from 'react'
import { Element } from 'react-scroll'
import Image from 'next/legacy/image'
import tan from '../public/tanzania.jpg'
import zanzi from '../public/zanzi.jpg'
import { VscActivateBreakpoints } from 'react-icons/vsc'

function About() {
  return (
    <Element id='about' name='about'>
        <div className='min-h-screen bg-white '>
            <h1 className='text-center text-xl font-bold pt-40 '>About Us</h1>
            <div className='flex flex-wrap gap-20 pt-10 flex-row sm:flex-row sm:flex-wrap px-20'>
                <div className='flex basis-1/4 md:basis-3/6'>
                    <span className='bg-blue-500 rounded-full p-5 font-bold text-xl  '>15</span>
                    <p className='ml-2 text-lg font-semibold'> years old <br /> <span className='text-sm font-thin'>in the tourism business</span></p>
                </div>
                <div className='flex basis-1/4'>
                    <span className='bg-blue-500 rounded-full p-5 font-bold text-xl'>1M+</span>
                    <p className='ml-2 text-lg font-semibold'>tourist <br /> <span className='text-sm font-thin'>travel with us <br /> every month</span></p>
                </div>
                <div className='flex basis-1/4'>
                <span className='bg-blue-500 rounded-full p-5 font-bold text-xl'>506</span>
                    <p className='ml-2 text-lg font-semibold'>offices <br /> <span className='text-sm font-thin' > in 100 countries</span> </p>
                </div>
                <div className='flex basis-1/4'>
                    <span className='bg-blue-500 rounded-full p-5 font-bold text-xl'>132</span>
                    <p className='ml-2 text-lg font-semibold'>countries <br /> <span className='text-sm font-thin' >you can visit</span> </p>
                </div>
                <div className='flex basis-1/4'>
                    <span className='bg-blue-500 rounded-full p-5 font-bold text-xl'>98%</span>
                    <p className='ml-2 text-lg font-semibold'>satisfied <br /> <span className='text-sm font-thin' >tourists world wide</span></p>
                </div>
                <div className='flex basis-1/4 md:basis-3/6'>
                    <span className='bg-blue-500 rounded-full p-5 font-bold text-xl'>62</span>
                    <p className='ml-2 text-lg font-semibold'>thousand <br /> <span className='text-sm font-thin'>hotels world wide</span> </p>
                </div>
            </div>
            <h1 className='text-center  mt-20 text-xl font-bold p-5 '>why do people prefer us?</h1>
            <div className="flex flex-col py-10 gap-5 lg:flex-row lg:flex-wrap mx-20">
                <div className='basis-1/3 flex-1'>
                    <ul className='m-5 pt-12' >
                        <li className='pb-5 text-lg flex'> <VscActivateBreakpoints className='text-2xl mr-2 text-orange-500'/>We offer tours to almost any corner of the world. Dreaming of visiting the enjoyment haven of Africa, Accra or the hot carribean beaches? Not a problem</li>
                        <li className='pb-5 text-lg flex'> <VscActivateBreakpoints className='text-2xl mr-2 text-orange-500'/>We take care of customers 24/7. If you have any question or difficulties while traveling. we are always her for you1</li>
                        <li className='pb-5 text-lg flex'> <VscActivateBreakpoints className='text-2xl mr-2 text-orange-500'/>You can buy a tour in installaments from us</li>
                    </ul>
                </div>
                <div className='basis-1/3 flex-1'>
                    <Image alt="" src={tan} className="rounded-lg "/>
                </div>
                <div className='basis-1/3 flex-1'>
                    <Image alt="" src={zanzi} className="rounded-lg "/>
                </div>
                <div className='basis-1/3 flex-1'>
                    <ul className='m-5 pt-16'>
                        <li className='pb-5 text-lg flex'> <VscActivateBreakpoints className='text-2xl mr-2 text-orange-500'/>we work with the most reliable partners to offer the best tours for our beloved clients.</li>
                        <li className='pb-5 text-lg flex'> <VscActivateBreakpoints className='text-2xl mr-2 text-orange-500'/> Current prices on the site and you can purchase a last minute ticket at a very favorable price.</li>
                        <li className='pb-5 text-lg flex'> <VscActivateBreakpoints className='text-2xl mr-2 text-orange-500'/>Cancellation insurance at the request of the client.</li>
                    </ul>
                </div>
                
            </div>
        </div>
    </Element>
  )
}

export default About