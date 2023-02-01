import React from 'react'
import Image from 'next/legacy/image';
import bali from '../public/bali.jpg'
import {BsApple} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import { useRouter } from 'next/router'

function Login() {

  const router = useRouter()
  
  return (
    <div className='min-h-screen relative flex flex-col justify-center overflow-hidden bg-white py-6 sm:py-12'>
      <div className='relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10'>
        <div className='basis-1/3 flex-1'>
          <Image src={bali} alt='' className="rounded-xl object-cover absolute " width={'50'} height={'40'} layout="responsive" />
        </div>
      
        <div className='basis-1/3 flex-1  '>
          <div className=' font-bold text-2xl text-center text-orange-500 pl-10 pt-10 '>Login</div> 
          <div className=' text-sm text-center text-gray-400 pl-10'>Welcome back! Please fill in your details.</div>
          <div className='mt-5'>
            <form action="">
                <div className='relative mt-6'>
                    <input type="email" name='email' id='email' placeholder='Email Address' className='peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-white' autoComplete='NA' />
                    <label htmlFor="email" className='pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peerr-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800'>Email Address</label>
                </div>
                <div className='relative mt-6'>
                    <input type="password" name='password' id='password' placeholder='Password' className='peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 bg-white  focus:outline-none' />
                    <label htmlFor="password" className='pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peerr-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800'>Password</label>
                </div>
                <div className="my-6">
                    <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</button>
                </div>
                <p className="text-center text-sm text-gray-500">Don&#x27;t have an account yet? <a href="#!" className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none" onClick={() => router.push('/Signup')}>Sign up</a>.</p>
                <p className='text-center text-sm text-gray-500'>or</p>
                <div className='flex gap-5 justify-center mt-2'>
                    <button className='text-sm flex bg-black h-8 text-white p-2 font-semibold rounded-md cursor-pointer'><FcGoogle className='text-lg align-middle mr-1 '/>Sign in with Google</button>
                    <button className='text-sm flex bg-black h-8 text-white p-2 font-semibold rounded-md cursor-pointer'><BsApple className='text-lg align-middle mr-1'/>Continue with Apple</button>
                </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
    
  )
}

export default Login;