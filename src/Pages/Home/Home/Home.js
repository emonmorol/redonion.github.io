import React from "react";
import "./Home.css";
import banner from "../../../images/bannerbackground.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="h-screen">
      <div>
        <img className="banner absolute" src={banner} alt="" />
      </div>
      <div className="relative top-1/4">
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
  );
};

export default Home;
