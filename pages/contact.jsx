import React from 'react'
import { Element } from 'react-scroll'

function Contact() {
  return (
    <Element id="contact" name="contact">
        <div className='min-h-screen bg-white'>
            <h1 className='text-center text-xl font-bold pt-40 '>Contact Us</h1>
            <div className=" gap-10 lg:flex pt-10 px-10">
                    <div className="shadow-2xl rounded-3xl text-center p-10 my-10 flex-1 hover:transition hover:scale-95">
                      <h3 className="pt-8 pb-2 text-3xl font-bold">Address</h3>
                      <h4 className="text-md font-semi-bold ">Accra, Ghana</h4>
                    </div>
                    <div className="shadow-2xl rounded-3xl text-center p-10 my-10 flex-1 hover:transition hover:scale-95">
                      <h3 className="pt-8 pb-2 text-3xl font-bold">Email</h3>
                      <a href=""><h4 className="text-md font-semi-bold">infoE&M@gmail.com</h4></a>
                    </div>
                    <div className="shadow-2xl rounded-3xl text-center p-10 py-10 pb-20 flex-1 hover:transition hover:scale-95">
                      <h3 className="pt-8 pb-2 text-3xl font-bold">Phone</h3>
                      <h4 className="text-md font-semi-bold ">(+233) 20 000 1111</h4>
                      <h4 className="text-md font-semi-bold ">(+233) 30 111 2222</h4>
                    </div>
                </div>
        </div>
    </Element>
  )
}

export default Contact