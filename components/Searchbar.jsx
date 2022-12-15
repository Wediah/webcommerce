import React, { useEffect, useState, useRef } from 'react'
import {AiOutlineSearch , AiOutlineClose} from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion';
import { useClickOutside } from 'react-click-outside-hook'; 
import { MoonLoader } from 'react-spinners';
import { useDebounce, useDebounceHook } from './debounceHook';
import axios from 'axios';
import { CountryName } from './country';


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
  const [countryName, setCountryName] = useState([]);
  const [noCountryName, setNoCountryName] = useState(false);


  const isEmpty = !countryName || countryName.lenght === 0;

  const changeHandler = (e) => {
    e.preventDefault();
    if (e.target.value.trim() === "") setNoCountryName(false);

    setSearchQuery(e.target.value);
  }

  const expandContainer = () => {
    setExpanded(true);
  }

  const collapseContainer = () => {
    setExpanded(false);
    setSearchQuery("");
    setLoading(false);
    setNoCountryName(false);
    setCountryName([]);
    if(inputRef.current) inputRef.current.value = "";
  }

  useEffect(() => {
    if (isClickOustide) collapseContainer();
  }, [isClickOustide]);

  const prepareSearchQuery = (query) => {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;

    return encodeURI(url);
  };

  const searchCountry = async () => {
    if(!searchQuery || searchQuery.trim() === "" ) return;

    setLoading(true);
    setNoCountryName(true);

    const URL = prepareSearchQuery(searchQuery);

    const response = await axios.get(URL).catch((err) => {
      console.log("Error: ", err);
    });

    if(response) {
      console.log("Response: ", response.data);
      if (response.data && response.data.lenght === 0) setNoCountryName(true);


      setCountryName(response.data);
    }

    setLoading(false);

  }

  useDebounce(searchQuery, 500, searchCountry)

  

  return (
    <motion.div className='flex flex-col w-1/2 h-14 bg-white rounded-3xl shadow-2xl overflow-hidden text-center mx-auto mt-5 ' animate={isExpanded ? 'expanded' : 'collapsed'} variants={containerVariants} ref={parentRef} >
      <div className='flex w-full min-h-16 relative items-center px-3' >
        <div className='searchicon'><AiOutlineSearch className='text-2xl align-middle'/></div>
        <input type="text" placeholder='Where to?' className='w-full h-full outline-none border-none text-md font-semibold rounded-full bg-transparent p-4 focus:outline-none placeholder:text-slate-400 placeholder:italic placeholder:focus:opacity-0 placeholder:transition-all placeholder:ease-in-out placeholder:duration-75' onFocus={expandContainer} ref={inputRef} value={searchQuery} onChange={changeHandler}/>
        <AnimatePresence>{isExpanded && (<motion.span key='close-icon' initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{ duration: 0.2 }} className='close'><AiOutlineClose className='text-2xl cursor-pointer align-middle hover:text-slate-600' onClick={collapseContainer}/></motion.span>)}</AnimatePresence>
      </div>
      <AnimatePresence>{isExpanded && (<div className='flex min-w-full min-h-[1px] bg-slate-300'></div>)}</AnimatePresence>
      
      <div className='w-full h-full flex flex-col p-2 text-left overflow-auto'>
        <div className='w-full h-full flex items-center justify-center'>
          {isLoading && (
            <MoonLoader loading color="#000" size={20}/>
          )}
        </div>
        <div className='w-full h-full flex items-center justify-center'>
          {!isLoading && isEmpty && !noCountryName && (
            <span className='text-md text-black pt-5 font-bold animate-pulse'>a journey of a life time starts with a search</span>
          )}
        </div>
        <div className='w-full h-full flex items-center justify-center'>
          {!isLoading && noCountryName && (
            <span className='text-md text-black pb-24  font-bold animate-pulse'>emmmm we can't find your destination</span>
          )}
        </div>
        {!isLoading && !isEmpty && ( 
          <>
            {countryName.map(({show}) => (
              <CountryName
              key={show.id}
              thumbnailSrc={show.image && show.image.medium}
              name={show.name}
              rating={show.rating && show.rating.average}
              />
            ))}
          
          </>
        )}
      </div>
    </motion.div>
  )
}
