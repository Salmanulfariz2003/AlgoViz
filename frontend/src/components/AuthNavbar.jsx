import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const AuthNavbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center space-x-4 cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 rounded-lg transform transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg"
          />
          <h1 className="text-2xl font-bold text-gray-300 font-serif italic transition-all duration-300 hover:text-yellow-400 hover:scale-105 hover:tracking-widest">
            AlgoViz
          </h1>
        </Link>
        <ul className="flex space-x-6 text-lg font-semibold">
          <li>
            <Link to="/" className="cursor-pointer hover:text-yellow-400">
              Home
            </Link>
          </li>
          {location.pathname === "/login" && (
            <li>
              <Link to="/register" className="cursor-pointer hover:text-yellow-400">
                Register
              </Link>
            </li>
          )}
          {location.pathname === "/register" && (
            <li>
              <Link to="/login" className="cursor-pointer hover:text-yellow-400">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default AuthNavbar;