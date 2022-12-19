import React, { useState } from "react"
import { Transition } from '@headlessui/react'
import { Link } from "react-scroll"
import Image from "next/image";
import travel from "../public/travel.png"






function Navbar () {
    const [isOpen, setIsOpen] = useState(false);


	return (
        <nav className="fixed w-full z-20 bg-white shadow-2xl rounded-full">
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
                              <div className="  cursor-pointer -ml-12">
                                <Image 
                                src={travel}
                                width={40}
                                />
                                <h1 className=" font-bold text-sm cursor-pointer ml-1">
										<span className="text-black">E&M</span>
									</h1>
                                </div> 
                                
                            </Link>
                            
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4 ">
                                
                                <Link
                                    activeClass="home"
                                    to="home"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer text-black hover:underline hover:decoration-orange-400 hover:decoration-4   px-3 py-2 rounded-md text-md font-medium "
                                >
                                    home
                                </Link>
                                <Link
                                    activeClass="tours"
                                    to="tours"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:underline hover:decoration-orange-400 hover:decoration-4 text-black  px-3 py-2 rounded-md text-md font-medium "
                                >
                                    tours
                                </Link>
                                <Link
                                    activeClass="about"
                                    to="about"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:underline hover:decoration-orange-400 hover:decoration-4 text-black  px-3 py-2 rounded-md text-md font-medium "
                                >
                                    about us
                                </Link>

                                <Link
                                    activeClass="contact"
                                    to="contact"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer  text-black hover:underline hover:decoration-orange-400 hover:decoration-4 px-3 py-2 rounded-md text-md font-medium "
                                >
                                    contact us
                                </Link>
                                

                            </div>
                            
                        </div>

                        <div className="flex justify-center items-center flex-shrink-0 text-white">
                            <button className="text-sm border-solid border-2 border-orange-400 p-2 px-3 py-1 rounded-full text-black font-bold">log in</button>
                            <button className="text-sm border-solid border-2 border-orange-400 p-2 px-3 py-1 rounded-full ml-2 text-black bg-orange-400 font-bold">register</button>
                        </div>
                        
                    </div>
                    <div className="mr-10 flex md:hidden ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className=" inline-flex items-center justify-center p-2 rounded-md text-black   font-bold hover:text-cyan-500 focus:outline-none "
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
                            className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3  "
                        >   
                            
                            <Link
                                href="/home"
                                activeClass="home"
                                to="home"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="cursor-pointer hover:text-orange-400 text-black block px-3 py-2 rounded-md text-base font-medium text-center"
                            >
                                home
                            </Link>
                            <Link
                                href="/tours"
                                activeClass="tours"
                                to="tours"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="cursor-pointer hover:text-orange-400 text-black block px-3 py-2 rounded-md text-base font-medium text-center"
                            >
                                tours
                            </Link>
                            <Link
                                href="/about"
                                activeClass="about"
                                to="about"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="cursor-pointer hover:text-orange-400 text-black  block px-3 py-2 rounded-md text-base font-medium text-center"
                            >
                                about us
                            </Link>
                            
                            <Link
                                href="/contact"
                                activeClass="contact"
                                to="contact"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="cursor-pointer  text-black hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium text-center"
                            >
                                contact us
                            </Link>
                            
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
	);
}

export default Navbar;

