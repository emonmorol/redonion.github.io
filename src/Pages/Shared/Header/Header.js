import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo2.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
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
          {user ? (
            <li onClick={() => signOut(auth)}>
              <Link to="/Login">Logout</Link>
            </li>
          ) : (
            <li>
              <Link to="/Login">Login</Link>
            </li>
          )}
          {user ? (
            ""
          ) : (
            <li>
              <Link to="/Login">Signup</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
