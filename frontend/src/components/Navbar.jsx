import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Dropdown } from "./nav/Dropdown";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const [userInitial, setUserInitial] = useState("");

  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("token");
      setLoggedIn(!!token);
      if (token) {
        const email = localStorage.getItem("email");
        setUserInitial(email ? email.charAt(0).toUpperCase() : "");
      } else {
        setUserInitial("");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    handleStorageChange(); // Initial check

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    window.dispatchEvent(new Event("storage"));
    window.location.href = '/login';
  };

  const sortingOptions = [
    { title: "Heap Sort", path: "/sorting/heap" },
    { title: "Merge Sort", path: "/sorting/merge" },
    { title: "Quick Sort", path: "/sorting/quick" },
    { title: "Bubble Sort", path: "/sorting/bubble" },
    { title: "Selection Sort", path: "/sorting/selection" },
    { title: "Insertion Sort", path: "/sorting/insertion" },
  ];

  const searhingOptions = [
    { title: "Linear Search", path: "/searching/linear" },
    { title: "Binary Search", path: "/searching/binary" },
  ];

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <a href="/" className="flex items-center space-x-4 cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 rounded-lg transform transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg"
          />
          <h1 className="text-2xl font-bold text-gray-300 font-serif italic transition-all duration-300 hover:text-yellow-400 hover:scale-105 hover:tracking-widest">
            AlgoViz
          </h1>
        </a>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          className={`md:flex md:space-x-10 text-lg font-semibold absolute md:relative bg-gray-900 md:bg-transparent w-full md:w-auto left-0 top-16 md:top-auto transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <li className="px-4 py-2">
            <a
              href="/"
              className="cursor-pointer hover:text-yellow-400 flex items-center"
            >
              Home
            </a>
          </li>
          <Dropdown title="Sorting" options={sortingOptions} />
          <Dropdown title="Searching" options={searhingOptions} />
          <li className="px-4 py-2">
            <a
              href="/time-complexity"
              className="cursor-pointer hover:text-yellow-400 flex items-center"
            >
              Time Complexity
            </a>
          </li>
          {loggedIn ? (
            <li className="relative px-6 py-2 md:py-0 group">
              <button className="flex items-center space-x-1 transition-all duration-300 hover:text-yellow-400">
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
                  {userInitial}
                </div>
              </button>
              <ul className="absolute right-0 mt-2 bg-gray-800 text-white rounded-md shadow-lg w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300">
                <li
                  className="px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 cursor-pointer"
                >
                  <a href="/history">History</a>
                </li>
                <li
                  className="px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </li>
          ) : (
            <li className="px-4 py-2">
              <a
                href="/login"
                className="cursor-pointer hover:text-yellow-400 flex items-center"
              >
                Login
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;