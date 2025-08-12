import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Links = () => {
  const [authBtn, setAuthBtn] = useState("Login");

  const handleAuthBtn = () => {
    if (authBtn === "Login") {
      setAuthBtn("Logout");
    }
    else {
      setAuthBtn("Login");
    }
  }

  return (
    <div className='text-white font-semibold text-xl flex items-center justify-center space-x-6'>
        <Link to={'/'} className='hover:text-black' >Home</Link>
        <Link to={'/about'} className='hover:text-black' >About</Link>
        <Link to={'/cart'} className='hover:text-black' >Cart</Link>
        <Link to={'/auth'} className='hover:text-black' onClick={handleAuthBtn} >{authBtn}</Link>
    </div>   
  )
}

export default Links        