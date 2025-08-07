import React from 'react'
import Links from './Links'

const Header = () => {
  return (
    <nav className='bg-amber-500 flex items-center justify-between py-6 px-6'>
        <h1 className='text-gray-800 font-extrabold text-4xl'>Foody</h1>
        <Links />
    </nav>
  )
}

export default Header   