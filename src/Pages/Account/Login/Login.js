import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo2.png";
import Social from "../Social/Social";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  //States
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handlelogin = (event) => {
    event.preventDefault();
    setEmail(event.target.email.value);
    setPassword(event.target.password.value);
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="w-1/4  mx-auto h-screen">
      <div className="rounded-3xl shadow-lg border my-20 p-10">
        <div className="w-1/2 mx-auto">
          <img className="" src={logo} alt="" />
        </div>
        <div>
          <h2 className="text-4xl font-extrabold uppercase my-6">
            Please Login
          </h2>
          <form onSubmit={handlelogin}>
            <div className="flex -mx-4">
              <div className="w-full px-3 mb-2">
                <label htmlFor="" className="text-left font-semibold px-1">
                  Email
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="email"
                    className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-4">
              <div className="w-full px-3 mb-2">
                <label
                  htmlFor=""
                  className="text-left text-xs font-semibold px-1"
                >
                  Password
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="password"
                    className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm ">Forget Password ? </span>
              <Link to="/login" className="text-sm text-blue-500">
                Reset Password
              </Link>
            </div>
            <div className="w-full mb-1 mt-2">
              <button
                type="submit"
                className="font-sans w-full py-2.5 px-4 shadow-md border text-sm font-medium
                  bg-red-500 text-white rounded-full hover:shadow-inner focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                LOGIN
              </button>
            </div>
            <div>
              <span className="text-sm ">Don't Have An Account ? </span>
              <Link to="/signup" className="text-sm text-blue-500">
                Sing Up
              </Link>
            </div>
          </form>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Login;
