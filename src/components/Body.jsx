import React, { useEffect, useState } from 'react'
import Card from './Card'
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  
    const handleSearch = () => {
      const filteredRes = listOfRestaurants.filter((res) => {
        return res.info.name.toLowerCase().includes(searchInput.toLowerCase());
      });
      if (filteredRes.length !== 0) {
        setFilteredRestaurants(filteredRes);
      }
      setSearchInput("");
    }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.63270&lng=77.21980&carousel=true&third_party_vendor=1");
    const response  = await data.json();
    setListOfRestaurants(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />
  }

  return (
    <>
        <h1 className='text-8xl font-bold text-amber-600 mt-9 ml-9 cursor-pointer hover:text-emerald-700'>FOODY</h1>
        <h2 className='text-xl font-serif mt-2 ml-45'>--- a Food Delivery solution by <strong className='cursor-pointer text-cyan-950 hover:text-amber-600 hover:text-2xl'>Mamoon</strong> ---</h2>

        <div className="filter">
          <button 
          className='filter-btn mt-12 ml-10 p-3 rounded-3xl bg-amber-500 cursor-pointer font-semibold hover:bg-black hover:text-amber-500'
          onClick={() => {
            const filteredAPI = listOfRestaurants.filter((res) => {
              return res.info.avgRating >= 4.5;
            });
            setFilteredRestaurants(filteredAPI);
          }}
          >Top Rated Restaurants</button>
          <button 
          onClick={() => fetchData()}
          className='filter-btn mt-12 ml-10 p-3 rounded-3xl bg-amber-500 cursor-pointer font-semibold hover:bg-black hover:text-amber-500'
          >Clear Filters</button>
        </div>

        <div className='flex items-center justify-center space-x-2 mt-15'>
        <input 
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        className='bg-white text-black w-170 p-2 rounded-2xl border-2' 
        type="text" 
        placeholder='Search your favourite Food or Restaurant' 
        value={searchInput}
        />
        <button 
        onClick={handleSearch}
        className='bg-orange-400 p-2 h-12 cursor-pointer rounded-2xl hover:bg-orange-600 hover:text-white'
        >Search</button>
      </div>

        <div className='flex flex-wrap justify-around p-22 space-y-10'>
        {filteredestaurants.map((res) => {
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