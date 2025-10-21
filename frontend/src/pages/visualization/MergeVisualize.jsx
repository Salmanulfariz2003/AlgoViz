// import React, { useState, useEffect, useRef } from 'react';

// export const MergeVisualize = () => {
//   const [array, setArray] = useState([]);
//   const [speed, setSpeed] = useState(300);
//   const [isSorting, setIsSorting] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [activeIndices, setActiveIndices] = useState([]);
//   const [sortedIndices, setSortedIndices] = useState([]);
//   const [description, setDescription] = useState("Click 'Start Merge Sort' to begin sorting.");

//   const speedRef = useRef(speed);
//   const isPausedRef = useRef(isPaused);

//   useEffect(() => {
//     generateNewArray();
//   }, []);

//   useEffect(() => {
//     speedRef.current = speed;
//   }, [speed]);

//   useEffect(() => {
//     isPausedRef.current = isPaused;
//   }, [isPaused]);

//   const generateNewArray = () => {
//     const newArr = Array.from({ length: 25 }, () => Math.floor(Math.random() * 100) + 5);
//     setArray(newArr);
//     setActiveIndices([]);
//     setSortedIndices([]);
//     setIsPaused(false);
//     setDescription("Click 'Start Merge Sort' to begin sorting.");
//   };

//   const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

//   const checkPaused = async () => {
//     while (isPausedRef.current) {
//       await sleep(100);
//     }
//   };

//   const mergeSort = async (arr, l, r) => {
//     if (l < r) {
//       const m = Math.floor((l + r) / 2);
//       setDescription(`Dividing array indices [${l} to ${r}] into [${l} to ${m}] and [${m + 1} to ${r}]`);
//       await sleep(speedRef.current);
//       await mergeSort(arr, l, m);
//       await mergeSort(arr, m + 1, r);
//       await merge(arr, l, m, r);
//     }
//   };

//   const merge = async (arr, l, m, r) => {
//     setDescription(`Merging arrays from index ${l} to ${m} and ${m + 1} to ${r}`);
//     let left = arr.slice(l, m + 1);
//     let right = arr.slice(m + 1, r + 1);

//     let i = 0, j = 0, k = l;
//     while (i < left.length && j < right.length) {
//       await checkPaused();
//       setActiveIndices([k]);
//       setDescription(`Comparing ${left[i]} and ${right[j]}`);

//       if (left[i] <= right[j]) {
//         arr[k++] = left[i++];
//       } else {
//         arr[k++] = right[j++];
//       }
//       setArray([...arr]);
//       await sleep(speedRef.current);
//     }

//     while (i < left.length) {
//       await checkPaused();
//       setActiveIndices([k]);
//       setDescription(`Inserting ${left[i]} from left array`);
//       arr[k++] = left[i++];
//       setArray([...arr]);
//       await sleep(speedRef.current);
//     }

//     while (j < right.length) {
//       await checkPaused();
//       setActiveIndices([k]);
//       setDescription(`Inserting ${right[j]} from right array`);
//       arr[k++] = right[j++];
//       setArray([...arr]);
//       await sleep(speedRef.current);
//     }

//     const sorted = Array.from({ length: r - l + 1 }, (_, i) => l + i);
//     setSortedIndices(prev => [...new Set([...prev, ...sorted])]);

//     setDescription(`Merged and sorted section [${l} to ${r}]`);
//   };

//   const startMergeSort = async () => {
//     setIsSorting(true);
//     setIsPaused(false);
//     setDescription("Starting Merge Sort...");
//     let arrCopy = [...array];
//     await mergeSort(arrCopy, 0, arrCopy.length - 1);
//     setActiveIndices([]);
//     setIsSorting(false);
//     setDescription("Merge Sort completed!");
//   };

//   const handleAddValue = () => {
//     if (inputValue.trim() === "") return;
//     const values = inputValue
//       .split(',')
//       .map(v => parseInt(v.trim(), 10))
//       .filter(v => !isNaN(v) && v > 0);
//     if (values.length > 0) {
//       setArray(values);
//       setInputValue("");
//       setSortedIndices([]);
//       setDescription("Custom array loaded. Click 'Start Merge Sort' to begin.");
//     }
//   };

//   const getBarColor = (idx) => {
//     if (activeIndices.includes(idx)) return "bg-yellow-400";
//     if (sortedIndices.includes(idx)) return "bg-green-500";
//     return "bg-blue-400";
//   };

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-white to-blue-100 p-8">
//       <div className="max-w-7xl mx-auto flex flex-col gap-8">

//         <h1 className="text-6xl font-bold text-center text-gray-800 mt-9 mb-4">
//           Merge Sort Visualizer
//         </h1>

//         {/* Controls */}
//         <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
//           <input
//             type="text"
//             placeholder="Enter comma-separated numbers"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             disabled={isSorting}
//             className="w-full md:w-96 px-4 py-2 rounded-md shadow-md border border-gray-300"
//           />
//           <button
//             onClick={handleAddValue}
//             disabled={isSorting}
//             className={`px-6 py-2 font-semibold rounded-md shadow-md text-white ${isSorting ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-600'}`}
//           >
//             Add Values
//           </button>
//         </div>

