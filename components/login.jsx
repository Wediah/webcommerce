import React from 'react'

function Login() {
  return (
    <div className='min-h-screen bg-gray-200 z-20 '>
        <div>
        <form action="/send-data-here" method="post" className='flex flex-col p-40'>
            <label for="email / phone">email or phone:</label>
            <input
                type="text"
                id="email"
                name="email"
                required
                minlength="10"
            />
            <label for="password">password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">log in</button>
        </form>
        </div>

    </div>
  )
}

export default Login;