import React from "react";
import aboutImg3 from "../../assets/sorting aboutus.png";

const About = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-20" id="About">
      <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400 transition-all duration-300 hover:scale-110 hover:text-yellow-300">
        About Our Project
      </h2>
      
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-1/2">
         
          <img
           src={aboutImg3}
           alt="User Interaction"
           className="rounded-lg shadow-lg transition-transform duration-300 sm:col-span-2 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
           
          />
        </div>
        
        {/* Right Side - Description */}
        <div className="md:w-1/2 text-lg leading-relaxed">
          <p className="mb-6">
            <span className="text-yellow-400 font-semibold">Visualization of Searching and Sorting</span> is an interactive web-based
            platform designed to help users understand and explore various searching and sorting algorithms.
            Through engaging visual animations, users can witness step-by-step executions of algorithms such as
            Quick Sort, Merge Sort, Bubble Sort, Heap Sort, Selection Sort, and Insertion Sort.
          </p>
          <p className="mb-6">
            The platform also provides searching algorithm visualizations for techniques like Binary Search and
            Linear Search. This project aims to bridge the gap between theoretical learning and practical
            understanding by offering intuitive and dynamic visual representations of complex algorithms.
          </p>
          <p>
            With a sleek and responsive design, our platform is accessible across devices, ensuring a seamless
            learning experience for students, educators, and coding enthusiasts alike. Explore, analyze, and
            enhance your algorithmic knowledge with our cutting-edge visualization tool.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
