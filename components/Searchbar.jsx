import React, { useEffect, useState, useRef } from 'react'
import {AiOutlineSearch , AiOutlineClose} from 'react-icons/ai'
import { motion } from 'framer-motion';
import { useClickOutside } from 'react-click-outside-hook'; 


const containerVariants = {
  expanded: { height: '20rem'},
  collapsed: { height: '3.5rem' },
}

export default function Searchbar(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [parentRef, isClickOustide] = useClickOutside();
  const inputRef = useRef();

  const expandContainer = () => {
    setExpanded(true);
  }

  const collapseContainer = () => {
    setExpanded(false);
    if(inputRef.current)
    inputRef.current.value = "";
  }

  useEffect(() => {
    if (isClickOustide) collapseContainer();}, [isClickOustide]);

  return (
    <motion.div className='flex flex-col w-1/2 h-14 bg-white rounded-3xl shadow-2xl overflow-hidden text-center mx-auto mt-5' animate={isExpanded ? 'expanded' : 'collapsed'} variants={containerVariants} ref={parentRef}>
      <div className='flex w-full min-h-16 relative items-center px-3' >
        <div className='searchicon'><AiOutlineSearch className='text-2xl align-middle'/></div>
        <input type="text" placeholder='Where to?' className='w-full h-full outline-none border-none text-md font-semibold rounded-full bg-transparent p-4 focus:outline-none placeholder:text-slate-400 placeholder:italic placeholder:focus:opacity-0 placeholder:transition-all placeholder:ease-in-out placeholder:duration-75' onFocus={expandContainer} ref={inputRef} />
        <div className='close'><AiOutlineClose className='text-2xl cursor-pointer align-middle hover:text-slate-600' onClick={collapseContainer}/></div>
        
      </div>
    </motion.div>
  )
}
