import React from "react";
import useFood from "../../../Hooks/useFood";
import FoodCard from "../FoodCard/FoodCard";

const Lunch = () => {
  const [foods] = useFood([]);
  const lunchs = foods.slice(6, 12);
  return (
    <div className="grid grid-cols-3 mx-auto mt-20">
      {lunchs.map((lunch) => (
        <FoodCard key={lunch.id} food={lunch} />
      ))}
    </div>
  );
};

export default Lunch;
