import React from "react";
import { FaSearch } from "react-icons/fa";
import backgroundImage from "../../assets/graph-4737109_1920.jpg"; // Ensure this path is correct
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const sorts = ["heap", "bubble", "selection", "insertion", "quick", "merge"];
  const searches = ["binary", "linear"];

  // List of valid routes for search
  const validRoutes = [
    "/",
    "/sorting",
    "/searching",
    ...sorts.map((s) => `/sorting/${s}`),
    ...searches.map((s) => `/searching/${s}`),
  ];

  // Function to filter suggestions based on input
  const handleInputChange = (e) => {
    const input = e.target.value.toLowerCase().trim();
    setSearchTerm(input);

    if (!input) {
      setSuggestions([]);
      return;
    }

    // Get matching routes based on input
    const filteredSuggestions = validRoutes.filter((route) =>
      route.includes(input)
    );

    setSuggestions(filteredSuggestions);
  };

  // Function to handle search
  const handleSearch = (query = searchTerm) => {
    const term = query.trim().toLowerCase();
    const formattedSearch1 = `/${term}`;
    const formattedSearch2 = `/sorting/${term}`;
    const formattedSearch3 = `/searching/${term}`;

    if (validRoutes.includes(formattedSearch1) || validRoutes.includes(formattedSearch2) || validRoutes.includes(formattedSearch3)) {
      if (sorts.includes(term)) {
        navigate(`/sorting/${term}`);
      } else if (searches.includes(term)) {
        navigate(`/searching/${term}`);
      } else {
        navigate(formattedSearch1);
      }
    } else {
      alert("Route not found. Please check the spelling!");
    }
    setSuggestions([]); // Hide suggestions after search
  };
  return (
    <section
      className="relative mt-20 bg-cover bg-center h-screen flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      id="Home"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-3xl px-6">
        {/* Floating Animated Heading with Background Hover Effect */}
        <h1 className="text-6xl md:text-5xl font-extrabold leading-tight mb-6 animate-fadeIn transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400 drop-shadow-lg hover:bg-white/20 hover:backdrop-blur-lg hover:p-4 hover:rounded-xl">
          Explore Sorting & Searching{" "}
          <span className="text-yellow-400 hover:text-white transition-all duration-500">
            Algorithms Like Never Before!
          </span>
        </h1>

        {/* Animated Subtitle with Hover Effect */}
        <p className="text-lg md:text-xl mb-8 opacity-90 animate-slideUp transition-all duration-500 hover:text-gray-300 hover:bg-white/10 hover:backdrop-blur-md hover:px-4 hover:py-2 hover:rounded-lg">
          Explore, visualize, and master various <b>searching</b> and <b>sorting</b> algorithms in an interactive way.
        </p>

        {/* Search Bar with Stylish Effects */}
        <div className="relative w-full max-w-lg mx-auto group">
          <input
            type="text"
            placeholder="Search an algorithm..."
            className="w-full py-4 pl-6 pr-14 text-gray-900 bg-white/80 rounded-full shadow-lg backdrop-blur-md focus:outline-none focus:ring-4 focus:ring-yellow-500 transition-all duration-300 hover:shadow-2xl hover:bg-white/90 hover:border-2 hover:border-yellow-500"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-600 group-hover:text-yellow-500 transition-all duration-300 hover:scale-110"
            onClick={() => handleSearch()}
          >
            <FaSearch className="text-2xl" />
          </button>

          {/* Suggestion List */}
          {suggestions.length > 0 && (
            <ul className="absolute z-10 w-full mt-2 bg-white border text-black border-gray-300 rounded-lg shadow-lg">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-yellow-100 transition-all"
                  onClick={() => handleSearch(suggestion.replace("/sorting/", "").replace("/searching/", "").replace("/", ""))}
                >
                  {suggestion.split('/').pop()}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <a href="#card-section">
            <button
              className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-yellow-600 hover:scale-105"
            >
              Get Started
            </button>
          </a>

          <a href="visualizationcard/Card">
            <button
             className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
              Explore Visualization
            </button>
          </a>

          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
