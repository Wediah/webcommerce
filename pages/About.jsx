import React from 'react'
import { Element } from 'react-scroll'

function About() {
  return (
    <Element id='about' name='about'>
        <div className='min-h-screen bg-white '>
            <h1 className='text-center text-xl font-bold pt-40 '>About Us</h1>
            <div className='flex flex-wrap mx-40 gap-20 pt-10'>
                <div className='flex basis-1/4'>
                    <span className='bg-gray-500 rounded-full p-5 font-bold text-xl  '>15</span>
                    <p className='ml-2 text-lg font-semibold'> years old <br /> <span className='text-sm font-thin'>in the tourism business</span></p>
                </div>
                <div className='flex basis-1/4'>
                    <span className='bg-gray-500 rounded-full p-5 font-bold text-xl'>1M+</span>
                    <p className='ml-2 text-lg font-semibold'>tourist <br /> <span className='text-sm font-thin'>travel with us <br /> every month</span></p>
                </div>
                <div className='flex basis-1/4'>
                <span className='bg-gray-500 rounded-full p-5 font-bold text-xl'>506</span>
                    <p className='ml-2 text-lg font-semibold'>offices <br /> <span className='text-sm font-thin' > in 100 countries</span> </p>
                </div>
                <div className='flex basis-1/4'>
                    <span className='bg-gray-500 rounded-full p-5 font-bold text-xl'>132</span>
                    <p className='ml-2 text-lg font-semibold'>countries <br /> <span className='text-sm font-thin' >you can visit</span> </p>
                </div>
                <div className='flex basis-1/4'>
                    <span className='bg-gray-500 rounded-full p-5 font-bold text-xl'>98%</span>
                    <p className='ml-2 text-lg font-semibold'>satisfied <br /> <span className='text-sm font-thin' >tourists world wide</span></p>
                </div>
                <div className='flex basis-1/4'>
                    <span className='bg-gray-500 rounded-full p-5 font-bold text-xl'>62</span>
                    <p className='ml-2 text-lg font-semibold'>thousand <br /> <span className='text-sm font-thin'>hotels world wide</span> </p>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default About