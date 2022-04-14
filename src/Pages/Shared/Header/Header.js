import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <Link to="/home" className="logo-content">
        <img src={logo} alt="" />
      </Link>
      <div className="link-container">
        <ul>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
