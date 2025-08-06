import React, { useState } from 'react';
import { swiggyAPI } from '../api/swiggyAPI';

const Search = () => {
  const [resturants, setRestaurants] = useState(swiggyAPI);

  return (
    <>
      <div className='flex items-center justify-center space-x-2'>
        <input className='bg-white text-black w-120 p-2 rounded-2xl' type="text" placeholder='Search your favourite Food or Restaurant' />
        <button className='bg-white p-2 cursor-pointer rounded-2xl hover:bg-orange-400 hover:text-white'>Search</button>
      </div>
    </>
  )
}

export default Search   