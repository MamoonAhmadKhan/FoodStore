import React from 'react'

const Card = (props) => {
    const {name, cuisine, area, rating, time, costForTwo, imageID} = props;

  return (
    <div className='flex flex-col border-b-2 w-60 h-120 pt-0 pl-1 pr-1 rounded-2xl cursor-pointer hover:translate-x-2 hover:translate-y-2'>
        <img className='w-full h-40 rounded-2xl' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageID} alt="" />
        <div className='p-2 mt-2 space-y-4'>
            <h1 className='text-xl font-bold font-stretch-normal'>{name}</h1>
            <h2 className='font-extralight'>{cuisine.slice(0,2).join(", ")}</h2>
            <h2 className='font-medium'>{area}</h2>
            <p className='font-semibold'>{costForTwo}</p>
            <p className='font-medium'>{rating.toString()} Stars</p>
            <p className='font-medium'>{time}</p>
        </div>
    </div>
  )
}

export default Card 