
//new code

import React, { useEffect, useState } from "react";
import SELECTION_SORT_1 from "../../assets/Selection-Sort-Algorithm-1.webp";
import SELECTION_SORT_2 from "../../assets/Selection-Sort-Algorithm-2.webp";
import SELECTION_SORT_3 from "../../assets/Selection-Sort-Algorithm-3.webp";
import SELECTION_SORT_4 from "../../assets/Selection-Sort-Algorithm-4.webp";
import SELECTION_SORT_5 from "../../assets/Selection-Sort-Algorithm-5.webp";
import SELECTION_SORT_6 from "../../assets/Selection-Sort-Algorithm-6.webp";

export const Selection = () => {
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

  const selectionSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        setActiveIndices([minIndex, j]);
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
        await sleep(speed);
      }

      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        setArray([...arr]);
      }

      setSortedBoundary(i + 1);
    }

    setActiveIndices([]);
    setSortedBoundary(n);
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
  Selection Sort Algorithm
    </h1>


    {/* button of visualization */}

<div className="flex flex-col items-center justify-center text-center p-6">
      <p className="text-lg md:text-xl mb-6 text-gray-800 font-medium max-w-3xl mx-auto">
    Ready to learn Selection Sort visually? Dive into our step-by-step interactive simulation now!
      </p>

      <a href="/visualization/SelectionVisualize">
          <button
      className="px-8 py-3 bg-yellow-300 text-black font-bold rounded-full shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:scale-105 hover:shadow-xl"
           >
          Explore Visualization
          </button>
     </a>
    </div>

    {/*description section*/}
    
<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700">
Selection Sort is a comparison-based sorting algorithm. It sorts an array by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element. This process continues until the entire array is sorted.
 </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          onClick={generateNewArray}
          disabled={isSorting}
        >
          Generate New Array
        </button>

        <input
          type="text"
          className="border px-3 py-2 rounded"
          placeholder="Enter numbers e.g. 10,20,30"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isSorting}
        />

        <button
          className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
          onClick={handleAddValue}
          disabled={isSorting}
        >
          Add Values
        </button>

        <button
          className="px-4 py-2 bg-purple-700 text-white rounded disabled:opacity-50"
          onClick={selectionSort}
          disabled={isSorting}
        >
          Start Selection Sort
        </button>

        <div className="flex items-center gap-2">
          <input
            type="range"
            min="50"
            max="1000"
            step="50"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-40"
          />
          <span>Speed: {speed}ms</span>
        </div>
      </div>

      {/* Color Legend */}
<div className="flex justify-center gap-6 mb-4 text-sm font-medium">
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 bg-red-500 rounded"></div>
    <span>Comparing</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 bg-green-500 rounded"></div>
    <span> Sorted</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 bg-blue-500 rounded"></div>
    <span> Unsorted</span>
  </div>
</div>

{/* Array Bars */}
<div className="flex items-end justify-center gap-1 h-64 border p-2 bg-gray-50 rounded">
  {array.map((value, idx) => {
    let barColor = "bg-blue-500"; // default: unsorted
    if (activeIndices.includes(idx)) barColor = "bg-red-500"; // comparing
    else if (sortedBoundary !== null && idx < sortedBoundary) barColor = "bg-green-500"; // sorted

    return (
      <div
        key={idx}
        className={`flex flex-col items-center justify-end ${barColor} rounded-md`}
        style={{
          height: `${value * 2.5}px`,
          width: "24px",
          transition: "height 0.3s ease, background-color 0.3s ease",
        }}
        title={`Value: ${value}`}
      >
        <span className="text-xs text-white font-bold mb-1">{value}</span>
      </div>
    );
  })}
</div>

      {/* Explanation Section */}

<div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-lg space-y-6">
  <h2 className="text-3xl font-bold text-center text-orange-300">
    How does Selection Sort Algorithm work?
  </h2>
  <ul className="list-decimal list-inside space-y-2 text-lg pl-4">
    <li>
      <span className="text-yellow-300 font-medium">Find Minimum:</span> First, we find the smallest element in the array and swap it with the first element.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Next Minimum:</span> Then, we look for the smallest element among the remaining elements and swap it with the second element.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Repeat:</span> We continue this process, finding the next smallest and placing it at its correct position.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Sorted Array:</span> By the end, all elements are placed in ascending order, one by one.
    </li>
  </ul>
  <p className="text-lg text-gray-400 italic">
    Selection Sort performs well on small datasets but is not suitable for large inputs due to its O(n²) time complexity.
  </p>
</div>

      {/* Step-by-Step Images */}
      {[SELECTION_SORT_1, SELECTION_SORT_2, SELECTION_SORT_3, SELECTION_SORT_4, SELECTION_SORT_5, SELECTION_SORT_6].map((src, i) => (
        <div key={i} className="flex justify-center mt-8">
          <img src={src} alt={`Selection Sort Step ${i + 1}`} className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
      ))}

 {/*  Complexity Analysis of Selection Sort */}