//         <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
//           <button
//             onClick={startMergeSort}
//             disabled={isSorting}
//             className={`px-6 py-3 font-bold rounded-lg shadow-md text-white ${isSorting ? 'bg-gray-500' : 'bg-pink-600 hover:bg-pink-700'}`}
//           >
//             {isSorting ? 'Sorting...' : 'Start Merge Sort'}
//           </button>

//           <button
//             onClick={() => setIsPaused(prev => !prev)}
//             disabled={!isSorting}
//             className={`px-6 py-3 font-bold rounded-lg shadow-md text-white ${!isSorting ? 'bg-gray-500' : isPaused ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-purple-600 hover:bg-purple-700'}`}
//           >
//             {isPaused ? 'Resume' : 'Pause'}
//           </button>

//           <div className="flex flex-col items-center">
//             <label htmlFor="speedSlider" className="text-gray-700 font-medium">
//               Speed: {speed}ms
//             </label>
//             <input
//               type="range"
//               id="speedSlider"
//               min="50"
//               max="1000"
//               step="50"
//               value={speed}
//               onChange={(e) => setSpeed(Number(e.target.value))}
//               className="w-64"
//             />
//           </div>

//           <button
//             onClick={generateNewArray}
//             disabled={isSorting}
//             className={`px-6 py-3 font-bold rounded-lg shadow-md text-white ${isSorting ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'}`}
//           >
//             New Array
//           </button>
//         </div>

//         {/* Description Section */}
//         <div className="text-lg font-medium text-gray-700 bg-yellow-50 border border-yellow-300 rounded-md p-4 shadow-sm text-center">
//           {description}
//         </div>

//         {/* Legend */}
//         <div className="flex justify-center gap-6 text-sm text-gray-700 font-medium">
//           <div className="flex items-center gap-2"><div className="w-5 h-5 bg-blue-400 rounded-sm"></div> Unsorted</div>
//           <div className="flex items-center gap-2"><div className="w-5 h-5 bg-yellow-400 rounded-sm"></div> Comparing</div>
//           <div className="flex items-center gap-2"><div className="w-5 h-5 bg-green-500 rounded-sm"></div> Sorted</div>
//         </div>

//         {/* Graph */}
//         <div className="relative overflow-x-auto border border-gray-300 rounded-lg bg-white shadow-md p-6">
//           <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-end items-end pr-2 text-sm text-gray-500 font-medium">
//             {[...Array(11)].map((_, i) => {
//               const val = 10 * i;
//               return (
//                 <div key={i} style={{ height: '50px' }} className="flex items-center justify-end w-full relative">
//                   <span className="absolute -top-2">{100 - val}</span>
//                   <div className="absolute right-0 w-[calc(100vw-5rem)] border-t border-gray-200"></div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="absolute bottom-6 left-12 right-6 h-px bg-gray-400 z-10"></div>

//           <div className="ml-14 flex items-end h-[550px] gap-2 relative z-20">
//             {array.map((value, idx) => (
//               <div key={idx} className="flex flex-col items-center w-10 relative">
//                 <div className="absolute -top-6 text-gray-700 text-sm font-medium">
//                   {value}
//                 </div>
//                 <div
//                   style={{ height: `${value * 5}px` }}
//                   className={`w-full ${getBarColor(idx)} rounded-t-md transition-all duration-300 shadow-sm`}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default MergeVisualize;



