

// import React, { useContext } from "react";
// import "./FoodDisplay.css";
// import { StoreContext } from "../../context/StoreContext";
// import FoodItem from "../FoodItem/FoodItem";

// const FoodDisplay = ({ category }) => {
//   const { food_list } = useContext(StoreContext);

//   return (
//     <div className="food-display" id="food-display">
//       <h2>Discover delicious dishes near you</h2>
//       <div className="food-display-list">
//         {food_list.map((item, index) =>{ (

//         console.log(category,item.category)
//         if(category==== "All" || category===item.category){
//         }

//           <FoodItem
//             key={index}
//             id={item._id}
//             name={item.name}
//             description={item.description}
//             price={item.price}
//             image={item.image}
//           />
//         }
// ))}
//       </div>
//     </div>
//   );
// };

// export default FoodDisplay;

import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Discover delicious dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null; // Avoid rendering anything if the category doesn't match
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
