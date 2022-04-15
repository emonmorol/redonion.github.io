import React from "react";
import useFood from "../../../Hooks/useFood";
import FoodCard from "../FoodCard/FoodCard";

const BreakFast = () => {
  const [foods] = useFood([]);
  const breakfasts = foods.slice(12, 18);
  return (
    <div className="grid grid-cols-3 mx-auto mt-20">
      {breakfasts.map((breakfast) => (
        <FoodCard key={breakfast.id} food={breakfast} />
      ))}
    </div>
  );
};

export default BreakFast;
