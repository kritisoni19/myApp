import React, { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constants";
const RestaurantMenu = () => {

  const [resmenu, setResMenu] = useState(null);

  const fetchMenuData = async() => {
    const fetchMenuDataShow = await fetch(RES_MENU_URL);
    const jsonDataShoww = await fetchMenuDataShow.json();
    console.log(jsonDataShoww?.data);
    setResMenu(jsonDataShoww?.data);
  };
  //  const {name} = resmenu?.cards[0]?.card?.card?.info;

  useEffect(() => {
    fetchMenuData();
  }, []);

 

  return (
    <>
      <div className="restmenu_body">

            <div>
              <div className="restmenu_body_inner">
                <div className="innersec">
                  {/* <h1>{resmenu?.cards[0]?.card?.card?.info?.name}</h1> */}
                
                </div>
             
              </div>
            
            </div>
          
       
      </div>
    </>
  );
};

export default RestaurantMenu;
