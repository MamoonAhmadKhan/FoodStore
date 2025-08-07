import React, { useState } from 'react'

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
        <a className='hover:text-black' href="#">Home</a>
        <a className='hover:text-black' href="#">About</a>
        <a className='hover:text-black' href="#">Cart</a>
        <button 
        onClick={handleAuthBtn}
        className='cursor-pointer hover:text-black'
        >{authBtn}</button>
    </div>   
  )
}

export default Links        