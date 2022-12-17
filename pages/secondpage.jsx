import React from 'react'
import { Element } from 'react-scroll'
import { AiFillFire } from 'react-icons/ai';
import Image from 'next/image';
import Accra from '../public/Accra.jpg'
import dubia from '../public/Dubia.jpg'
import bali from '../public/bali.jpg'
import greece from '../public/greece.jpg'
import hawaii from '../public/hawaii.jpg'
import italy from '../public/italy.jpg'
import japan from '../public/japan.jpg'
import maldives from '../public/maldives.jpg'
import swizzz from '../public/swizzz.jpg'
import canada from '../public/canada.jpg'
import { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Secondpage() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  
  const Responsive =  {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    }
  };
  

  return (
    <Element id="tours" name="tours">
        <div className='min-h-screen text-white bg-white pt-10 brightness-75 px-20'>
        <h1 className='pt-20 text-2xl font-bold text-black text-center underline decoration-orange-500 '>
          hot tours 
        </h1>
        <Carousel 
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={Responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className='pt-10'
        >
          <div  className=' bg-orange-500 rounded-lg'>
            <Image alt="" src={dubia} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            
            <p className="font-medium text-sm bg-transparent text-center">Dubia, UAE</p>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={bali} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Bali, Asia</p>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={greece} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Greece, Europe</p>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={italy} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Italy, Europe</p>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={hawaii} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Hawaii, USA</p>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={japan} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Japan, Asia</p>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={maldives} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Maldives, Africa</p>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={canada} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Canada, North America</p>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={swizzz} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Switzerland, Europe</p>
          </div>
        </Carousel>

        </div>
    </Element>
  )
}

export default Secondpage;