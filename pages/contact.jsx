import React from 'react'
import { Element } from 'react-scroll'

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
        <div className='min-h-screen bg-white'>
            <h1 className='text-center text-xl font-bold pt-40 '>Contact Us</h1>
            <form className='flex flex-col items-center bg-gray-300 rounded-3xl mx-20' onSubmit={handleSubmit}>
              <h1>Talk to us and we will get back to you in the shortest time possible</h1>
              <label className='text-gray-500' htmlFor="first">First Name</label>
              <input className='p-2 rounded-2xl' type="text" id="first" name="first" required />

              <label className='text-gray-500' htmlFor="last">Last Name</label>
              <input className='p-2 rounded-2xl' type="text" id="last" name="last" required />

              <label className='text-gray-500' htmlFor="last">Email</label>
              <input className='p-2 rounded-2xl' type="text" required />

              <label className='text-gray-500' htmlFor="last">Message</label>
              <input type="text"  className='p-2 rounded-2xl h-20 overflow-x-scroll' required />

              <button type="submit">Submit</button>
            </form>

            <div className=" gap-10 lg:flex pt-10 px-10 pb-10">
                    <div className="shadow-2xl rounded-3xl text-center p-10  flex-1 hover:transition hover:scale-95 bg-slate-300 ">
                      <h3 className="pt-8 pb-2 text-3xl font-bold">Address</h3>
                      <h4 className="text-md font-semi-bold ">Accra, Ghana</h4>
                    </div>
                    <div className="shadow-2xl rounded-3xl text-center p-10  flex-1 hover:transition hover:scale-95 bg-slate-300 mt-5">
                      <h3 className="pt-8 pb-2 text-3xl font-bold">Email</h3>
                      <a href=""><h4 className="text-md font-semi-bold">infoE&M@gmail.com</h4></a>
                    </div>
                    <div className="shadow-2xl rounded-3xl text-center p-10  flex-1 hover:transition hover:scale-95 bg-slate-300 mt-5 ">
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