
import React, { useEffect, useState } from "react";
import INSERTION_SORT_IMG_1 from "../../assets/Insertion-Sort--1.webp";
import INSERTION_SORT_IMG_2 from "../../assets/Insertion-Sort--2.webp";
import INSERTION_SORT_IMG_3 from "../../assets/Insertion-Sort--3.webp";
import INSERTION_SORT_IMG_4 from "../../assets/Insertion-Sort--4.webp";
import INSERTION_SORT_IMG_5 from "../../assets/Insertion-Sort--5.webp";
import INSERTION_SORT_IMG_6 from "../../assets/Insertion-sorting.png";




export const Insertion = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(300);
  const [isSorting, setIsSorting] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeIndices, setActiveIndices] = useState([]);
  const [sortedBoundary, setSortedBoundary] = useState(null);

  useEffect(() => {
    generateNewArray();
  }, []);

  const generateNewArray = () => {
    const newArr = Array.from({ length: 25 }, () => Math.floor(Math.random() * 100) + 5);
    setArray(newArr);
    setActiveIndices([]);
    setSortedBoundary(null);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const insertionSort = async () => {
    setIsSorting(true);
    let arr = [...array];

    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
        setArray([...arr]);
        setActiveIndices([j + 1, i]);
        await sleep(speed);
      }
      arr[j + 1] = key;
      setArray([...arr]);
      setSortedBoundary(i);
      await sleep(speed);
    }

    setActiveIndices([]);
    setSortedBoundary(arr.length);
    setIsSorting(false);
  };

  const handleAddValue = () => {
    if (inputValue.trim() === "") return;
    const values = inputValue
      .split(",")
      .map((v) => parseInt(v.trim(), 10))
      .filter((v) => !isNaN(v) && v > 0);
    if (values.length > 0) {
      setArray(values);
      setInputValue("");
      setSortedBoundary(null);
    }
  };

  return (
    // title and description section

    <div className="mt-24 px-4 md:px-24 flex flex-col gap-10">
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent px-4 py-6 leading-tight tracking-tight transition-transform duration-300 ease-in-out transform hover:scale-105 hover:drop-shadow-[0_5px_25px_rgba(100,100,255,0.4)]">
  Insertion Sort Algorithm
</h1>

{/* button of visualization */}

<div className="flex flex-col items-center justify-center text-center p-6">
      <p className="text-lg md:text-xl mb-6 text-gray-800 font-medium max-w-3xl mx-auto">
    Ready to learn Insertion Sort visually? Dive into our step-by-step interactive simulation now!
      </p>

      <a href="/visualization/InsertionVisualize">
          <button
      className="px-8 py-3 bg-yellow-300 text-black font-bold rounded-full shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:scale-105 hover:shadow-xl"
           >
          Explore Visualization
          </button>
     </a>
    </div>

    {/* description */}

  <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700">
  Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is like sorting playing cards in your hands. You split the cards into two groups: the sorted cards and the unsorted cards. Then, you pick a card from the unsorted group and put it in the right place in the sorted group.
  </div>


      <div className="flex justify-center gap-4 items-center flex-wrap">
        <button
          onClick={generateNewArray}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          disabled={isSorting}
        >
          Generate New Array
        </button>
        <button
          onClick={insertionSort}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
          disabled={isSorting}
        >
          Start Sorting
        </button>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter comma-separated values"
          className="px-4 py-2 rounded border border-gray-600 bg-gray-800 text-white w-72"
        />
        <button
          onClick={handleAddValue}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Set Custom Array
        </button>
        <div className="flex items-center gap-2">
          <label htmlFor="speed" className="text-white">Speed:</label>
          <input
            id="speed"
            type="range"
            min="50"
            max="1000"
            step="50"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Color Legend */}
      <div className="flex justify-center gap-6 items-center mt-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-yellow-400 rounded-sm"></div>
          <span className="text-black">Comparing</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-green-500 rounded-sm"></div>
          <span className="text-black">Sorted</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-500 rounded-sm"></div>
          <span className="text-black">Unsorted</span>
        </div>
      </div>

      <div className="flex justify-center items-end h-96 border border-gray-600 bg-black rounded-lg p-4 overflow-hidden">
        {array.map((value, index) => {
          const isActive = activeIndices.includes(index);
          const isSorted = index <= sortedBoundary;
          const barColor = isActive
            ? "bg-yellow-400"
            : isSorted
            ? "bg-green-500"
            : "bg-blue-500";

          return (
            <div
              key={index}
              className={`mx-0.5 w-3 md:w-4 transition-all duration-150 rounded-sm relative ${barColor}`}
              style={{ height: `${value * 3}px` }}
            >
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-white text-xs font-medium">
                {value}
              </span>
            </div>
          );
        })}
      </div>

      {/* Explanation Section */}
      
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-lg space-y-6">
  <h2 className="text-3xl font-bold text-center text-orange-300">
    How does Insertion Sort Algorithm work?
  </h2>
  <ul className="list-decimal list-inside space-y-2 text-lg pl-4">
    <li>
      <span className="text-yellow-300 font-medium">Start from Second Element:</span> The first element is considered sorted. Begin sorting from the second element.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Compare and Swap:</span> Compare the current element with the elements before it. If it's smaller, swap them until it's in the correct position.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Insert in Right Place:</span> Insert the element at the correct position within the sorted part of the array.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Repeat:</span> Continue this process for all remaining elements in the array.
    </li>
  </ul>
  <p className="text-lg text-gray-400 italic">
    Insertion Sort is efficient for small datasets and nearly sorted arrays with a time complexity of O(n²) in the worst case.
  </p>
