import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Search = () => {
  return (
    <div className="relative -top-96">
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
  );
};

export default Search;
