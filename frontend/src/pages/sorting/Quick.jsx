import React, { useState, useEffect } from 'react';
import QUICK_SORT_IMG from "../../assets/quick sort.webp";
import QUICKSORTIMG from "../../assets/quick.gif";

export const Quick = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(300);
  const [isSorting, setIsSorting] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeIndices, setActiveIndices] = useState([]);
  const [pivotIndex, setPivotIndex] = useState(null);

  useEffect(() => {
    generateNewArray();
  }, []);

  const generateNewArray = () => {
    const newArr = Array.from({ length: 25}, () => Math.floor(Math.random() *100 ) + 5); //
    setArray(newArr);
    setActiveIndices([]);
    setPivotIndex(null);
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const quickSort = async (arr, low, high) => {
    if (low < high) {
      const pi = await partition(arr, low, high);
      await quickSort(arr, low, pi - 1);
      await quickSort(arr, pi + 1, high);
    }
  };

  const partition = async (arr, low, high) => {
    const pivot = arr[high];
    setPivotIndex(high);
    let i = low - 1;
    for (let j = low; j < high; j++) {
      setActiveIndices([i + 1, j]);
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        await sleep(speed);
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    setActiveIndices([i + 1, high]);
    await sleep(speed);
    setPivotIndex(null);
    return i + 1;
  };

  const startQuickSort = async () => {
    setIsSorting(true);
    let arrCopy = [...array];
    await quickSort(arrCopy, 0, arrCopy.length - 1);
    setActiveIndices([]);
    setPivotIndex(null);
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
  Quick Sort Algorithm
</h1>

{/* button of visualization */}

<div className="flex flex-col items-center justify-center text-center p-6">
      <p className="text-lg md:text-xl mb-6 text-gray-800 font-medium max-w-3xl mx-auto">
    Ready to learn Quick Sort visually? Dive into our step-by-step interactive simulation now!
      </p>

      <a href="/visualization/QuickVisualize">
          <button
      className="px-8 py-3 bg-yellow-300 text-black font-bold rounded-full shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:scale-105 hover:shadow-xl"
           >
          Explore Visualization
          </button>
     </a>
    </div>

      {/* defection  section */}

      <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700">
        QuickSort is a sorting algorithm based on the Divide and Conquer that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.<span className="text-yellow-400 font-semibold"></span> 
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
          onClick={startQuickSort}
          disabled={isSorting}
          className={`px-6 py-3 font-bold rounded-lg transition-all shadow-lg ${isSorting ? 'bg-gray-500 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'} text-white`}
        >
          {isSorting ? 'Sorting...' : 'Start Quick Sort'}
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
          let bgClass = "bg-gradient-to-t from-purple-500 via-blue-500 to-teal-400";
          if (pivotIndex === idx) bgClass = "bg-red-500";
          else if (activeIndices.includes(idx)) bgClass = "bg-yellow-400";

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

        {/* how quick sort work section */}

      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-lg space-y-6">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400">
    How does QuickSort Algorithm work?
  </h2>

  <p className="text-lg leading-relaxed">
    QuickSort works on the principle of <span className="text-yellow-400 font-semibold">Divide and Conquer</span>,
    breaking down the problem into smaller sub-problems.
  </p>

  <div className="space-y-4">
    <h3 className="text-2xl font-semibold text-purple-400">Steps Involved:</h3>
    <ul className="list-decimal list-inside space-y-2 text-base pl-4">
      <li>
        <span className="text-cyan-300 font-medium">Choose a Pivot:</span> Select an element from the array as the pivot. The choice of pivot can vary
        (e.g., first element, last element, random element, or median).
      </li>
      <li>
        <span className="text-cyan-300 font-medium">Partition the Array:</span> Rearrange the array around the pivot. All elements smaller than the pivot
        go to its left, and those greater go to its right. The pivot is now in its correct sorted position.
      </li>
      <li>
        <span className="text-cyan-300 font-medium">Recursively Call:</span> Apply the same steps to the left and right sub-arrays created from partitioning.
      </li>
    </ul>
  </div>

  <p className="text-lg text-gray-300">
    <span className="font-semibold text-green-400">Base Case:</span> The recursion stops when the sub-array has only one element, as it is already sorted.
  </p>

  <p className="text-lg text-gray-400 italic">
    This is a high-level overview of how the QuickSort algorithm works.
  </p>
</div>
        {/* image section */}

      <div className="flex justify-center mt-8">
        <img src={QUICK_SORT_IMG} alt="Quick Sort" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>

      <div className="flex justify-center mt-8">
        <img src={QUICKSORTIMG} alt="Quick Sort" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>

        {/* Choice of Pivot */}

      <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white p-8 rounded-xl shadow-lg space-y-6 mt-10">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-400">
    Choice of Pivot
  </h2>

  <p className="text-lg text-gray-300 leading-relaxed">
    There are many different strategies for selecting the pivot in the QuickSort algorithm. The choice of pivot can significantly affect performance.
  </p>

  <div className="space-y-5">
    <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-red-500">
      <h3 className="text-xl font-semibold text-red-400 mb-2">1. First or Last Element</h3>
      <p className="text-base">
        Always pick the first (or last) element as the pivot. This is a simple approach but can lead to the <span className="text-red-300 font-medium">worst-case</span> performance when the array is already sorted.
        <br />
        <span className="italic text-sm text-gray-400">Note: Our current implementation picks the last element as pivot.</span>
      </p>
    </div>

    <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-blue-500">
      <h3 className="text-xl font-semibold text-blue-400 mb-2">2. Random Element</h3>
      <p className="text-base">
        A more robust approach is to randomly select a pivot. This helps avoid patterns that lead to the worst-case and provides better average-case performance.
        <br />
        <span className="italic text-sm text-gray-400">This is a preferred choice in practice.</span>
      </p>
    </div>

    <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-green-500">
      <h3 className="text-xl font-semibold text-green-400 mb-2">3. Median Element</h3>
      <p className="text-base">
        Choosing the median element as pivot provides the best time complexity, as it always splits the array into equal halves. However, finding the median is expensive in practice.
        <br />
        <span className="italic text-sm text-gray-400">Ideal in theory, but less common due to its overhead.</span>
      </p>
    </div>
  </div>
</div>


{/* Complexity Analysis of Quick Sort */}

<div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white p-8 rounded-xl shadow-lg mt-10 space-y-6">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400">
    Complexity Analysis of Quick Sort
  </h2>

  <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
    <p>
      Quick Sort is an efficient, in-place, divide-and-conquer sorting algorithm. Its time complexity can vary depending on pivot selection and input data.
    </p>

    <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-blue-500">
      <h3 className="text-xl font-semibold text-blue-400 mb-1">🕒 Time Complexity:</h3>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>
          <span className="text-green-300 font-medium">Best Case (Ω(n log n)):</span> Occurs when the pivot divides the array into two equal halves.
        </li>
        <li>
          <span className="text-yellow-300 font-medium">Average Case (θ(n log n)):</span> On average, the pivot divides the array into two parts, but not necessarily equal.
        </li>
        <li>
          <span className="text-red-300 font-medium">Worst Case (O(n²)):</span> Happens when the pivot is always the smallest or largest element (e.g., sorted array).
        </li>
      </ul>
    </div>

    <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-purple-500">
      <h3 className="text-xl font-semibold text-purple-400 mb-1">📦 Auxiliary Space:</h3>
      <p>
        <span className="text-purple-300 font-medium">O(n)</span> – Due to the recursive call stack in the worst case.
      </p>
    </div>
  </div>
</div>


{/* Advantages & disadvantages section */}
<div className="bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white p-8 rounded-2xl shadow-xl mt-10 space-y-8">

  <h2 className="text-4xl font-bold text-center text-green-400">Advantages & Disadvantages of Quick Sort</h2>

  {/* Advantages Section */}
  <div className="bg-gray-800 p-6 rounded-xl border-l-4 border-green-500">
    <h3 className="text-2xl font-semibold text-green-300 mb-3">✅ Advantages of Quick Sort</h3>
    <ul className="list-disc list-inside ml-4 space-y-2 text-gray-200">
      <li>It is a divide-and-conquer algorithm that simplifies problem-solving.</li>
      <li>Efficient on large datasets.</li>
      <li>Requires low memory overhead.</li>
      <li>Cache-friendly as it operates on the same array without auxiliary arrays.</li>
      <li>Fastest general-purpose sorting algorithm when stability is not required.</li>
      <li>Tail-recursive, allowing for tail-call optimizations.</li>
    </ul>
  </div>

  {/* Disadvantages Section */}
  <div className="bg-gray-800 p-6 rounded-xl border-l-4 border-red-500">
    <h3 className="text-2xl font-semibold text-red-300 mb-3">⚠️ Disadvantages of Quick Sort</h3>
    <ul className="list-disc list-inside ml-4 space-y-2 text-gray-200">
      <li>Worst-case time complexity is <span className="text-red-400 font-medium">O(n²)</span> if the pivot is poorly chosen.</li>
      <li>Not ideal for small datasets.</li>
      <li>It is <span className="text-yellow-400 font-medium">not a stable sort</span>, so equal elements might not retain their original relative order.</li>
    </ul>
  </div>
</div>

{/* Applications of Quick Sort */}
<div className="bg-gradient-to-br from-slate-900 via-black to-gray-950 text-white p-8 rounded-2xl shadow-xl mt-10 space-y-6">

  <h2 className="text-4xl font-bold text-center text-blue-400">📌 Applications of Quick Sort</h2>

  <ul className="list-disc list-inside space-y-4 text-lg text-gray-200 ml-4">
    <li>
      <span className="text-blue-300 font-semibold">Efficient for sorting large datasets</span> with 
      <span className="text-green-400 font-medium"> O(n log n)</span> average-case time complexity.
    </li>
    <li>
      Commonly used in <span className="text-yellow-300 font-semibold">partitioning problems</span> like 
      finding the <span className="text-teal-400 font-semibold">k<sup>th</sup> smallest element</span> or dividing arrays by pivot.
    </li>
    <li>
      Plays a key role in <span className="text-purple-400 font-semibold">randomized algorithms</span>, offering 
      better average performance over deterministic methods.
    </li>
    <li>
      Used in <span className="text-pink-400 font-semibold">cryptography</span> for generating 
      <span className="text-yellow-400 font-medium"> random permutations</span> and encryption keys.
    </li>
    <li>
      The <span className="text-green-400 font-semibold">partitioning step can be parallelized</span> for better performance on 
      multi-core or distributed systems.
    </li>
    <li>
      Valuable in <span className="text-orange-400 font-semibold">theoretical computer science</span> for analyzing 
      <span className="text-green-300 font-medium"> average-case complexity</span> and developing new algorithmic techniques.
    </li>
  </ul>
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
