import React from 'react'
import { Element } from 'react-scroll'
import { AiFillFire, AiFillStar } from 'react-icons/ai';
import Image from 'next/legacy/image';
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
import cape from '../public/cape.jpg'
import elmina from '../public/elmina.jpg'
import indep from '../public/independence2.jpg'
import kakum from '../public/kakum.webp'
import nk from '../public/knkrumah1.png'
import lara from '../public/larabanga.jpg'
import night from '../public/nightlife.jpg'
import osu from '../public/osu.jpg'
import prin from '../public/princess.jpg'
import { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { SlArrowLeft, SlArrowRight} from 'react-icons/sl'
import { motion, AnimatePresence } from 'framer-motion'

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
      partialVisibilityGutter: 30
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };
  

  return (
    <Element id="tours" name="tours">
        <div className='min-h-screen text-white bg-blue-200 pt-20  px-20'>
        <h1 className='pt-20 text-2xl font-bold text-black text-left flex '>
          hot tours <AiFillFire className='align-middle text-red-600 text-3xl'/>
        </h1>
        <Carousel 
         additionalTransfrom={0}
         arrows={true}
         autoPlaySpeed={3000}
         centerMode={true}
         className="pb-10 pt-5"
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
        responsive={Responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image  alt="" src={Accra} className="rounded-lg object-cover " width={"100"}  height={'100'} layout="responsive" />
            
            <p className="font-medium text-sm bg-transparent text-center">Accra, Ghana</p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image  alt="" src={dubia} className="rounded-lg object-cover " width={"100"}  height={'100'} layout="responsive" />
            
            <p className="font-medium text-sm bg-transparent text-center">Dubia, UAE</p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={bali} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Bali, Asia</p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={greece} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Greece, Europe</p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={italy} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Italy, Europe</p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={hawaii} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Hawaii, USA</p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={japan} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Japan, Asia</p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={maldives} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Maldives, Africa</p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={canada} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Canada, North America</p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={swizzz} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Switzerland, Europe</p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
        </Carousel>

        <h1 className='pt-20 text-2xl font-bold text-black text-left flex'>
          Black Star Vibes <AiFillStar className='align-middle text-black text-3xl'/>
        </h1>
        <Carousel 
        additionalTransfrom={0}
        arrows={true}
        autoPlaySpeed={3000}
        centerMode={true}
        className="pb-20 pt-5"
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
        responsive={Responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        
        >
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image  alt="" src={Accra} className="rounded-lg object-cover " width={"100"}  height={'100'} layout="responsive" />
            
            <p className="font-medium text-sm bg-transparent text-center">Visit Jamestown lighthouse, Accra</p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image  alt="" src={cape} className="rounded-lg object-cover " width={"100"}  height={'100'} layout="responsive" />
            
            <p className="font-medium text-sm bg-transparent text-center">Visit the Cape Coast Castle, Cape Coast</p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={elmina} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Visit Elmina Castle, Elmina</p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={indep} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Visit the independence Square, Accra</p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={kakum} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Visit Kakum National Park</p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={nk} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Visit the Kwame Nkrumah Museum</p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={lara} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Visit the Larabanga Mosque</p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={night} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Visit Aboche's Joint</p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={osu} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Visit the Osu Castle, Accra</p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
          <div  className=' bg-orange-500 rounded-lg mx-2'>
            <Image alt="" src={prin} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
            <p className="font-medium text-sm bg-transparent text-center">Experience the beautiful Princess Town </p>
            <h1 className='text-center text-sm cursor-pointer hover:transition hover:scale-75 hover:text-black'>explore now</h1>
          </div>
        </Carousel>

        </div>
    </Element>
  )
}

export default Secondpage;