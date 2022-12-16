import React from 'react'
import { Element } from 'react-scroll'
import { AiFillFire } from 'react-icons/ai';
import Image from 'next/image';
import Accra from '../public/Accra.jpg'
import dubia from '../public/Dubia.jpg'
import bali from '../public/bali.jpg'
import greece from '../public/greece.jpg'
import hawaii from '../public/hawaii.jpg'
import italy from '../public/italy.jpg'
import japan from '../public/japan.jpg'
import maldives from '../public/maldives.jpg'
import swizzz from '../public/swizzz.jpg'
import canada from '../public/canada.jpg'

function Secondpage() {
  return (
    <Element id="tours" name="tours">
        <div className='min-h-screen text-white bg-white pt-10 brightness-75 px-20'>
          <p className='z-10 text-black'>Accra</p>
        <h1 className='pt-20 text-2xl font-medium text-black  inline-flex items-center mx-60'>
          h<AiFillFire className=' text-md text-red-500 '/>t tours 
        </h1>
        <div className='flex flex-col py-10 gap-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1 bg-orange-500 rounded-lg'>
            <Image alt="" src={Accra} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <button className="font-medium text-2xl bg-transparent text-center">book now</button>
          </div>
          <div className='basis-1/3 flex-1 bg-orange-500 rounded-lg'>
            <Image alt="" src={dubia} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <button className="font-medium text-2xl bg-transparent text-center">book now</button>
          </div>
          <div className='basis-1/3 flex-1 bg-orange-500 rounded-lg'>
            <Image alt="" src={bali} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <button className="font-medium text-2xl bg-transparent text-center">book now</button>
          </div>
          <div className='basis-1/3 flex-1 bg-orange-500 rounded-lg'>
            <Image alt="" src={greece} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <button className="font-medium text-2xl bg-transparent text-center">book now</button>
          </div>
          <div className='basis-1/3 flex-1 bg-orange-500 rounded-lg'>
            <Image alt="" src={italy} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <button className="font-medium text-2xl bg-transparent text-center">book now</button>
          </div>
          <div className='basis-1/3 flex-1 bg-orange-500 rounded-lg'>
            <Image alt="" src={hawaii} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <button className="font-medium text-2xl bg-transparent text-center">book now</button>
          </div>
          <div className='basis-1/3 flex-1 bg-orange-500 rounded-lg'>
            <Image alt="" src={japan} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <button className="font-medium text-2xl bg-transparent text-center">book now</button>
          </div>
          <div className='basis-1/3 flex-1 bg-orange-500 rounded-lg'>
            <Image alt="" src={maldives} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <button className="font-medium text-2xl bg-transparent text-center">book now</button>
          </div>
          <div className='basis-1/3 flex-1 bg-orange-500 rounded-lg'>
            <Image alt="" src={canada} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <button className="font-medium text-2xl bg-transparent text-center">book now</button>
          </div>
          <div className='basis-1/3 flex-1 bg-orange-500 rounded-lg'>
            <Image alt="" src={swizzz} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <button className="font-medium text-2xl bg-transparent text-center">book now</button>
          </div>
        </div>

        </div>
    </Element>
  )
}

export default Secondpage;