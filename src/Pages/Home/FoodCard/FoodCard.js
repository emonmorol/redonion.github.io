import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  const { description, image, title, price, id } = food;
  // const dynamicUrl = ``;
  return (
    <Link to={`/home/food-details/${id}`}>
      <div className="w-4/6 gap-0 hover:shadow-xl py-12 rounded-2xl mx-auto">
        <div className=" mx-auto w-1/2">
          <img className="w-full" src={image} alt="" />
        </div>
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          <p>
            <small className="text-gray-500">{description}</small>
          </p>
          <div className="flex justify-between items-center px-14 mt-3 text-red-500">
            <p className="text-4xl font-bold">${price}</p>
            <button className="text-2xl bg-red-100 px-3 py-2.5 rounded-full">
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;
