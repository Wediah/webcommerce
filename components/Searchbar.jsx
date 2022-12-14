import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { useState } from "react";


function Searchbar() {
  return (
    <div className=' text-center p-10 '>
      <form action="" className='bg-transparent shadow-2xl'>
        
        <input type="text" placeholder='Your next destination ' className="search w-3/4 h-10 rounded-full " />
        <button type='submit' className=' p-3 h-10 text-white'><BsSearch/></button>
      </form>
    </div>
  )
}

export default Searchbar