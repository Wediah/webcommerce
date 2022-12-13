import Image from 'next/image'
import React from 'react'
import { Element } from "react-scroll"
import beach from '../public/beach2.jpg'


function Homepage () {
    return (
        <Element id="home" name="home">
            <>
                <div style={{
                    zIndex: -1,
                    position: "fixed",
                    width: "100vw",
                    height: "100vh"
                    }}>
                    <Image 
                    src={beach}
                    alt=""
                    layout="fill"
                    objectFit='cover'
                    />
                </div>
                <h1 className='pt-60 text-4xl font-bold text-white text-center'>
                    Vacation anywhere in the world with E&M tours.
                </h1>
                <div>
                    <div>

                    </div>
                </div>
            </>

        </Element>
    );
    
}

export default Homepage;