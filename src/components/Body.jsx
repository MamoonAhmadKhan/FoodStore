import React, { useState } from 'react'
import Card from './Card'
import { swiggyAPI } from '../api/swiggyAPI'

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(swiggyAPI);

  return (
    <>
        <h1 className='text-8xl font-bold text-amber-600 mt-9 ml-9 cursor-pointer hover:text-emerald-700'>FOODY</h1>
        <h2 className='text-xl font-serif mt-2 ml-45'>--- a Food Delivery solution by <strong className='cursor-pointer text-cyan-950 hover:text-amber-600 hover:text-2xl'>Mamoon</strong> ---</h2>

        <div className="filter">
          <button 
          className='filter-btn mt-12 ml-10 p-3 rounded-3xl bg-amber-500 cursor-pointer font-semibold hover:bg-black hover:text-amber-500'
          onClick={() => {
            const filteredAPI = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4.5;
            });
            setListOfRestaurants(filteredAPI);
          }}
          >Top Rated Restaurants</button>
        </div>

        <div className='flex flex-wrap justify-around p-22 space-y-10'>
        {listOfRestaurants.map((res) => {
            return <Card 
            key={res.info.id} 
            name={res.info.name} 
            cuisine={res.info.cuisines} 
            area={res.info.locality} 
            rating={res.info.avgRating}
            time={res.info.sla.slaString}
            costForTwo={res.info.costForTwo}
            imageID={res.info.cloudinaryImageId}
            />
        })}
        </div>
    </>
  )
}

export default Body 