</div>







      

     
     

      {/* Image Section */}
      <div className="flex justify-center items-center p-6">
        <img
          src={INSERTION_SORT_IMG_1}
          alt="Insertion Sort Visualization"
          className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="flex justify-center items-center p-6">
        <img
          src={INSERTION_SORT_IMG_2}
          alt="Insertion Sort Visualization"
          className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
        </div>
        <div className="flex justify-center items-center p-6">
        <img
          src={INSERTION_SORT_IMG_3}
          alt="Insertion Sort Visualization"
          className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
        </div>
        <div className="flex justify-center items-center p-6">
        <img
          src={INSERTION_SORT_IMG_4}
          alt="Insertion Sort Visualization"
          className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
        </div>
        <div className="flex justify-center items-center p-6">
        <img
          src={INSERTION_SORT_IMG_5}
          alt="Insertion Sort Visualization"
          className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
        </div>
        
        <div className="flex flex-col items-center justify-center p-6 space-y-4">
        <p className="text-xl font-semibold text-black-300">Illustration</p>
       <img
        src={INSERTION_SORT_IMG_6}
        alt="Insertion Sort Visualization"
        className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
       />
      </div>

      {/* Step-by-Step Insertion Sort Walkthrough */}

      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-lg space-y-6">
  <h2 className="text-3xl font-bold text-center text-orange-300">
    Step-by-Step Insertion Sort Walkthrough
  </h2>

  <p className="text-lg">
    <span className="text-yellow-300 font-medium">Initial Array:</span> <code className="text-green-400">[23, 1, 10, 5, 2]</code>
  </p>

  <div className="space-y-4">
    <div>
      <h3 className="text-xl text-blue-300 font-semibold">First Pass:</h3>
      <p>Compare <span className="text-green-400">1</span> with <span className="text-green-400">23</span>. Since 1 is smaller, insert it before 23.</p>
      <p className="italic text-gray-400">Sorted part: [1, 23]</p>
    </div>

    <div>
      <h3 className="text-xl text-blue-300 font-semibold">Second Pass:</h3>
      <p>Compare <span className="text-green-400">10</span> with <span className="text-green-400">1</span> and <span className="text-green-400">23</span>. Insert 10 between 1 and 23.</p>
      <p className="italic text-gray-400">Sorted part: [1, 10, 23]</p>
    </div>

    <div>
      <h3 className="text-xl text-blue-300 font-semibold">Third Pass:</h3>
      <p>Compare <span className="text-green-400">5</span> with <span className="text-green-400">1, 10, 23</span>. Insert 5 between 1 and 10.</p>
      <p className="italic text-gray-400">Sorted part: [1, 5, 10, 23]</p>
    </div>

    <div>
      <h3 className="text-xl text-blue-300 font-semibold">Fourth Pass:</h3>
      <p>Compare <span className="text-green-400">2</span> with <span className="text-green-400">1, 5, 10, 23</span>. Insert 2 between 1 and 5.</p>
      <p className="italic text-gray-400">Sorted part: [1, 2, 5, 10, 23]</p>
    </div>

    <div className="pt-4 border-t border-gray-700">
      <h3 className="text-xl text-green-300 font-semibold">Final Sorted Array:</h3>
      <p><code className="text-green-400">[1, 2, 5, 10, 23]</code></p>
    </div>
  </div>
</div>



