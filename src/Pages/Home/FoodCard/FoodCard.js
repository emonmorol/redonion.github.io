import React from "react";

const FoodCard = ({ food }) => {
  const { description, image, title, price } = food;
  return (
    <div className="w-4/6 gap-0 hover:shadow-xl py-20 mx-auto">
      <div className=" mx-auto w-1/2">
        <img className="w-full" src={image} alt="" />
      </div>
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <p>
          <small className="text-gray-500">{description}</small>
        </p>
        <p className="text-4xl font-bold">${price}</p>
      </div>
    </div>
  );
};

export default FoodCard;
