import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { image, title, content, icon } = service;
  console.log(service);
  return (
    <div className="h-auto rounded-3xl hover:bg-slate-100 hover:shadow-xl">
      <div className="w-full rounded-3xl overflow-hidden">
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="details m-3">
        <div className="mt-1">
          <img src={icon} alt="" />
        </div>
        <div className="text-left">
          <h2 className="text-2xl">{title}</h2>
          <p className="text-gray-500 font-medium">
            {content.slice(0, 100)}...
          </p>
          <Link
            className="flex items-center text-teal-500 font-bold"
            to="/morol"
          >
            <span>See More</span>
            <FontAwesomeIcon
              className="bg-green-400 text-white rounded-full p-1 ml-2"
              icon={faArrowRight}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
