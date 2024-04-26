import React from 'react'

const Contact = () => {
  return (
    
    <div name='Contact' className='w-full h-screen bg-white flex justify-center items-center p-4'>
    <form method='POST' action="https://getform.io/f/a3fbe6ca-a4c0-42c9-8733-83d0b105348c" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-white text-white'>Contact</p>
            <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - meenakshishrivastava676@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-black hover:border-white px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
    </form>
   </div>

  )
}

export default Contact
