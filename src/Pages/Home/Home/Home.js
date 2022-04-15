import React from "react";
import "./Home.css";
import banner from "../../../images/bannerbackground.png";
import { Link, Outlet } from "react-router-dom";
import Search from "../Search/Search";
import OurServices from "../OurServices/OurServices";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-full">
        <div className="w-full">
          <img className="banner" src={banner} alt="" />
        </div>
        <Search />
      </div>
      <div className="relative -top-52">
        <div className="food-link-content ">
          <p className="text-xl font-bold text-center mr-11 mb-3">
            Click Below To See The Items
          </p>
          <Link to="/home/breakfast">Breakfast</Link>
          <Link to="/home/lunch">Lunch</Link>
          <Link to="/home/dinner">Dinner</Link>
          <Outlet />
        </div>
        <div className="mt-10">
          <Link
            className="bg-gray-300 -ml-10 px-6 pt-2 pb-2 rounded-lg"
            to="/checkout"
          >
            Checkout Your Food
          </Link>
        </div>
      </div>
      <OurServices />
    </div>
  );
};

export default Home;
