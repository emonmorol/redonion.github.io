import React from "react";
import "./Home.css";
import banner from "../../../images/bannerbackground.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="h-screen">
        <div>
          <img className="banner absolute" src={banner} alt="" />
        </div>
        <div className="relative top-64">
          <h1 className="text-5xl font-extrabold uppercase mb-5">
            Best Meal To Make Your Day
          </h1>
          <div className="w-1/2 mx-auto">
            <input
              className="w-1/2 py-3 px-6 rounded-bl-full rounded-tl-full"
              type="search"
              name="search"
              id="search"
              placeholder="Search Food Item"
            />
            <button className="relative right-20 bg-red-500 py-3 text-white font-medium px-8 rounded-full">
              <FontAwesomeIcon icon={faSearch} />
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="relative -top-52">
        <div className="food-link-content ">
          <Link to="/home/breakfast">Breakfast</Link>
          <Link to="/home/lunch">Lunch</Link>
          <Link to="/home/dinner">Dinner</Link>
          <Outlet />
        </div>
        <div className="mt-10">
          <Link
            className="bg-gray-300 px-6 pt-2 pb-2 rounded-lg"
            to="/checkout"
          >
            Checkout Your Food
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
