import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Bubble Sort",
      description: "Simple comparison-based sorting algorithm.",
      link: "/visualization/BubbleVisualize",
      img: "/assets/Bubblesort.gif",
    },
    {
      title: "Quick Sort",
      description: "Efficient divide-and-conquer sorting algorithm.",
      link: "/visualization/QuickVisualize",
      img: "/assets/quicksort.gif",
    },
    {
      title: "Merge Sort",
      description: "Stable and efficient divide-and-conquer sort.",
      link: "/visualization/MergeVisualize",
      img: "/assets/mergesort.gif",
    },
    {
      title: "Heap Sort",
      description: "Comparison-based sorting using a heap data structure.",
      link: "/visualization/HeapVisualize",
      img: "/assets/Heapsort.gif",
    },
    {
      title: "Insertion Sort",
      description: "Simple sorting algorithm good for small datasets.",
      link: "/visualization/InsertionVisualize",
      img: "/assets/insertionsort.gif",
    },
    {
      title: "Selection Sort",
      description: "Simple but inefficient sorting algorithm.",
      link: "/visualization/SelectionVisualize",
      img: "/assets/Selectionsort.gif",
    },
    {
      title: "Binary Search",
      description: "Efficient algorithm to find elements in sorted arrays.",
      link: "/visualization/BinaryVisualize",
      img: "/assets/binarysearch.gif",
    },
    {
      title: "Linear Search",
      description: "Simple search algorithm that checks each element.",
      link: "/visualization/LinearVisualize",
      img: "/assets/linearsearch.gif",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 py-20 px-5">
      <h1 className="text-5xl font-extrabold text-center mb-16 text-gray-800 hover:text-blue-600 transition-all duration-300">
        Sorting & Searching Visualizations
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-300 flex flex-col justify-between"
          >
            <img
              src={card.img}
              alt={card.title}
              className="h-full w-auto object-contain"
            />

            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold mb-3 text-gray-700">
                {card.title}
              </h2>
              <p className="text-gray-600 flex-grow">{card.description}</p>
              <button
                onClick={() => navigate(card.link)}
                className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl"
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
