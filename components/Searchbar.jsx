import React from 'react'
import {AiOutlineSearch , AiOutlineClose} from 'react-icons/ai'


export default function Searchbar(props) {
  return (
    <div className='flex flex-col w-1/2 h-14 bg-white rounded-full shadow-2xl overflow-hidden text-center mx-auto mt-5'>
      <div className='flex w-full min-h-16 relative items-center px-3'>
        <div className='searchicon'><AiOutlineSearch className='text-2xl align-middle'/></div>
        <input type="text" placeholder='Where to?' className='w-full h-full outline-none border-none text-md font-semibold rounded-full bg-transparent p-4 focus:outline-none placeholder:text-slate-400 placeholder:italic placeholder:focus:opacity-0 placeholder:transition-all placeholder:ease-in-out placeholder:duration-75' />
        <div className='close'><AiOutlineClose className='text-2xl cursor-pointer align-middle'/></div>
        
      </div>
    </div>
  )
}