<div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-lg space-y-6">
  <h2 className="text-3xl font-bold text-center text-orange-300">
    Complexity Analysis of Selection Sort
  </h2>
  <ul className="list-disc list-inside space-y-2 text-lg pl-4">
    <li>
      <span className="text-yellow-300 font-medium">Time Complexity:</span> O(n²), due to two nested loops:
      <ul className="list-disc list-inside pl-6 space-y-1 text-gray-300">
        <li>One loop to select each element one by one → O(n)</li>
        <li>Another loop to compare that element with every other → O(n)</li>
        <li>Hence, overall complexity = O(n) × O(n) = O(n²)</li>
      </ul>
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Auxiliary Space:</span> O(1), as only a constant amount of extra memory is used for temporary variables during swapping.
    </li>
  </ul>
  <p className="text-lg text-gray-400 italic">
    Selection Sort is an in-place algorithm with predictable time complexity, but it's inefficient for large datasets.
  </p>
</div>

{/*  Advantages of Selection Sort */}
<div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-lg space-y-6">
  <h2 className="text-3xl font-bold text-center text-green-400">
    Advantages of Selection Sort
  </h2>
  <ul className="list-disc list-inside space-y-2 text-lg pl-4">
    <li>Easy to understand and implement, making it ideal for teaching basic sorting concepts.</li>
    <li>Requires only a constant <span className="text-yellow-300 font-medium">O(1)</span> extra memory space.</li>
    <li>
      Requires fewer swaps (or memory writes) compared to many other standard sorting algorithms.
      Only <span className="text-yellow-300 font-medium">Cycle Sort</span> performs better in terms of memory writes.
    </li>
    <li>
      A suitable choice when <span className="text-yellow-300 font-medium">memory write operations are expensive</span>, such as in flash memory.
    </li>
  </ul>
</div>

{/*  Disadvantages of Selection Sort */}
<div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-lg space-y-6">
  <h2 className="text-3xl font-bold text-center text-red-400">
    Disadvantages of Selection Sort
  </h2>
  <ul className="list-disc list-inside space-y-2 text-lg pl-4">
    <li>
      Has a time complexity of <span className="text-yellow-300 font-medium">O(n²)</span>, which makes it slower than efficient algorithms like 
      <span className="text-yellow-300 font-medium"> Quick Sort</span> or <span className="text-yellow-300 font-medium">Merge Sort</span>, especially on large datasets.
    </li>
    <li>
      It is <span className="text-yellow-300 font-medium">not stable</span>, meaning it does not preserve the relative order of equal elements.
    </li>
  </ul>
  <p className="text-lg text-gray-400 italic">
    Selection Sort is best suited for small datasets or scenarios where memory writes are a key constraint.
  </p>
</div>

{/* Applications of Selection Sort */}
<div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-lg space-y-6">
  <h2 className="text-3xl font-bold text-center text-blue-400">
    Applications of Selection Sort
  </h2>
  <ul className="list-disc list-inside space-y-2 text-lg pl-4">
    <li>
      Perfect for teaching fundamental <span className="text-yellow-300 font-medium">sorting mechanisms</span> and algorithm design concepts.
    </li>
    <li>
      Suitable for <span className="text-yellow-300 font-medium">small datasets</span> where the overhead of more advanced algorithms isn’t justified.
    </li>
    <li>
      Useful in environments where <span className="text-yellow-300 font-medium">memory writing is costly</span>, as it minimizes the number of writes.
    </li>
    <li>
      The <span className="text-yellow-300 font-medium">Heap Sort</span> algorithm is conceptually based on Selection Sort principles.
    </li>
  </ul>
</div>

{/* Frequently Asked Questions about Selection Sort */}

<div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-lg space-y-6">
  <h2 className="text-3xl font-bold text-center text-purple-400">
    Frequently Asked Questions about Selection Sort
  </h2>
  <div className="space-y-4 text-lg">
    <div>
      <p className="text-yellow-300 font-medium">Q1: Is Selection Sort a stable sorting algorithm?</p>
      <p className="text-gray-300">No, Selection Sort is not stable as it may change the relative order of equal elements.</p>
    </div>
    <div>
      <p className="text-yellow-300 font-medium">Q2: What is the time complexity of Selection Sort?</p>
      <p className="text-gray-300">Selection Sort has a time complexity of O(n²) in the best, average, and worst cases.</p>
    </div>
    <div>
      <p className="text-yellow-300 font-medium">Q3: Does Selection Sort require extra memory?</p>
      <p className="text-gray-300">No, Selection Sort is an in-place sorting algorithm and requires only O(1) additional space.</p>
    </div>
    <div>
      <p className="text-yellow-300 font-medium">Q4: When is it best to use Selection Sort?</p>
      <p className="text-gray-300">Selection Sort is best used for small datasets, educational purposes, or when memory usage needs to be minimal.</p>
    </div>
    <div>
      <p className="text-yellow-300 font-medium">Q5: How does Selection Sort differ from Bubble Sort?</p>
      <p className="text-gray-300">Selection Sort selects the minimum element and places it in the correct position with fewer swaps, while Bubble Sort repeatedly swaps adjacent elements to sort the array.</p>
    </div>
  </div>
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