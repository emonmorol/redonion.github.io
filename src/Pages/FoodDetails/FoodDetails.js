import { faCartPlus, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useCartItems from "../../Hooks/useCartItems";
import useFood from "../../Hooks/useFood";

const FoodDetails = () => {
  const [foods] = useFood([]);
  const [cartItems, setCartItems] = useCartItems([]);
  const [foodQuantity, setFoodQuantity] = useState(0);
  const { foodId } = useParams();
  const food = foods.find(({ id }) => foodId === id);
  const handleAddToCart = (food) => {
    console.log(food);
    const addedItem = [...cartItems, food];
    setCartItems(addedItem);
    console.log(cartItems);
  };
  const quantityMinus = () => {
    if (foodQuantity > 0) {
      setFoodQuantity(foodQuantity - 1);
    }
  };
  const quantityPlus = () => {
    setFoodQuantity(foodQuantity + 1);
  };
  return (
    <div className="flex justify-around items-center p-20">
      <div className="px-20">
        <h1 className="text-left text-6xl mb-8 font-bold">{food?.title}</h1>
        <p className="w-1/2 text-left text-md font-medium text-gray-500">
          {food?.description}
        </p>
        <div className="mt-8 flex justify-items-start">
          <p className="text-5xl font-bold mr-20">${food?.price}</p>
          <div className="flex items-center justify-between px-3 py-1 text-gray-500 rounded-full border w-36">
            <span
              onClick={quantityMinus}
              className="hover:text-red-500 cursor-pointer"
            >
              <FontAwesomeIcon icon={faMinus} />
            </span>
            <span className="text-xl font-semibold">{foodQuantity}</span>
            <span
              onClick={quantityPlus}
              className="hover:text-red-500 cursor-pointer"
            >
              <FontAwesomeIcon icon={faPlus} />
            </span>
          </div>
        </div>
        <div onClick={() => handleAddToCart(food)} className="flex">
          <button className="border bg-red-400 text-white w-2/6 my-8 py-2 rounded-full">
            <FontAwesomeIcon icon={faCartPlus} />
            <span className="ml-3">Add To Cart</span>
          </button>
        </div>
      </div>
      <div className="w-2/5">
        <img className="w-full" src={food?.image} alt="" />
      </div>
    </div>
  );
};

export default FoodDetails;