{/*  Complexity Analysis of Insertion Sort */}
<div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-lg space-y-6">
  <h2 className="text-3xl font-bold text-center text-orange-300">
    Complexity Analysis of Insertion Sort
  </h2>

  <div className="space-y-4">
    <div>
      <h3 className="text-xl font-semibold text-yellow-300">Time Complexity:</h3>
      <ul className="list-disc list-inside space-y-2 text-lg pl-4">
        <li><span className="text-green-400 font-medium">Best Case:</span> O(n), when the list is already sorted.</li>
        <li><span className="text-green-400 font-medium">Average Case:</span> O(n²), when the list is randomly ordered.</li>
        <li><span className="text-green-400 font-medium">Worst Case:</span> O(n²), when the list is in reverse order.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-yellow-300">Space Complexity:</h3>
      <p className="text-lg">
        <span className="text-green-400 font-medium">Auxiliary Space:</span> O(1), since Insertion Sort is an in-place sorting algorithm.
      </p>
    </div>
  </div>

  <p className="text-gray-400 italic text-center">
    Insertion Sort is ideal for small or nearly sorted datasets due to its simplicity and minimal memory usage.
  </p>
</div>

        

{/*  Advantages and Disadvantages of Insertion Sort */}
<div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-lg space-y-6">
  <h2 className="text-3xl font-bold text-center text-orange-300">
    Advantages and Disadvantages of Insertion Sort
  </h2>

  <div className="space-y-4">
    <div>
      <h3 className="text-xl font-semibold text-yellow-300">Advantages:</h3>
      <ul className="list-disc list-inside space-y-2 text-lg pl-4">
        <li><span className="text-green-400 font-medium">Simple and Easy to Implement:</span> Insertion Sort is intuitive and doesn't require complex operations.</li>
        <li><span className="text-green-400 font-medium">Stable Sorting Algorithm:</span> It preserves the relative order of elements with equal values.</li>
        <li><span className="text-green-400 font-medium">Efficient for Small and Nearly Sorted Lists:</span> It performs well with small datasets and when the list is almost sorted.</li>
        <li><span className="text-green-400 font-medium">Space-Efficient:</span> Insertion Sort is an in-place algorithm that requires O(1) additional space.</li>
        <li><span className="text-green-400 font-medium">Adaptive:</span> The number of inversions directly correlates with the number of swaps. For a sorted array, no swapping happens, and it only takes O(n) time.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-yellow-300">Disadvantages:</h3>
      <ul className="list-disc list-inside space-y-2 text-lg pl-4">
        <li><span className="text-red-400 font-medium">Time Complexity:</span> O(n²) in the worst and average case makes it inefficient for large datasets.</li>
        <li><span className="text-red-400 font-medium">Not Suitable for Large Lists:</span> As the time complexity increases quadratically, it becomes impractical for large datasets.</li>
      </ul>
    </div>
  </div>

  <p className="text-lg text-gray-400 italic text-center">
    Insertion Sort shines for small, nearly sorted datasets, but its performance degrades as the input size grows.
  </p>
</div>

  {/* Applications of Insertion Sort */}

<div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-lg space-y-6">
  <h2 className="text-3xl font-bold text-center text-orange-300">
    Applications of Insertion Sort
  </h2>

  <div className="space-y-4">
    <ul className="list-decimal list-inside space-y-2 text-lg pl-4">
      <li><span className="text-yellow-300 font-medium">Small or Nearly Sorted Lists:</span> Insertion Sort excels when dealing with small datasets or lists that are already partially sorted.</li>
      <li><span className="text-yellow-300 font-medium">Simplicity and Stability:</span> When simplicity and stability are essential, Insertion Sort provides an easy-to-understand and stable sorting solution.</li>
      <li><span className="text-yellow-300 font-medium">Subroutine in Bucket Sort:</span> It is commonly used as a subroutine in the Bucket Sort algorithm, especially for sorting individual buckets.</li>
      <li><span className="text-yellow-300 font-medium">Efficient for Nearly Sorted Arrays:</span> When the array is almost sorted with very few inversions, Insertion Sort can be more efficient than other algorithms.</li>
      <li><span className="text-yellow-300 font-medium">Hybrid Sorting Algorithms:</span> Insertion Sort is used in hybrid sorting algorithms like IntroSort and TimSort, where it is applied to small subarrays during the recursion process.</li>
    </ul>
  </div>

  <p className="text-lg text-gray-400 italic text-center">
    Insertion Sort shines when working with small, nearly sorted datasets, and it serves as a key component in more complex hybrid sorting algorithms.
  </p>
</div>

  
        {/* Footer Section */}
        <div className="flex justify-center items-center p-6">
          <p className="text-gray-400 text-sm">
            &copy; 2023 Sorting Visualizer. All rights reserved.
          </p>
        </div>

        
    </div>
  );
};

