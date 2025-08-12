import React from 'react'

const Footer = () => {
  return (
    <div className='bottom-0 left-0 w-full flex items-center justify-between bg-amber-500 p-4 shadow-md z-50'>
        <p>&copy; Foody' 2025</p>
        <h3>Developed by <strong>Mamoon Ahmad Khan</strong></h3>
        <div className='space-x-2'>
            <input className='bg-white w-90 rounded-2xl p-2' type="text" placeholder='give your valuable feedback for us' />
            <button className='bg-white p-2 cursor-pointer rounded-2xl hover:bg-orange-400 hover:text-white'>Send</button>
        </div>
    </div>
  )
}

export default Footer