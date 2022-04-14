import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="" />
        <p>
          <small>
            copyright reserved <FontAwesomeIcon icon={faCopyright} />{" "}
            {new Date().getFullYear()}
          </small>
        </p>
      </div>
      {/* <div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div> */}
    </footer>
  );
};

export default Footer;
