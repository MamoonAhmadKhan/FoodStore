import React, { useEffect, useState } from 'react'

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const [menuCards, setMenuCards] = useState([]);
    const [openCategory, setOpenCategory] = useState(null);

    const fetchMenu = async () => {
        const info = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=${resId}`
        );
        const res = await info.json();
    
        const menuData =
          res?.data?.cards
            ?.find((ob) => ob?.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
              (ob) =>
                ob?.card?.card["@type"]?.includes("ItemCategory") ||
                ob?.card?.card["@type"]?.includes("NestedItemCategory")
            )
            ?.map((item) => item?.card?.card) || [];
    
        setMenuCards(menuData);
    
        if (menuData.length > 0) {
          setOpenCategory(menuData[0].categoryId);
        }
    
        setResInfo(
          res?.data?.cards?.find((item) =>
            item?.card?.card["@type"]?.includes("food.v2.Restaurant")
          )?.card?.card?.info
        );
      };
    
      useEffect(() => {
        fetchMenu();
      }, [resId]);

      return { resInfo, menuCards, openCategory, setOpenCategory }
}

export default useRestaurantMenu