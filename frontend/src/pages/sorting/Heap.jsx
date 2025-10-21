//new code

import React, { useState, useEffect } from 'react';
import HEAP_SORT_IMG from "../../assets/Heap-sort-algo.png";
import HEAP_SORT_1 from "../../assets/build_max_heap 1.jpg";
import HEAP_SORT_2 from "../../assets/heap_data_structure 2.jpg";
import HEAP_SORT_3 from "../../assets/heap sort 3.jpg";
import HEAP_SORT_4 from "../../assets/heapsort 4.jpg";
import HEAP_SORT_5 from "../../assets/heapsort5.jpg";
import HEAP_SORT_6 from "../../assets/heapsort6.jpg";
import HEAP_SORT_7 from "../../assets/heapsort7.jpg";
import HEAP_SORT_8 from "../../assets/heapsort8.jpg";
import HEAP_SORT_GIF from "../../assets/max_heap_deletion_animation.gif";



export const Heap = () => {
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

  const heapify = async (arr, n, i) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      setActiveIndices([i, largest]);
      setArray([...arr]);
      await sleep(speed);
      await heapify(arr, n, largest);
    }
  };

  const heapSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      setActiveIndices([0, i]);
      setArray([...arr]);
      await sleep(speed);
      await heapify(arr, i, 0);
    }

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
      Heap Sort Algorithm
    </h1>

      {/* button of visualization */}

    <div className="flex flex-col items-center justify-center text-center p-6">
      <p className="text-lg md:text-xl mb-6 text-gray-800 font-medium max-w-3xl mx-auto">
    Ready to learn Heap Sort visually? Dive into our step-by-step interactive simulation now!
      </p>

      <a href="/visualization/HeapVisualize">
          <button
      className="px-8 py-3 bg-yellow-300 text-black font-bold rounded-full shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:scale-105 hover:shadow-xl"
           >
          Explore Visualization
          </button>
     </a>
    </div>

      {/* intro section */}

      <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700">
      Heap sort is a comparison-based sorting technique based on Binary Heap Data Structure. It can be seen as an optimization over selection sort where we first find the max (or min) element and swap it with the last (or first). We repeat the same process for the remaining elements. In Heap Sort, we use Binary Heap so that we can quickly find and move the max element in O(Log n) instead of O(n) and hence achieve the O(n Log n) time complexity.
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
          onClick={heapSort}
          disabled={isSorting}
          className={`px-6 py-3 font-bold rounded-lg transition-all shadow-lg ${isSorting ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
        >
          {isSorting ? 'Sorting...' : 'Start Heap Sort'}
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
          className={`px-6 py-3 font-bold rounded-lg transition-all shadow-lg ${isSorting ? 'bg-gray-500 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'} text-white`}
        >
          New Array
        </button>
      </div>

      <div className="flex items-end justify-start h-[420px] bg-black rounded-lg mt-7 p-4 gap-[4px] overflow-x-auto">
        {array.map((value, idx) => {
          let bgClass = "bg-gradient-to-t from-red-500 via-orange-400 to-yellow-300";
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

      {/*  How does Heap Sort Algorithm work? */}

      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-center text-orange-300">
          How does Heap Sort Algorithm work?
        </h2>
        <ul className="list-decimal list-inside space-y-2 text-lg pl-4">
          <li><span className="text-yellow-300 font-medium">Build Heap:</span> Rearrange the array into a max-heap structure.</li>
          <li><span className="text-yellow-300 font-medium">Extract Max:</span> Repeatedly remove the root (largest value) and place it at the end of the array.</li>
          <li><span className="text-yellow-300 font-medium">Heapify:</span> Restore the heap property after each extraction.</li>
        </ul>
        <p className="text-lg text-gray-400 italic">
          Heap Sort ensures a time complexity of O(n log n) in all cases but is not stable.
        </p>
      </div>

        {/* image section */}

      <div className="flex justify-center mt-8">
        <img src={HEAP_SORT_IMG} alt="Heap Sort Diagram" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>

      <div className="flex justify-center mt-8">
        <img src={HEAP_SORT_GIF} alt="Heap Sort Diagram" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>

  
      {/* Detailed Working of Heap Sort */}

       <div className="text-center my-6">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
            bg-clip-text text-transparent relative inline-block pb-2 
            after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-1.5 
            after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500 
            after:rounded-full after:transition-all after:duration-300 after:ease-in-out 
            hover:after:w-[102%] hover:after:h-2 hover:drop-shadow-lg">
            Detailed Working of Heap Sort
        </h2>
      </div>

        {/* example sextion */}

        <div>
        <h2 className="text-3xl font-bold text-orange-300 text-center my-4">
          Example
        </h2>

          <p className="text-lg text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700">
          Let us look at an example array to understand the sort algorithm better −
          12,	3,	9,	14,	10,	18,	8,	23
          </p>
        </div>

        {/* first step */}

        <div class="p-4 bg-white shadow-md rounded-2xl text-center max-w-2xl mx-auto mt-6">
        <h3 className="text-xl font-bold text-blue-400 mt-6 mb-2 text-center">
  Step 1:
</h3>

        <p class="text-lg font-medium text-gray-800 mb-4">
          Building a heap using the <span class="font-semibold text-blue-600">BUILD-MAX-HEAP</span> algorithm from the input array −
        </p>
          </div>
          {/* image section */}
           <div className="flex justify-center mt-8">
           <img src={HEAP_SORT_1} alt="Heap Sort Diagram" className="max-w-full h-auto rounded-lg shadow-lg" />
          </div>

          {/* second step

        <div className="p-4 bg-white shadow-md rounded-2xl text-center max-w-2xl mx-auto mt-6">
          <p className="text-lg font-medium text-gray-800 mb-4">
          Rearrange the obtained binary tree by exchanging the nodes such that a <span className="font-semibold text-blue-600">heap data structure</span> is formed.
          </p>
        </div> */}

        {/* image section */}
        {/* <div className="flex justify-center mt-8">
          <img src={HEAP_SORT_2} alt="Heap Sort Diagram" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>

        <div className="flex justify-center mt-8">
          <img src={HEAP_SORT_3} alt="Heap Sort Diagram" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>

        <div className="flex justify-center mt-8">
          <img src={HEAP_SORT_4} alt="Heap Sort Diagram" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>

        <div className="flex justify-center mt-8">
          <img src={HEAP_SORT_5} alt="Heap Sort Diagram" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>

        <div className="flex justify-center mt-8">
          <img src={HEAP_SORT_6} alt="Heap Sort Diagram" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>

        <div className="flex justify-center mt-8">
          <img src={HEAP_SORT_7} alt="Heap Sort Diagram" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>

        <div className="flex justify-center mt-8">
          <img src={HEAP_SORT_8} alt="Heap Sort Diagram" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div> */}



{/* second step */}
<div className="p-4 bg-white shadow-md rounded-2xl text-center max-w-2xl mx-auto mt-6">
<h3 className="text-xl font-bold text-blue-400 mt-6 mb-2 text-center">
  Step 2:
</h3>

  
  <p className="text-lg font-medium text-gray-800 mb-4">
    Apply max-heapify on all non-leaf nodes. The largest value bubbles up to the top (root) of the heap.
  </p>
</div>
<div className="flex justify-center mt-8">
  <img src={HEAP_SORT_2} alt="Max Heapify Step" className="max-w-full h-auto rounded-lg shadow-lg" />
</div>

{/* third step */}
<div className="p-4 bg-white shadow-md rounded-2xl text-center max-w-2xl mx-auto mt-6">
<h3 className="text-xl font-bold text-blue-400 mt-6 mb-2 text-center">
  Step 3:
</h3>
  <p className="text-lg font-medium text-gray-800 mb-4">
    Swap the root (largest value) with the last element of the heap.
  </p>
</div>
<div className="flex justify-center mt-8">
  <img src={HEAP_SORT_3} alt="Swap with last element" className="max-w-full h-auto rounded-lg shadow-lg" />
</div>

{/* fourth step */}
<div className="p-4 bg-white shadow-md rounded-2xl text-center max-w-2xl mx-auto mt-6">
<h3 className="text-xl font-bold text-blue-400 mt-6 mb-2 text-center">
  Step 4:
</h3>
  <p className="text-lg font-medium text-gray-800 mb-4">
    Reduce the heap size by one and apply max-heapify on the new root.
  </p>
</div>
<div className="flex justify-center mt-8">
  <img src={HEAP_SORT_4} alt="Heapify Reduced Heap" className="max-w-full h-auto rounded-lg shadow-lg" />
</div>

{/* fifth step */}
<div className="p-4 bg-white shadow-md rounded-2xl text-center max-w-2xl mx-auto mt-6">
<h3 className="text-xl font-bold text-blue-400 mt-6 mb-2 text-center">
  Step 5:
</h3>
  <p className="text-lg font-medium text-gray-800 mb-4">
    Repeat the process: swap root with the last unsorted element and heapify again.
  </p>
</div>
<div className="flex justify-center mt-8">
  <img src={HEAP_SORT_5} alt="Repeat Swap and Heapify" className="max-w-full h-auto rounded-lg shadow-lg" />
</div>

{/* sixth step */}
<div className="p-4 bg-white shadow-md rounded-2xl text-center max-w-2xl mx-auto mt-6">
<h3 className="text-xl font-bold text-blue-400 mt-6 mb-2 text-center">
  Step 6:
</h3>
  <p className="text-lg font-medium text-gray-800 mb-4">
    Continue until all elements are sorted in ascending order.
  </p>
</div>
<div className="flex justify-center mt-8">
  <img src={HEAP_SORT_6} alt="Continue Sorting" className="max-w-full h-auto rounded-lg shadow-lg" />
</div>

{/* seventh step */}
<div className="p-4 bg-white shadow-md rounded-2xl text-center max-w-2xl mx-auto mt-6">
<h3 className="text-xl font-bold text-blue-400 mt-6 mb-2 text-center">
  Step 7:
</h3>
  <p className="text-lg font-medium text-gray-800 mb-4">
    The heap is now empty, and the array is fully sorted.
  </p>
</div>
<div className="flex justify-center mt-8">
  <img src={HEAP_SORT_7} alt="Heap Empty" className="max-w-full h-auto rounded-lg shadow-lg" />
</div>

{/* final visualization */}
<div className="p-4 bg-white shadow-md rounded-2xl text-center max-w-2xl mx-auto mt-6">
<h3 className="text-xl font-bold text-blue-400 mt-6 mb-2 text-center">
  Step 8:
</h3>
  <p className="text-lg font-medium text-gray-800 mb-4">
    Final sorted array shown using heap visualization.
  </p>
</div>
<div className="flex justify-center mt-8 mb-12">
  <img src={HEAP_SORT_8} alt="Final Sorted Array" className="max-w-full h-auto rounded-lg shadow-lg" />
</div>

      {/*   Important Points about Heap Sort */}

        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-lg space-y-6">
  <h2 className="text-3xl font-bold text-center text-orange-300">
    Important Points about Heap Sort
  </h2>
  <ul className="list-disc list-inside space-y-3 text-lg pl-4">
    <li>
      <span className="text-yellow-300 font-medium">In-Place Algorithm:</span> Heap sort is performed in-place, requiring no extra memory.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Stability:</span> Its standard implementation is <span className="text-red-400 font-semibold">not stable</span>, but it can be made stable.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Performance:</span> Generally 2–3 times slower than a well-implemented QuickSort due to <span className="italic text-gray-300">poor locality of reference</span>.
    </li>
  </ul>
</div>


{/*  Advantages of Heap Sort */}

<div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-lg space-y-6">
  <h2 className="text-3xl font-bold text-center text-green-300">
    Advantages of Heap Sort
  </h2>
  <ul className="list-disc list-inside space-y-4 text-lg pl-4 text-gray-200">
    <li>
      <span className="text-yellow-300 font-medium">Efficient Time Complexity:</span> Heap Sort maintains a time complexity of 
      <span className="font-semibold text-blue-400"> O(n log n)</span> in all cases, making it efficient for sorting large datasets. 
      The <span className="italic">log n</span> factor comes from the height of the binary heap.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Memory Usage:</span> Requires minimal memory when using an iterative <code className="bg-gray-700 px-1 py-0.5 rounded text-sm text-green-300">heapify()</code>. 
      It doesn’t need extra space beyond the input array.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Simplicity:</span> Easier to understand than some other efficient sorting algorithms since it doesn’t require advanced concepts like recursion.
    </li>
  </ul>
</div>

{/* Disadvantages of Heap Sort */}
<div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-lg space-y-6">
  <h2 className="text-3xl font-bold text-center text-red-300">
    Disadvantages of Heap Sort
  </h2>
  <ul className="list-disc list-inside space-y-4 text-lg pl-4 text-gray-200">
    <li>
      <span className="text-yellow-300 font-medium">Costly:</span> Heap Sort can be costly due to higher constant factors when compared to Merge Sort, 
      even though both have a time complexity of <span className="text-blue-400 font-semibold">O(n log n)</span>.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Unstable:</span> It is an <span className="text-red-400 font-semibold">unstable</span> sort; the relative order of equal elements may be altered.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Inefficient:</span> Heap Sort tends to be inefficient in practice due to 
      high constant factors in its time complexity, making it slower than some other algorithms like QuickSort.
    </li>
  </ul>
</div>

      {/* Complexity Analysis of Heap Sort */}

      <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white p-8 rounded-xl shadow-lg mt-10 space-y-6">
        <h2 className="text-3xl font-bold text-center text-yellow-400">
          Complexity Analysis of Heap Sort
        </h2>
        <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
          <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-400 mb-1">🕒 Time Complexity:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><span className="text-green-300 font-medium">Best Case:</span> O(n log n)</li>
              <li><span className="text-yellow-300 font-medium">Average Case:</span> O(n log n)</li>
              <li><span className="text-red-300 font-medium">Worst Case:</span> O(n log n)</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold text-purple-400 mb-1">💾 Space Complexity:</h3>
            <p>Heap Sort is an in-place algorithm with space complexity of O(1), but it is not stable.</p>
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


