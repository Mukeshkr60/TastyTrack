import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Inspiration for your first order</h1>
      <p className="explore-menu-text">
      Get ready to embark on a flavor-packed adventure! Our food cart isn’t just a 
      stop — it’s your gateway to culinary inspiration. From sizzling street food classics
       to bold new creations, each dish is crafted to ignite your senses and satisfy your cravings. 
       Whether you're indulging in your favorites or trying something new, every bite promises to 
       turn your first order into an unforgettable food experience. Let your taste buds lead the way!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item,index) => {
          return (
            <div onClick={()=> setCategory(prev=>prev==item.menu_name ? "All" : item.menu_name)}
             key={index} className="explore-menu-list-item">
              <img className={category===item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
