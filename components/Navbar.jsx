import React, { useState } from "react"
import { Transition } from '@headlessui/react'
import { Link } from "react-scroll"






function Navbar () {
    const [isOpen, setIsOpen] = useState(false);


    const onButtonClick = () => {
        fetch('WediahEmmanuelresume.docx').then(response => {
            response.blob().then(blob => {

                const fileURL = window.URL.createObjectURL(blob);

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'WediahEmmanuelresume.docx';
                alink.click();
            })
        })
    }

	return (
        <nav className=" shadow-lg fixed w-full z-10 bg-white dark:bg-gray-800 dark:text-white">
            <div className="w-full">
                <div className="flex items-center h-20 w-full">
                    <div className="flex items-center  mx-20  justify-between w-full">
                        <div className="flex justify-center items-center flex-shrink-0 ">
                            
                            <Link
                                activeClass="home"
                                to="home"
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                              <h1 className=" font-bold text-xl cursor-pointer -ml-12 font-Zen Dots">
                                <span className="">Wediah</span>
                                <span className="text-cyan-500">Emmanuel</span>
                            </h1>  
                            </Link>
                            
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4 ">
                                
                                <Link
                                    activeClass="skill"
                                    to="skill"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:text-cyan-600 text-black  px-3 py-2 rounded-md text-sm font-medium dark:text-white"
                                >
                                    Skills
                                </Link>
                                <Link
                                    activeClass="services"
                                    to="services"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:text-cyan-600 text-black  px-3 py-2 rounded-md text-sm font-medium dark:text-white"
                                >
                                    Services
                                </Link>
                                <Link
                                    activeClass="portfolio"
                                    to="portfolio"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:text-cyan-600 text-black  px-3 py-2 rounded-md text-sm font-medium dark:text-white"
                                >
                                    Portfolio
                                </Link>
                                <Link
                                    activeClass="experience"
                                    to="experience"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer  text-black hover:text-cyan-600 px-3 py-2 rounded-md text-sm font-medium dark:text-white"
                                >
                                    Experiences
                                </Link>

                                <Link
                                    activeClass="contact"
                                    to="contact"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer  text-black hover:text-cyan-600 px-3 py-2 rounded-md text-sm font-medium dark:text-white"
                                >
                                    Contact
                                </Link>
                                <a onClick={onButtonClick} className="cursor-pointer bg-cyan-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black" href="">Download my resume</a>

                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="mr-10 flex md:hidden ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className=" inline-flex items-center justify-center p-2 rounded-md text-black  dark:text-white font-bold hover:text-cyan-500 focus:outline-none "
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        > 
                        
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>

                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div
                            ref={ref}
                            className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3 dark:bg-gray-800 "
                        >   
                            
                            <Link
                                href="/home"
                                activeClass="home"
                                to="home"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="cursor-pointer hover:text-cyan-500 text-black block px-3 py-2 rounded-md text-base font-medium text-center dark:text-white"
                            >
                                Home
                            </Link>
                            <Link
                                href="/skill"
                                activeClass="skill"
                                to="skill"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="cursor-pointer hover:text-cyan-500 text-black block px-3 py-2 rounded-md text-base font-medium text-center dark:text-white"
                            >
                                Skills
                            </Link>
                            <Link
                                href="/services"
                                activeClass="services"
                                to="services"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="cursor-pointer hover:text-cyan-500 text-black  block px-3 py-2 rounded-md text-base font-medium text-center dark:text-white"
                            >
                                Services
                            </Link>
                            <Link
                                href="/portfolio"
                                activeClass="portfolio"
                                to="portfolio"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="cursor-pointer hover:text-cyan-500 text-black block px-3 py-2 rounded-md text-base font-medium text-center dark:text-white"
                            >
                                Portfolio
                            </Link>
                            <Link
                                href="/experience"
                                activeClass="experience"
                                to="experience"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="cursor-pointer hover:text-cyan-500 text-black  block px-3 py-2 rounded-md text-base font-medium text-center dark:text-white"
                            >
                                Experiences
                            </Link>

                            <Link
                                href="/contact"
                                activeClass="contact"
                                to="contact"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="cursor-pointer bg-cyan-500 hover:bg-black text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center dark:text-white"
                            >
                                Contact
                            </Link>
                            
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
	);
}

export default Navbar;

