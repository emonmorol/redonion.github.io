import React from "react";
import logo from "../../images/logo2.png";

const Login = () => {
  return (
    <div className="w-5/12 border mx-auto">
      <div className="w-2/6 mx-auto">
        <img className="" src={logo} alt="" />
      </div>
      <div>
        <h2>Please Login</h2>
        <form>
          <h2>Please Login</h2>
          <div>
            <label className="text-left" htmlFor="email">
              Email
            </label>{" "}
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="text-left" htmlFor="password">
              Password
            </label>{" "}
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
