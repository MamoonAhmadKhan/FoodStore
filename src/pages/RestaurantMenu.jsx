import React, { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuCards, setMenuCards] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const RestaurantMenuImageAddr = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
  const { resId } = useParams();

  const fetchMenu = async () => {
    const info = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=${resId}`
    );
    const res = await info.json();

    const menuData = res?.data?.cards
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
  }, []);

  if (!resInfo) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    areaName,
  } = resInfo;

  return (
    <div className="flex flex-col w-250 h-fit m-auto mt-5 mb-5 p-5 rounded-2xl">
      <h1 className="text-3xl font-bold">{name}</h1>

      <div className="flex flex-col border-1 border-gray-300 rounded-2xl mt-6 p-5 shadow-2xl mb-20 space-y-5">
        <p className="font-semibold">
          {avgRatingString} Stars ({totalRatingsString}) · {costForTwoMessage}
        </p>
        <p className="text-orange-500 font-semibold underline cursor-pointer">
          {cuisines.join(", ")}
        </p>
        <p className="text-gray-600">
          <strong className="text-black mr-8">Outlet</strong> {areaName}
        </p>
      </div>

      {menuCards.map((items) => {
        const isOpen = openCategory === items.categoryId;

        return (
          <div
            key={items.categoryId}
            className="flex flex-col border-gray-300 rounded-xl p-5 space-y-5 mb-4"
          >
            <hr className="border-t-1 border-gray-300" />
            <h2
              onClick={() =>
                setOpenCategory(isOpen ? null : items.categoryId)
              }
              className="font-extrabold cursor-pointer text-xl mb-6"
            >
              {items.title} ({items?.itemCards?.length || 0})
            </h2>

            <ul className={`menu-list ${isOpen ? "block" : "hidden"}`}>
              {items?.itemCards?.map((ob) => (
                <li key={ob?.card?.info?.id}>
                    <div className="flex content-around mb-5 pt-5">
                        <div className="pr-10 flex flex-col flex-wrap w-700">
                            <h3 className="text-xl text-neutral-700 font-semibold font-mono">{ob?.card?.info?.name}</h3>
                            <p className="text-black">₹{ob?.card?.info?.defaultPrice/100 || ob?.card?.info?.price/100}</p>
                            <p className="text-green-800 font-semibold text-xs mt-3">Stars {ob?.card?.info?.ratings?.aggregatedRating?.rating || ""} <strong className="text-gray-500">({ob?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 || 0})</strong></p>
                            <p className="text-gray-500 mt-3">{ob?.card?.info?.description}</p>
                        </div>
                        <div className="pl-10 flex flex-col flex-grow items-center content-center">
                            <img className="w-300 h-40 rounded-2xl" src={`${RestaurantMenuImageAddr}${ob?.card?.info?.imageId || "FOOD_CATALOG/IMAGES/CMS/2024/6/29/ebaec9e4-ec93-4d8d-bf45-348e07055e1e_66590361-464b-4d62-9167-89a8f4dab4ad.JPG"}`} alt="Item_Image" />
                            <button className="w-30 text-green-500 font-bold text-xl pl-10 pr-10 pt-2 pb-2 rounded-xl shadow-2xl bg-white hover:bg-gray-300 cursor-pointer font-mono">ADD</button>
                            <p className="text-gray-400 mt-5 text-xs">Customisable</p>
                        </div>
                    </div>
                    <hr className="border-t-1 border-gray-300" />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
