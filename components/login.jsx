import React from 'react'
import Image from 'next/legacy/image';
import bali from '../public/bali.jpg'

function Login() {
  return (
    <div className='min-h-screen'>
      <div className='flex flex-col py-10  lg:flex-row lg:flex-wrap mx-20 bg-white p-10'>
        <div className='basis-1/3 flex-1'>
          <Image src={bali} alt='' className="rounded-xl object-cover absolute " width={'50'} height={'40'} layout="responsive" />
        </div>
      
        <div className='basis-1/3 flex-1  '>
          <span className=' font-bold text-2xl text-orange-500 pl-10 '>Login</span> <br />
          <span className=' text-sm text-gray-400 pl-10'>Welcome back! Please fill in your details.</span>
          <form action="/send-data-here" method="post" className='flex flex-col gap-2 pl-10 pt-5 '>
              <label for="email / phone" className='font-bold text-sm'>email or phone</label>
              <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  minlength="10"
                  className='bg-gray-300 rounded-2xl h-8 w-46'
              />
              <label for="password" className='font-bold text-sm'>password</label>
              <input type="password" id="password" name="password" required className='bg-gray-300 rounded-2xl h-8 w-46'/>
              <button type="submit" className=' bg-orange-500 h-8 w-20 rounded-full font-bold text-white'>log in</button>
          </form>
        </div>
      </div>
      
    </div>
    
  )
}

export default Login;