import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <footer className=" mt-20 h-80 bg-gray-900 text-white grid grid-cols-2 text-left px-20 pt-10">
      <div>
        <div className="w-1/4">
          <img className="w-3/4" src={logo} alt="" />
        </div>
        <p className="mt-40 text-gray-400">
          <small>
            copyright reserved <FontAwesomeIcon icon={faCopyright} />{" "}
            {new Date().getFullYear()}
          </small>
        </p>
      </div>
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-2">
          <div>
            <p>About Online Food</p>
            <p>Read our blog</p>
            <p>SIgn up to deliver</p>
            <p>Add Your Restaurant</p>
          </div>
          <div>
            <p>Get help</p>
            <p>Read FAQs</p>
            <p>View All Clients</p>
            <p>Restaurant near me</p>
          </div>
        </div>
        <div className="flex gap-8 text-right">
          <p>Privacy Policy</p>
          <p>Terms Of use</p>
          <p>Pricing</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
