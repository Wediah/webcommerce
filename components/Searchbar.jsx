import React, { useEffect, useState, useRef } from 'react'
import {AiOutlineSearch , AiOutlineClose} from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion';
import { useClickOutside } from 'react-click-outside-hook'; 
import { MoonLoader } from 'react-spinners';
import { useDebounce, useDebounceHook } from './debounceHook';
import axios from 'axios';


const containerVariants = {
  expanded: { height: '20rem'},
  collapsed: { height: '3.5rem' },
}

export default function Searchbar(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [parentRef, isClickOustide] = useClickOutside();
  const inputRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(false);

  const changeHandler = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  }

  const expandContainer = () => {
    setExpanded(true);
  }

  const collapseContainer = () => {
    setExpanded(false);
    setSearchQuery("");
    setLoading(false);
    if(inputRef.current)
    inputRef.current.value = "";
  }

  useEffect(() => {
    if (isClickOustide) collapseContainer();
  }, [isClickOustide]);

  const prepareSearchQuery = (query) => {
    const url = `https://restcountries.com/v2/all?q=${query}`;

    return encodeURI(url);
  };

  const searchCountry = async () => {
    if(!searchQuery || searchQuery.trim() === "" ) return;

    setLoading(true);

    const URL = prepareSearchQuery(searchQuery);

    const response = await axios.get(URL).catch((err) => {
      console.log("Error: ", err);
    });

    if(response) {
      console.log("Response: ", response.data);
    }

    setLoading(false);

  }

  useDebounce(searchQuery, 500, searchCountry)

  console.log ('value: ', searchQuery);

  return (
    <motion.div className='flex flex-col w-1/2 h-14 bg-white rounded-3xl shadow-2xl overflow-hidden text-center mx-auto mt-5' animate={isExpanded ? 'expanded' : 'collapsed'} variants={containerVariants} ref={parentRef}>
      <div className='flex w-full min-h-16 relative items-center px-3' >
        <div className='searchicon'><AiOutlineSearch className='text-2xl align-middle'/></div>
        <input type="text" placeholder='Where to?' className='w-full h-full outline-none border-none text-md font-semibold rounded-full bg-transparent p-4 focus:outline-none placeholder:text-slate-400 placeholder:italic placeholder:focus:opacity-0 placeholder:transition-all placeholder:ease-in-out placeholder:duration-75' onFocus={expandContainer} ref={inputRef} value={searchQuery} onChange={changeHandler}/>
        <AnimatePresence>{isExpanded && (<motion.span key='close-icon' initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{ duration: 0.2 }} className='close'><AiOutlineClose className='text-2xl cursor-pointer align-middle hover:text-slate-600' onClick={collapseContainer}/></motion.span>)}</AnimatePresence>
      </div>
      <AnimatePresence>{isExpanded && (<div className='flex min-w-full min-h-[1px] bg-slate-300'></div>)}</AnimatePresence>
      
      <div className='w-full h-full flex flex-col p-2 text-left'>
        <div className='w-full h-full flex items-center justify-center'>
          {isLoading && (
            <MoonLoader loading color="#000" size={20}/>
          )}
        </div>
      </div>
    </motion.div>
  )
}
