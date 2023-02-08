import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiOutlineWhatsApp, AiFillLinkedin } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa'

function Thirdpage() {
  return (
    <div className=' bg-gray-400 text-white '>
        <div className='flex gap-20 px-20 pt-32 flex-row flex-wrap justify-center'>
            <div>
                <h1 className='text-black font-bold text-xl'>About Us</h1>
                <p className='cursor-pointer hover:underline underline-offset-2'>About E&M</p>
                <p className='cursor-pointer'>Careers</p>
                <p className='cursor-pointer'>Press</p>
                <p className='cursor-pointer'>Investor Relations</p>
                <p className='cursor-pointer'>Trust & Safety</p>
                <p className='cursor-pointer'>Content Guidelines</p>
                <p className='cursor-pointer'>Accessibility Statement</p>
                <p className='cursor-pointer'>Terms of Service</p>
                <p className='cursor-pointer'>Privacy Policy</p>
                <p className='cursor-pointer'>Ad Choices</p>
                <p className='cursor-pointer'>Your Privacy Choices</p>
            </div>
            <div>
                <h1 className='text-black font-bold text-xl'>Discover</h1>
               <p className='cursor-pointer'>E&M Project Cost Guides</p>
               <p className='cursor-pointer'>Collections</p>
               <p className='cursor-pointer'>Talk</p>
               <p className='cursor-pointer'>Events</p>
               <p className='cursor-pointer'>E&M Blogs</p>
               <p className='cursor-pointer'>Support</p>
               <p className='cursor-pointer'>E&M Mobile</p>
               <p className='cursor-pointer'>Developers</p>
               <p className='cursor-pointer'>RSS</p> 
            </div>
            <div>
                <h1 className='text-black font-bold text-xl'>E&M for Business</h1>
                <p className='cursor-pointer'>E&M for Business</p>
                <p className='cursor-pointer'>Business Owner Login</p>
                <p className='cursor-pointer'>Claim your Business Page</p>
                <p className='cursor-pointer'>Advertise on E&M</p>
                <p className='cursor-pointer'>E&M for Restaurant Owners</p>
                <p className='cursor-pointer'>Table Management</p>
                <p className='cursor-pointer'>Business Success Stories</p>
                <p className='cursor-pointer'>Business Support</p>
                <p className='cursor-pointer'>E&M Blog for Business</p>
            </div>
            <div>
                <h1 className='text-black font-bold text-xl'>Language</h1>
                <select className='bg-transparent border-none outline-0 text-white font-medium'>
                    <option className='text-gray-800' >English(US)</option>
                    <option className='text-gray-800'>French</option>
                    <option className='text-gray-800'>Dutch</option>
                    <option className='text-gray-800'>English(UK)</option>
                    <option className='text-gray-800'>English(NG)</option>
                    <option className='text-gray-800'>Twi</option>
                </select>
                <h1 className='text-black font-bold text-xl pt-5'>Countries</h1>
                <select className='bg-transparent border-none outline-0 text-white font-medium'>
                    <option className='text-gray-800' >Ghana</option>
                    <option className='text-gray-800'>Togo</option>
                    <option className='text-gray-800'>USA</option>
                    <option className='text-gray-800'>Germany</option>
                    <option className='text-gray-800'>Nigeria</option>
                    <option className='text-gray-800'>Lomnava</option>
                </select>
            </div>
            <div>
                <h1 className='text-black font-bold text-xl'>Our social media</h1>
                <div className='flex text-3xl font-bold pt-4'>
                    <AiFillFacebook className='cursor-pointer'/>
                    <AiFillInstagram className='cursor-pointer'/>
                    <AiFillTwitterSquare className='cursor-pointer'/>
                    <FaTiktok className='cursor-pointer'/>
                    <AiOutlineWhatsApp className='cursor-pointer'/>
                    <AiFillLinkedin className='cursor-pointer'/>
                </div>
                
            </div>
        </div>

        <h1 className="pt-10 text-center">Copyright ©2020-2026 E&M <h1 className='text-sm'>built by Emmanuel Wediah</h1></h1> 
        
    </div>
  )
}

export default Thirdpage;