import React from "react";
import useFood from "../../../Hooks/useFood";
import FoodCard from "../FoodCard/FoodCard";

const Dinner = () => {
  const [foods] = useFood([]);
  const dinners = foods.slice(0, 6);
  return (
    <div className="grid grid-cols-3 mx-auto mt-20">
      {dinners.map((dinner) => (
        <FoodCard key={dinner.id} food={dinner} />
      ))}
    </div>
  );
};

export default Dinner;
