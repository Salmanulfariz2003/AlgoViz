import React, { useState } from 'react';

// Updated complexityData with Dijkstra's
const complexityData = {
  // Existing sorting algorithms...
  'bubble sort': { /* ... */ },
  'selection sort': { /* ... */ },
  'insertion sort': { /* ... */ },
  'merge sort': { /* ... */ },
  'quick sort': { /* ... */ },
  'heap sort': { /* ... */ },
  // Existing searching algorithms...
  'linear search': { /* ... */ },
  'binary search': { /* ... */ },
  // Graph Algorithms...
  "prim's algorithm": { /* ... */ },
  "kruskal's algorithm": { /* ... */ },

  // --- ADD THE NEW ALGORITHM HERE ---
  "dijkstra's algorithm": {
     time: {
       best: 'O(E + V log V)', // Using Fibonacci Heap/Optimized Priority Queue
       average: 'O(E log V)',    // Using Binary Heap/Standard Priority Queue
       worst: 'O(V^2)'          // Using simple array/Adjacency Matrix
     },
     space: 'O(V + E)', // For graph representation + auxiliary structures
     note: 'Time complexity depends heavily on the priority queue implementation.'
  }
  // --- Add more algorithms similarly ---
};

// --- The rest of the component remains the same ---
export const TimeComplexityCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const calculateComplexity = () => {
    const algoName = input.trim().toLowerCase();
    if (complexityData[algoName]) {
      const { time, space, note } = complexityData[algoName];
      setResult(
        <div className="text-left">
          <h3 className="text-3xl font-bold mb-4 text-yellow-300 capitalize">{input.trim()}</h3>
          <div className="mb-4">
            <h4 className="text-2xl font-semibold text-cyan-300 mb-2">Time Complexity 🕒</h4>
            {time.best && <p className="ml-4"><span className="font-semibold text-green-400">Best Case:</span> {time.best}</p>}
            {time.average && <p className="ml-4"><span className="font-semibold text-yellow-400">Average Case:</span> {time.average}</p>}
            {time.worst && <p className="ml-4"><span className="font-semibold text-red-400">Worst Case:</span> {time.worst}</p>}
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-purple-300 mb-2">Space Complexity 💾</h4>
            <p className="ml-4">{space}</p>
          </div>
          {note && <p className="mt-4 text-sm text-gray-400 italic">Note: {note}</p>}
        </div>
      );
    } else {
      setResult(<p className="text-red-400 text-xl">Algorithm not found. Please check the spelling or add it to the list.</p>);
    }
  };

  return (
    <div className="mt-24 px-4 md:px-24 flex flex-col gap-10 min-h-screen">
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent px-4 py-6 leading-tight tracking-tight transition-transform duration-300 ease-in-out transform hover:scale-105 hover:drop-shadow-[0_5px_25px_rgba(100,100,255,0.4)]">
        Algorithm Complexity Lookup
      </h1>
      <div className="flex flex-col items-center gap-6 w-full max-w-2xl mx-auto">
        <input
          className="w-full text-lg p-4 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter algorithm name (e.g., Bubble Sort, Dijkstra's Algorithm)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && calculateComplexity()}
        />
        <button
          className="px-8 py-3 bg-yellow-300 text-black font-bold rounded-full shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:scale-105 hover:shadow-xl"
          onClick={calculateComplexity}
        >
          Get Complexity
        </button>
      </div>
      {result && (
        <div className="text-xl mt-6 p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white rounded-xl shadow-lg w-full max-w-2xl mx-auto">
          {result}
        </div>
      )}
    </div>
  );
};