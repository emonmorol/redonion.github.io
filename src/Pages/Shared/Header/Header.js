import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartPlus} />
            </Link>
          </li>
          {user ? (
            <li>
              <Link to="/profile">
                {user?.displayName ? user.displayName : "User"}
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          )}
          {user ? (
            <li onClick={() => signOut(auth)}>
              <Link to="/Login">Logout</Link>
            </li>
          ) : (
            <li>
              <Link to="/Login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