import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const MergeVisualize = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(300);
  const [isSorting, setIsSorting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeIndices, setActiveIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [description, setDescription] = useState("Press 'Start Merge Sort' to begin visualization.");

  const svgRef = useRef(null);
  const speedRef = useRef(speed);
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    generateNewArray();
  }, []);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const checkPaused = async () => {
    while (isPausedRef.current) {
      await sleep(100);
    }
  };

  const generateNewArray = () => {
    const newArr = Array.from({ length: 21 }, () => Math.floor(Math.random() * 100) + 5);
    setArray(newArr);
    setActiveIndices([]);
    setSortedIndices([]);
    setIsPaused(false);
    setDescription("Generated a new array. Ready to sort.");
  };

  const handleAddValue = () => {
    if (inputValue.trim() === "") return;
    const values = inputValue
      .split(',')
      .map(v => parseInt(v.trim(), 10))
      .filter(v => !isNaN(v) && v > 0);
    if (values.length > 0) {
      setArray(values);
      setInputValue("");
      setSortedIndices([]);
      setDescription("Custom array set. Ready to sort.");
    }
  };

  const getBarColor = React.useCallback((idx) => {
    if (activeIndices.includes(idx)) return "yellow";
    if (sortedIndices.includes(idx)) return "green";
    return "blue";
  }, [activeIndices, sortedIndices]);

  const mergeSort = async () => {
    setIsSorting(true);
    setIsPaused(false);
    setDescription("Starting Merge Sort...");
    const arr = [...array];
    await mergeSortHelper(arr, 0, arr.length - 1);
    setSortedIndices([...Array(arr.length).keys()]);
    setActiveIndices([]);
    setIsSorting(false);
    setDescription("Array is fully sorted!");
  };

  const mergeSortHelper = async (arr, left, right) => {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);
    await mergeSortHelper(arr, left, mid);
    await mergeSortHelper(arr, mid + 1, right);
    await merge(arr, left, mid, right);

  const merge = async (arr, left, mid, right) => {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;

    while (i < leftArr.length && j < rightArr.length) {
      await checkPaused();
      setActiveIndices([k]);
      setDescription(`Comparing ${leftArr[i]} and ${rightArr[j]}`);
      await sleep(speedRef.current);

      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }
      setArray([...arr]);
      k++;
      await sleep(speedRef.current);
    }

    while (i < leftArr.length) {
      await checkPaused();
      arr[k] = leftArr[i];
      setActiveIndices([k]);
      setArray([...arr]);
      i++;
      k++;
      await sleep(speedRef.current);
    }

    while (j < rightArr.length) {
      await checkPaused();
      arr[k] = rightArr[j];
      setActiveIndices([k]);
      setArray([...arr]);
      j++;
      k++;
      await sleep(speedRef.current);
    }

    setDescription(`Merged subarray from index ${left} to ${right}`);
    setSortedIndices(prev => [...new Set([...prev, ...Array.from({ length: right - left + 1 }, (_, i) => i + left)])]);
  };
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = svg.node().getBoundingClientRect().width;
    const height = svg.node().getBoundingClientRect().height;
    const margin = { top: 20, right: 30, bottom: 50, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    svg.selectAll("*").remove();

    const xScale = d3.scaleBand()
      .domain(array.map((_, i) => i))
      .range([0, innerWidth])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(array)])
      .nice()
      .range([innerHeight, 0]);

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    g.append("g")
      .attr("transform", `translate(0, ${innerHeight})`)
      .call(d3.axisBottom(xScale).tickFormat(() => ""));

    g.append("g").call(d3.axisLeft(yScale).ticks(5));

    g.selectAll(".bar")
      .data(array)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (_, i) => xScale(i))
      .attr("y", d => yScale(d))
      .attr("width", xScale.bandwidth())
      .attr("height", d => innerHeight - yScale(d))
      .attr("fill", (_, i) => getBarColor(i));

    g.selectAll(".bar-text")
      .data(array)
      .enter()
      .append("text")
      .attr("x", (_, i) => xScale(i) + xScale.bandwidth() / 2)
      .attr("y", d => yScale(d) - 5)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .attr("fill", "black")
      .text(d => d);
  }, [array, activeIndices, sortedIndices, getBarColor]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <h1 className="text-6xl font-bold text-center text-gray-800 mt-9 mb-4">Merge Sort Visualizer</h1>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <input
            type="text"
            placeholder="Enter comma-separated numbers"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isSorting}
            className="w-full md:w-96 px-4 py-2 rounded-md shadow-md border border-gray-300"
          />
          <button
            onClick={handleAddValue}
            disabled={isSorting}
            className={`px-6 py-2 font-semibold rounded-md shadow-md text-white ${isSorting ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-600'}`}
          >
            Add Values
          </button>
        </div>

        <div className="mt-8 bg-white border border-gray-300 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Color Legend</h2>
          <div className="flex justify-evenly">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-yellow-500"></div>
              <span className="text-lg">Comparing elements</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500"></div>
              <span className="text-lg">Sorted elements</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500"></div>
              <span className="text-lg">Unsorted elements</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <button
            onClick={mergeSort}
            disabled={isSorting}
            className={`px-6 py-3 font-bold rounded-lg shadow-md text-white ${isSorting ? 'bg-gray-500' : 'bg-pink-600 hover:bg-pink-700'}`}
          >
            {isSorting ? 'Sorting...' : 'Start Merge Sort'}
          </button>

          <button
            onClick={() => setIsPaused(prev => !prev)}
            disabled={!isSorting}
            className={`px-6 py-3 font-bold rounded-lg shadow-md text-white ${!isSorting ? 'bg-gray-500' : isPaused ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-purple-600 hover:bg-purple-700'}`}
          >
            {isPaused ? 'Resume' : 'Pause'}
          </button>

          <div className="flex flex-col items-center">
            <label htmlFor="speedSlider" className="text-gray-700 font-medium">
              Speed: {speed}ms
            </label>
            <input
              type="range"
              id="speedSlider"
              min="50"
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
            className={`px-6 py-3 font-bold rounded-lg shadow-md text-white ${isSorting ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            New Array
          </button>
        </div>

        <div className="text-lg font-medium text-gray-700 bg-yellow-50 border border-yellow-300 rounded-md p-4 shadow-sm text-center">
          {description}
        </div>

        <div className="relative overflow-x-auto border border-gray-300 rounded-lg bg-white shadow-md p-6">
          <svg ref={svgRef} width="100%" height="400px"></svg>
        </div>
      </div>
    </div>
  );
};

export default MergeVisualize;
