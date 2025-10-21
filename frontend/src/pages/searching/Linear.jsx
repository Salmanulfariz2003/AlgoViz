import React, {useState} from "react";
import LINEAR_SEARCH_IMG_1 from "../../assets/Linear-search-algorithm-1.webp";
import LINEAR_SEARCH_IMG_2 from "../../assets/Linear-search-algorithm-2.webp";
import LINEAR_SEARCH_IMG_3 from "../../assets/Linear-search-algorithm-3.webp";



export const Linear = () => {
  const [array] = useState([10, 50, 30, 70, 80, 20, 90, 40]); // Updated Array
  const [target, setTarget] = useState(""); // User input for target value
  const [result, setResult] = useState(null); // Stores search result

  // Function to perform Linear Search
  const handleSearch = () => {
    let index = array.indexOf(parseInt(target));
    setResult(
      index !== -1
        ?` ✅ Element found at index ${index}`
        : "❌ Element not found"
    );
  };
  return (
    <div className='mt-24 px-24 flex flex-col gap-7'> 
      
      {/* linearsearch heading code... */}
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent px-4 py-6 leading-tight tracking-tight transition-transform duration-300 ease-in-out transform hover:scale-105 hover:drop-shadow-[0_5px_25px_rgba(100,100,255,0.4)]">
        Linear Search Algorithm
    </h1>
    {/* button of visualization */}

    <div className="flex flex-col items-center justify-center text-center p-6">
      <p className="text-lg md:text-xl mb-6 text-gray-800 font-medium max-w-3xl mx-auto">
    Ready to learn Linear Search visually? Dive into our step-by-step interactive simulation now!
      </p>

      <a href="/visualization/LinearVisualize">
          <button
      className="px-8 py-3 bg-yellow-300 text-black font-bold rounded-full shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:scale-105 hover:shadow-xl"
           >
          Explore Visualization
          </button>
     </a>
    </div>

    {/* linearsearch description code... */}

    <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
    <p>
    <span className="text-yellow-400 font-semibold">Linear Search</span> is a 
    searching algorithm where the <span className="text-yellow-300">list or dataset</span> 
    is traversed from one end to find the <span className="text-yellow-300">desired value</span>.
    </p>
    </div>



{/* Input & Search Button */}
<div className="flex flex-col items-center justify-center text-center mb-4">
  <p className="mb-2">🟢 Array: {JSON.stringify(array)}</p>
  <div className="flex flex-col sm:flex-row items-center gap-2">
    <input
      type="number"
      value={target}
      onChange={(e) => setTarget(e.target.value)}
      className="border p-2 rounded text-center"
      placeholder="Enter number to search"
    />
    <button
      onClick={handleSearch}
      className="text-white bg-green-500 px-4 py-2 rounded-full hover:bg-blue-600 border-2 transition-all"
    >
      Search
    </button>
  </div>

  {/* Search Result */}
  {result && <p className="mt-3 text-lg font-semibold">{result}</p>}
</div>

    



{/* Explanation Section for Linear Search */}
<div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-lg space-y-6">
  <h2 className="text-3xl font-bold text-center text-green-300">
    How does Linear Search Algorithm work?
  </h2>
  <ul className="list-decimal list-inside space-y-2 text-lg pl-4">
    <li>
      <span className="text-yellow-300 font-medium">Start from First Element:</span> Begin checking from the first element in the array.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Compare with Target:</span> Compare each element with the target value <code>x</code>.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Return Index if Found:</span> If a match is found, return the current index.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Return -1 if Not Found:</span> If the loop completes and no match is found, return -1.
    </li>
  </ul>

  <div className="text-lg text-white space-y-3">
    <h3 className="text-2xl text-orange-400 font-semibold pt-4">Test Cases:</h3>
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <p><span className="text-blue-300 font-semibold">Input:</span> arr = [1, 2, 3, 4], x = 3</p>
      <p><span className="text-purple-300 font-semibold">Output:</span> 2</p>
      <p className="italic text-gray-400">Explanation: Element 3 is present at index 2.</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <p><span className="text-blue-300 font-semibold">Input:</span> arr = [10, 8, 30, 4, 5], x = 5</p>
      <p><span className="text-purple-300 font-semibold">Output:</span> 4</p>
      <p className="italic text-gray-400">Explanation: Element 5 is at index 4.</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <p><span className="text-blue-300 font-semibold">Input:</span> arr = [10, 8, 30], x = 6</p>
      <p><span className="text-purple-300 font-semibold">Output:</span> -1</p>
      <p className="italic text-gray-400">Explanation: Element 6 is not present in the array.</p>
    </div>
  </div>

  <p className="text-lg text-gray-400 italic">
    Linear Search is simple and works well for small or unsorted arrays. Time complexity is O(n).
  </p>
</div>


<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700">
  Linear Search, also known as sequential search, is a method for finding a target value within a list. 
  It sequentially checks each element of the array until a match is found or the whole array is traversed.
  <br /><br />
  In Linear Search, we iterate over all the elements of the array and check if the current element is equal to the target element. 
  If we find any element equal to the target, we return its index. Otherwise, if no element matches the target, we return <code>-1</code> indicating it’s not found.
  <br /><br />
  <span className="text-green-400 font-semibold">Example:</span> <br />
  Consider the array <code>arr[] = {"{"}10, 50, 30, 70, 80, 20, 90, 40{"}"}</code> and <code>key = 30</code>.<br />
  We iterate from the beginning and compare each value with 30. At index <code>2</code>, we find the key. So the output is <code>2</code>.
</div>

{/* image section */}

          <div className="flex justify-center items-center p-6">
          <img 
            src={LINEAR_SEARCH_IMG_1} 
            alt="bINARY SEARCH Visualization" 
            className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
          </div>

          <div className="flex justify-center items-center p-6">
          <img 
            src={LINEAR_SEARCH_IMG_2} 
            alt="bINARY SEARCH Visualization" 
            className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
          </div>

          <div className="flex justify-center items-center p-6">
          <img 
            src={LINEAR_SEARCH_IMG_3} 
            alt="bINARY SEARCH Visualization" 
            className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
          </div>

{/* Time and Space Complexity of Linear Search Algorithm */}

    <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-900 via-gray-800 to-black p-6 rounded-lg shadow-lg border border-gray-700 space-y-4">
  <h2 className="text-2xl text-orange-300 font-bold">Time and Space Complexity of Linear Search Algorithm:</h2>

  <div>
    <span className="text-green-400 font-semibold">Time Complexity:</span>
    <ul className="list-disc list-inside pl-4 space-y-2 mt-2">
      <li>
        <span className="text-yellow-300 font-medium">Best Case:</span> When the key is found at the first index.<br />
        <span className="text-gray-300">→ Time Complexity: <code>O(1)</code></span>
      </li>
      <li>
        <span className="text-yellow-300 font-medium">Worst Case:</span> When the key is at the last index or not present at all.<br />
        <span className="text-gray-300">→ Time Complexity: <code>O(N)</code>, where <code>N</code> is the size of the list.</span>
      </li>
      <li>
        <span className="text-yellow-300 font-medium">Average Case:</span><br />
        <span className="text-gray-300">→ Time Complexity: <code>O(N)</code></span>
      </li>
    </ul>
  </div>

  <div>
    <span className="text-green-400 font-semibold">Auxiliary Space:</span><br />
    <span className="text-gray-300">→ <code>O(1)</code>, since only one loop variable is used and no additional space is required.</span>
  </div>
</div>


{/* Applications of Linear Search Algorithm: */}

<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 space-y-4">
  <h2 className="text-2xl text-orange-300 font-bold">Applications of Linear Search Algorithm:</h2>

  <ul className="list-disc list-inside pl-4 space-y-2 text-gray-300">
    <li>
      <span className="text-yellow-300 font-medium">Unsorted Lists:</span> Linear search is ideal when dealing with unsorted arrays or lists, as it doesn’t require sorted data to function.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Small Data Sets:</span> For small datasets, linear search is more efficient than binary search because of its minimal setup and simplicity.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Searching Linked Lists:</span> In linked list structures, linear search is commonly used because direct access to elements is not possible, so each node is checked one by one.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Simple Implementation:</span> Linear search is easier to understand and implement, making it ideal for beginners or straightforward search problems.
    </li>
  </ul>
</div>


{/* Advantages of Linear Search Algorithm: */}
<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 space-y-4">
  <h2 className="text-2xl text-orange-300 font-bold">Advantages of Linear Search Algorithm:</h2>

  <ul className="list-disc list-inside pl-4 space-y-2 text-gray-300">
    <li>
      <span className="text-yellow-300 font-medium">No Sorting Required:</span> Linear search can be applied to both sorted and unsorted arrays, making it highly flexible.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Versatile Data Types:</span> It can be used with arrays of any data type including integers, strings, or custom objects.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">No Extra Memory:</span> It does not require any additional memory allocation, as it works directly with the input array.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Ideal for Small Datasets:</span> Linear search performs well on small datasets where the overhead of more complex algorithms isn’t justified.
    </li>
  </ul>
</div>

{/* Disadvantages of Linear Search Algorithm: */}

<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 space-y-4">
  <h2 className="text-2xl text-orange-300 font-bold">Disadvantages of Linear Search Algorithm:</h2>

  <ul className="list-disc list-inside pl-4 space-y-2 text-gray-300">
    <li>
      <span className="text-red-400 font-medium">Slower for Large Datasets:</span> Linear search has a time complexity of O(N), making it inefficient for large arrays or datasets.
    </li>
    <li>
      <span className="text-red-400 font-medium">Not Optimal:</span> Linear search is not suitable when performance is critical, especially if faster algorithms like Binary Search can be used on sorted data.
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
  )
}


