// Merge.jsx
import React, { useState, useEffect } from 'react';
import MERGE_SORT_IMG from "../../assets/Merge-Sort-Algorithm-(1).png";
import MERGESORTGIF from "../../assets/img_mergesort_long.png";
import MERGE_SORT_1 from "../../assets/Merge-Sort-1.jpg";
import MERGE_SORT_2 from "../../assets/Merge-Sort-2.jpg";
import MERGE_SORT_3 from "../../assets/Merge-Sort-3.jpg";
import MERGE_SORT_4 from "../../assets/Merge-Sort-4.jpg";
import MERGESORT from "../../assets/merge-sort-400.gif";


export const Merge = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(300);
  const [isSorting, setIsSorting] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeIndices, setActiveIndices] = useState([]);

  useEffect(() => {
    generateNewArray();
  }, []);

  const generateNewArray = () => {
    const newArr = Array.from({ length: 25 }, () => Math.floor(Math.random() * 100) + 5);
    setArray(newArr);
    setActiveIndices([]);
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const mergeSort = async (arr, l, r) => {
    if (l < r) {
      const m = Math.floor((l + r) / 2);
      await mergeSort(arr, l, m);
      await mergeSort(arr, m + 1, r);
      await merge(arr, l, m, r);
    }
  };

  const merge = async (arr, l, m, r) => {
    let left = arr.slice(l, m + 1);
    let right = arr.slice(m + 1, r + 1);

    let i = 0, j = 0, k = l;
    while (i < left.length && j < right.length) {
      setActiveIndices([k]);
      if (left[i] <= right[j]) {
        arr[k++] = left[i++];
      } else {
        arr[k++] = right[j++];
      }
      setArray([...arr]);
      await sleep(speed);
    }

    while (i < left.length) {
      setActiveIndices([k]);
      arr[k++] = left[i++];
      setArray([...arr]);
      await sleep(speed);
    }

    while (j < right.length) {
      setActiveIndices([k]);
      arr[k++] = right[j++];
      setArray([...arr]);
      await sleep(speed);
    }
  };

  const startMergeSort = async () => {
    setIsSorting(true);
    let arrCopy = [...array];
    await mergeSort(arrCopy, 0, arrCopy.length - 1);
    setActiveIndices([]);
    setIsSorting(false);
  };

  const handleAddValue = () => {
    if (inputValue.trim() === "") return;
    const values = inputValue.split(',').map(v => parseInt(v.trim(), 10)).filter(v => !isNaN(v) && v > 0);
    if (values.length > 0) {
      setArray(values);
      setInputValue("");
    }
  };

  return (
    // heading section
    <div className='mt-24 px-4 md:px-24 flex flex-col gap-10'>
     <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent px-4 py-6 leading-tight tracking-tight transition-transform duration-300 ease-in-out transform hover:scale-105 hover:drop-shadow-[0_5px_25px_rgba(100,100,255,0.4)]">
      Merge Sort Algorithm
    </h1>

      {/* button of visualization */}

    <div className="flex flex-col items-center justify-center text-center p-6">
      <p className="text-lg md:text-xl mb-6 text-gray-800 font-medium max-w-3xl mx-auto">
    Ready to learn Merge Sort visually? Dive into our step-by-step interactive simulation now!
      </p>

      <a href="/visualization/MergeVisualize">
          <button
      className="px-8 py-3 bg-yellow-300 text-black font-bold rounded-full shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:scale-105 hover:shadow-xl"
           >
          Explore Visualization
          </button>
     </a>
    </div>

      {/* define section intro */}
      <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700">
        Merge Sort is a Divide and Conquer algorithm that splits the array into halves, sorts each half, and then merges them back together in sorted order.
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="Enter comma-separated numbers"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isSorting}
          className="w-full md:w-96 px-4 py-2 rounded-md shadow-lg text-black"
        />
        <button
          onClick={handleAddValue}
          disabled={isSorting}
          className={`px-6 py-2 font-bold rounded-lg transition-all shadow-lg ${isSorting ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'} text-white`}
        >
          Add Values
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <button
          onClick={startMergeSort}
          disabled={isSorting}
          className={`px-6 py-3 font-bold rounded-lg transition-all shadow-lg ${isSorting ? 'bg-gray-500 cursor-not-allowed' : 'bg-pink-600 hover:bg-pink-700'} text-white`}
        >
          {isSorting ? 'Sorting...' : 'Start Merge Sort'}
        </button>

        <div className="flex flex-col text-white">
          <label htmlFor="speedSlider" className="mb-1">Speed: {speed}ms</label>
          <input
            type="range"
            id="speedSlider"
            min="100"
            max="1000"
            step="50"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-64"
          />
        </div>

        <button
          onClick={generateNewArray}
          disabled={isSorting}
          className={`px-6 py-3 font-bold rounded-lg transition-all shadow-lg ${isSorting ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
        >
          New Array
        </button>
      </div>

      <div className="flex items-end justify-start h-[420px] bg-black rounded-lg mt-7 p-4 gap-[4px] overflow-x-auto">
        {array.map((value, idx) => {
          let bgClass = "bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500";
          if (activeIndices.includes(idx)) bgClass = "bg-yellow-400";

          return (
            <div key={idx} className="flex flex-col items-center w-8 relative">
              <div className="absolute -top-7 text-white text-sm font-medium">
                {value}
              </div>
              <div
                style={{ height: `${value}px` }}
                className={`w-full ${bgClass} rounded-t`}
              ></div>
            </div>
          );
        })}
      </div>
        {/* How does Merge Sort Algorithm work? */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-lg space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-300">
          How does Merge Sort Algorithm work?
        </h2>

        <p className="text-lg leading-relaxed">
          Merge Sort is a classic example of a <span className="text-yellow-400 font-semibold">Divide and Conquer</span> algorithm.
        </p>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-pink-400">Steps Involved:</h3>
          <ul className="list-decimal list-inside space-y-2 text-base pl-4">
            <li>
              <span className="text-yellow-300 font-medium">Divide:</span> Recursively split the array into halves until each sub-array contains a single element.
            </li>
            <li>
              <span className="text-yellow-300 font-medium">Conquer:</span> Merge the sub-arrays back together in the correct order.
            </li>
            <li>
              <span className="text-yellow-300 font-medium">Combine:</span> Continue merging and sorting until the entire array is sorted.
            </li>
          </ul>
        </div>

        <p className="text-lg text-gray-400 italic">
          Merge Sort guarantees a worst-case time complexity of O(n log n) and is stable in nature.
        </p>
      </div>

        {/* image section */}
      <div className="flex justify-center mt-8">
        <img src={MERGE_SORT_IMG} alt="Merge Sort" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>

      <div className="flex justify-center mt-8">
        <img src={MERGESORTGIF} alt="Merge Sort Gif" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>

      
      <div className="flex justify-center mt-8">
        <img src={MERGESORT} alt="Merge Sort Gif" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>



        {/* Complexity Analysis of Merge Sort  */}

      <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white p-8 rounded-xl shadow-lg mt-10 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400">
          Complexity Analysis of Merge Sort
        </h2>

        <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
          <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-400 mb-1">🕒 Time Complexity:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><span className="text-green-300 font-medium">Best Case (Ω(n log n)):</span> Even in the best case, merge sort performs log n levels of merging.</li>
              <li><span className="text-yellow-300 font-medium">Average Case (θ(n log n)):</span> It consistently performs well on average.</li>
              <li><span className="text-red-300 font-medium">Worst Case (O(n log n)):</span> Time complexity remains optimal for worst-case scenarios.</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold text-purple-400 mb-1">💾 Space Complexity:</h3>
            <p>
              Merge Sort requires additional space of O(n) to store temporary arrays during merging.
            </p>
          </div>
        </div>
      </div>

      {/* Illustration of Merge Sort: */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white p-8 rounded-xl shadow-lg mt-10 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400">
        Illustration of Merge Sort:
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed">
        Let's sort the array or list [38, 27, 43, 10] using Merge Sort.
        </p>
      </div>

       {/* image section */}
       <div className="flex justify-center mt-8">
        <img src={MERGE_SORT_1} alt="Merge Sort" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>

      <div className="flex justify-center mt-8">
        <img src={MERGE_SORT_2} alt="Merge Sort" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>

      <div className="flex justify-center mt-8">
        <img src={MERGE_SORT_3} alt="Merge Sort" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>

      <div className="flex justify-center mt-8">
        <img src={MERGE_SORT_4} alt="Merge Sort" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>

        
        {/* Merge Sort Step-by-Step Example */}
      <div className="bg-white p-6 rounded-xl shadow-md mt-6">
  <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
    Merge Sort Step-by-Step Example
  </h2>

  <div className="space-y-4 text-gray-800">
    <div>
      <h3 className="text-lg font-semibold text-blue-600">Original Array:</h3>
      <p className="ml-4">[38, 27, 43, 10]</p>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-blue-600">Divide:</h3>
      <ul className="list-disc ml-8">
        <li>[38, 27, 43, 10] → [38, 27] and [43, 10]</li>
        <li>[38, 27] → [38] and [27]</li>
        <li>[43, 10] → [43] and [10]</li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-green-600">Conquer:</h3>
      <ul className="list-disc ml-8">
        <li>[38] is already sorted</li>
        <li>[27] is already sorted</li>
        <li>[43] is already sorted</li>
        <li>[10] is already sorted</li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-purple-600">Merge:</h3>
      <ul className="list-disc ml-8">
        <li>Merge [38] and [27] → [27, 38]</li>
        <li>Merge [43] and [10] → [10, 43]</li>
        <li>Merge [27, 38] and [10, 43] → [10, 27, 38, 43]</li>
      </ul>
    </div>

    <div className="bg-indigo-100 rounded-md p-4 text-indigo-700 font-semibold">
      ✅ Final Sorted List: [10, 27, 38, 43]
    </div>
  </div>
</div>

{/* Applications of Merge Sort */}
<div className="bg-white p-6 rounded-xl shadow-lg mt-8">
  <h2 className="text-2xl font-bold text-indigo-600 mb-4 text-center">Applications of Merge Sort</h2>
  <ul className="list-disc ml-6 text-gray-800 space-y-2">
    <li>Sorting large datasets</li>
    <li>External sorting (when the dataset is too large to fit in memory)</li>
    <li>Inversion counting</li>
    <li>Used in library methods of programming languages (e.g., TimSort in Python, Java Android, Swift)</li>
    <li><code>Arrays.sort()</code> in Java uses QuickSort, while <code>Collections.sort()</code> uses MergeSort</li>
    <li>Preferred for sorting Linked Lists</li>
    <li>Highly parallelizable—subarrays can be sorted independently</li>
    <li>Merge function is useful for problems like union and intersection of sorted arrays</li>
  </ul>

{/* Advantages and Disadvantages of Merge Sort */}

  <h2 className="text-2xl font-bold text-indigo-600 mt-8 mb-4 text-center">
    Advantages and Disadvantages of Merge Sort
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
    <div className="bg-green-100 p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-green-700 mb-2">Advantages</h3>
      <ul className="list-disc ml-5 space-y-1">
        <li><strong>Stability:</strong> Maintains the relative order of equal elements.</li>
        <li><strong>Guaranteed worst-case performance:</strong> O(N log N).</li>
        <li><strong>Simple to implement:</strong> Straightforward divide-and-conquer logic.</li>
        <li><strong>Naturally Parallel:</strong> Independent merging makes it suitable for parallelization.</li>
      </ul>
    </div>

    <div className="bg-red-100 p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-red-700 mb-2">Disadvantages</h3>
      <ul className="list-disc ml-5 space-y-1">
        <li><strong>Space complexity:</strong> Requires additional memory for merging.</li>
        <li><strong>Not in-place:</strong> Needs extra space to store the sorted array.</li>
        <li><strong>Slower than QuickSort:</strong> Less cache-friendly due to memory usage.</li>
      </ul>
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


