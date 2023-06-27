import React, { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resmenu, setResMenu] = useState([]);

  const fetchMenuData = async () => {
    const fetchMenuDataShow = await fetch(RES_MENU_URL);
    const jsonDataShoww = await fetchMenuDataShow.json();
    // console.log(jsonDataShoww?.data);
    setResMenu(jsonDataShoww?.data);
  };
  // const { name, areaName, avgRating, totalRatingsString, cuisines } =
  //   resmenu?.cards[0]?.card?.card?.info;


  useEffect(() => {
    fetchMenuData();
  }, []);

  return (
    <>
      <div className="restmenu_body">
          <div className="restmenu_body_inner">
            <div className="innersec">
              <h1>{resmenu?.cards[0]?.card?.card?.info.name}</h1>
              <p>{resmenu?.cards[0]?.card?.card?.info.cuisines.join(", ")}</p>
              <p>{resmenu?.cards[0]?.card?.card?.info.areaName},</p> 
            </div>
            <div className="innersec brd">
              <span>* {resmenu?.cards[0]?.card?.card?.info.avgRating}</span>
              <p>{resmenu?.cards[0]?.card?.card?.info.totalRatingsString}</p>
            </div>
          </div>
      </div>
      {/* showing restaurant menu */}
      <div className="restmenu_body">
        <h2>Recommended</h2>
      </div>


    
    </>
  );
};

export default RestaurantMenu;
