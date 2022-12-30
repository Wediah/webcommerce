import React from 'react'

function login() {
  return (
    <div className='min-h-screen bg-white'>
        <div>
        <form action="/send-data-here" method="post">
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

export default login