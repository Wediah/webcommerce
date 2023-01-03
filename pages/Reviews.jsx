import React from 'react'
import { Element } from 'react-scroll'
import Image from 'next/legacy/image'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import Accra from '../public/Accra.jpg'
import Carousel from 'react-multi-carousel';

function Reviews() {

  return (
    <Element id='reviews' name='reviews'>
        <div className='min-h-screen bg-white px-5 md:px-3'>
            <h1 className='text-center text-2xl font-bold pt-40'>Recent Activity</h1>
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={3000}
              centerMode={false}
              className="gap-5 pb-8 pt-20"
              containerClass="container-padding-bottom"
              dotListClass=""
              draggable
              focusOnSelect
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 3,
                  partialVisibilityGutter: 40
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 2,
                  partialVisibilityGutter: 30
                }
              }}
              rewind={true} mx-5
              rewindWithAnimation={true}
              rtl={false}
              shouldResetAutoplay
              showDots
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
                <div className='bg-white p-5 rounded-lg shadow-xl text-center mx-5'>
                    <div className='relative w-40 h-40 rounded-full m-auto mb-2 '>
                        <Image  alt="" src={Accra} className="block object-cover rounded-full relative" width={"100"}  height={'100'} layout="responsive" />
                        <span className="absolute top-0 right-0 w-10 h-10 grid place-items-center  rounded-full bg-blue-500 m-2  text-white translate-x-5"><FaQuoteRight /> </span>
                    </div>
                    <p className='font-bold text-center text-lg'>Emma W.</p>
                    <p className='text-black text-md  '>Using E&M to plan my holiday was supper nice. <br /> Great customer service </p>

                </div>
                <div className='bg-white p-5 rounded-lg shadow-xl text-center mx-5'>
                    <div className='relative w-40 h-40 rounded-full m-auto mb-2 '>
                        <Image  alt="" src={Accra} className="block object-cover rounded-full relative" width={"100"}  height={'100'} layout="responsive" />
                        <span className="absolute top-0 right-0 w-10 h-10 grid place-items-center  rounded-full bg-blue-500 m-2  text-white translate-x-5"><FaQuoteRight /> </span>
                    </div>
                    <p className='font-bold text-center text-lg'>Emma W.</p>
                    <p className='text-black text-md '>Using E&M to plan my holiday was supper nice. <br /> Great customer service </p>
                </div>
                <div className='bg-white p-5 rounded-lg shadow-xl text-center mx-5'>
                    <div className='relative w-40 h-40 rounded-full m-auto mb-2 '>
                        <Image  alt="" src={Accra} className="block object-cover rounded-full relative" width={"100"}  height={'100'} layout="responsive" />
                        <span className="absolute top-0 right-0 w-10 h-10 grid place-items-center  rounded-full bg-blue-500 m-2  text-white translate-x-5"><FaQuoteRight /> </span>
                    </div>
                    <p className='font-bold text-center text-lg'>Emma W.</p>
                    <p className='text-black text-md '>Using E&M to plan my holiday was supper nice. <br /> Great customer service </p>
                </div>
                <div className='bg-white p-5 rounded-lg shadow-xl text-center mx-5'>
                    <div className='relative w-40 h-40 rounded-full m-auto mb-2 '>
                        <Image  alt="" src={Accra} className="block object-cover rounded-full relative" width={"100"}  height={'100'} layout="responsive" />
                        <span className="absolute top-0 right-0 w-10 h-10 grid place-items-center  rounded-full bg-blue-500 m-2  text-white translate-x-5"><FaQuoteRight /> </span>
                    </div>
                    <p className='font-bold text-center text-lg'>Emma W.</p>
                    <p className='text-black text-md '>Using E&M to plan my holiday was supper nice. <br /> Great customer service </p>
                </div>
                <div className='bg-white p-5 rounded-lg shadow-xl text-center mx-5'>
                    <div className='relative w-40 h-40 rounded-full m-auto mb-2 '>
                        <Image  alt="" src={Accra} className="block object-cover rounded-full relative" width={"100"}  height={'100'} layout="responsive" />
                        <span className="absolute top-0 right-0 w-10 h-10 grid place-items-center  rounded-full bg-blue-500 m-2  text-white translate-x-5"><FaQuoteRight /> </span>
                    </div>
                    <p className='font-bold text-center text-lg'>Emma W.</p>
                    <p className='text-black text-md '>Using E&M to plan my holiday was supper nice. <br /> Great customer service </p>
                </div>
                <div className='bg-white p-5 rounded-lg shadow-xl text-center mx-5'>
                    <div className='relative w-40 h-40 rounded-full m-auto mb-2 '>
                        <Image  alt="" src={Accra} className="block object-cover rounded-full relative" width={"100"}  height={'100'} layout="responsive" />
                        <span className="absolute top-0 right-0 w-10 h-10 grid place-items-center  rounded-full bg-blue-500 m-2  text-white translate-x-5"><FaQuoteRight /> </span>
                    </div>
                    <p className='font-bold text-center text-lg'>Emma W.</p>
                    <p className='text-black text-md '>Using E&M to plan my holiday was supper nice. <br /> Great customer service </p>
                </div>
                <div className='bg-white p-5 rounded-lg shadow-xl text-center mx-5'>
                    <div className='relative w-40 h-40 rounded-full m-auto mb-2 '>
                        <Image  alt="" src={Accra} className="block object-cover rounded-full relative" width={"100"}  height={'100'} layout="responsive" />
                        <span className="absolute top-0 right-0 w-10 h-10 grid place-items-center  rounded-full bg-blue-500 m-2  text-white translate-x-5"><FaQuoteRight /> </span>
                    </div>
                    <p className='font-bold text-center text-lg'>Emma W.</p>
                    <p className='text-black text-md '>Using E&M to plan my holiday was supper nice. <br /> Great customer service </p>
                </div>
                <div className='bg-white p-5 rounded-lg shadow-xl text-center mx-5'>
                    <div className='relative w-40 h-40 rounded-full m-auto mb-2 '>
                        <Image  alt="" src={Accra} className="block object-cover rounded-full relative" width={"100"}  height={'100'} layout="responsive" />
                        <span className="absolute top-0 right-0 w-10 h-10 grid place-items-center  rounded-full bg-blue-500 m-2  text-white translate-x-5"><FaQuoteRight /> </span>
                    </div>
                    <p className='font-bold text-center text-lg'>Emma W.</p>
                    <p className='text-black text-md '>Using E&M to plan my holiday was supper nice. <br /> Great customer service </p>
                </div>
            </Carousel>
        </div>
    </Element>
    
  )
}

export default Reviews