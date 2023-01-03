import React from 'react'
import Image from 'next/legacy/image';
import background from '../public/backgroud.png'

function Login() {
  return (
    

      <div>
        <span className=' font-bold text-2xl text-orange-500'>Login</span> <br />
        <span className=' text-sm font-semibold'>Welcome back! Please fill in your details.</span>
      <form action="/send-data-here" method="post" className='flex flex-col '>
          <label for="email / phone" className='font-bold text-sm'>email or phone</label>
          <input
              type="text"
              id="email"
              name="email"
              required
              minlength="10"
          />
          <label for="password" className='font-bold text-sm'>password</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">log in</button>
      </form>
      </div>

    </div>
  )
}

export default Login;