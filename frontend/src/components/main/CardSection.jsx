
import React from "react";
import sortingImage from "../../assets/sorting.gif";
import searchingImage from "../../assets/unnamed.gif";

const CardSection = () => {
  return (
    <section
      className="py-20 bg-white/30 backdrop-blur-lg text-gray-900 flex flex-col items-center"
      id="card-section"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold mb-12 text-gray-800 transition-all duration-500 hover:scale-110 hover:text-yellow-700 hover:shadow-lg text-center px-4">
        Unlock the Power of Sorting & Searching – A Step Towards Efficiency!
      </h2>

      {/* Card Container */}
      <div className="relative flex flex-wrap justify-center gap-12 px-6">
        {/* Sorting Card */}
        <div className="flex flex-col items-center">
          <a href="/sorting">
            <div className="group relative w-80 h-96 rounded-3xl bg-white/20 backdrop-blur-xl shadow-xl overflow-hidden border border-white/20 hover:shadow-yellow-300/40 transition-all duration-500 hover:scale-105">
              <img
                src={sortingImage}
                alt="Sorting"
                className="w-full h-2/3 object-cover rounded-t-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors duration-300">
                  Sorting Algorithms
                </h3>
                <p className="text-sm text-gray-600">Explore efficient sorting techniques.</p>
              </div>
            </div>
          </a>
          <a href="/sorting">
            <button className="mt-4 px-6 py-3 bg-yellow-500 text-white font-semibold text-lg rounded-full shadow-lg transition-all duration-300 hover:bg-yellow-600 hover:scale-110 hover:shadow-xl">
              Explore Sorting
            </button>
          </a>
        </div>

        {/* Searching Card */}
        <div className="flex flex-col items-center">
          <a href="/searching">
            <div className="group relative w-80 h-96 rounded-3xl bg-white/20 backdrop-blur-xl shadow-xl overflow-hidden border border-white/20 hover:shadow-yellow-300/40 transition-all duration-500 hover:scale-105">
              <img
                src={searchingImage}
                alt="Searching"
                className="w-full h-2/3 object-cover rounded-t-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors duration-300">
                  Searching Algorithms
                </h3>
                <p className="text-sm text-gray-600">Explore efficient searching techniques.</p>
              </div>
            </div>
          </a>
          <a href="/searching">
            <button className="mt-4 px-6 py-3 bg-yellow-500 text-white font-semibold text-lg rounded-full shadow-lg transition-all duration-300 hover:bg-yellow-600 hover:scale-110 hover:shadow-xl">
              Explore Searching
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CardSection;

