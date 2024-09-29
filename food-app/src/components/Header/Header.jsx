import React from "react";
import "./Header.css";

const Header = () => {


  const handleScrollToMenu = () => {
    const menuSection = document.getElementById("explore-menu");
    menuSection.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        {/* <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        </p> */}
        <button onClick={handleScrollToMenu}>View manu</button>
      </div>
    </div>
  );
};

export default Header;
