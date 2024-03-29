import React from 'react'
import { Element } from 'react-scroll'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin, AiFillWechat, AiOutlineWhatsApp} from 'react-icons/ai'
import {FaFacebookMessenger, FaTiktok } from 'react-icons/fa'
import { CiLocationOn } from 'react-icons/ci'
import {CgMail} from 'react-icons/cg'
import {BsTelephone} from 'react-icons/bs'
import {GrContactInfo} from 'react-icons/gr'
import {FiArrowRight} from 'react-icons/fi'
 
function Contact() {
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
  
      // Get data from the form.
      const data = {
        first: event.target.first.value,
        last: event.target.last.value,
      }
  
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
  
      // API endpoint where we send form data.
      const endpoint = '/api/form'
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }
  
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options)
  
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()
      alert(`Is this your full name: ${result.data}`)
    }
  return (
    <Element id="contact" name="contact">
        <div className='min-h-screen bg-white  pt-36 pb-5'>
            <h1 className='text-3xl text-white font-bold px-10 bg-orange-500 pt-6'>Contact Us
            <br />
            <div className='sm:hidden lg:flex flex gap-5 mt-16 pb-2'>
              <div><AiFillFacebook className='cursor-pointer'/></div>
              <div><AiFillInstagram className='cursor-pointer'/></div>
              <div><AiFillLinkedin className='cursor-pointer'/></div>
              <div><AiFillTwitterSquare className='cursor-pointer'/></div>
              <div><FaTiktok className='cursor-pointer'/></div>
            </div>
            </h1>
            <div className='lg:flex gap-5 pb-5 rounded-lg justify-center items-center lg:mx-80 mx-5 bg-white shadow-2xl px-10 lg:-mt-10 -mt-20 '>
              <div><form className='flex flex-col px-5 mt-10' onSubmit={handleSubmit}>
                <h1 className='text-md font-bold pb-2 pt-2 text-black items-center flex'><GrContactInfo className='text-2xl mr-2'/>Get In Touch</h1>
                <label className='text-gray-500' htmlFor="name">First Name</label>
                <input className='p-2 w-auto rounded-lg bg-gray-200' type="text" id="first" name="first" required />

                <label className='text-gray-500' htmlFor="name">Last Name</label>
                <input className='p-2  rounded-lg bg-gray-200' type="text" id="last" name="last" required />

                <label className='text-gray-500' htmlFor="email">Email</label>
                <input className='p-2  rounded-lg bg-gray-200' type="text" id="email" name="email" required />

                <label className='text-gray-500' htmlFor="message">Message</label>
                <textarea type="text"  className='p-2 bg-gray-200 rounded-lg h-20 ' required />

                <button className='bg-orange-500 p-2 m-2 text-md font-bold group/edit rounded-sm w-40 text-white flex items-center' type="submit">Send Now<FiArrowRight className='text-xl ml-1 group-hover/edit:translate-x-6 duration-300 delay-150'/></button>
              </form></div>

              <div className="flex-col text-black gap-5">
                
                <div className="mt-2">
                  <h4 className="text-md font-semi-bold flex items-center"><CiLocationOn className='mr-1 text-lg'/>Accra, Ghana</h4>
                </div>
                <div className="mt-2">
                  <a href=""><h4 className="text-md font-semi-bold flex items-center"><CgMail className='mr-1 text-lg'/>infoE&M@gmail.com</h4></a>
                </div>
                <div className="mt-2">
                  <h4 className="text-md font-semi-bold flex items-center "><BsTelephone className='mr-1 text-lg'/>(+233) 20 000 1111 <br />(+233) 30 111 2222</h4>
                </div>
              </div>
          </div>
        </div>
    </Element>
  )
}

export default Contact