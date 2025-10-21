import React , {useState} from "react";
import BINARY_SEARCH_IMG from "../../assets/binnary-search-.jpg";
import BINARY_SEARCH_IMG_1 from "../../assets/Binary-Search-1.jpg";
import BINARY_SEARCH_IMG_2 from "../../assets/Binary-Search-2.jpg";
import BINARY_SEARCH_IMG_3 from "../../assets/Binary-Search-3.jpg";
import BINARY_SEARCH_IMG_4 from "../../assets/Binary-Search-4.png";



export const Binary = () => {
  const [array] = useState([2, 5, 8, 12, 16, 23, 38, 56, 72, 91]); // Updated example array
  const [target, setTarget] = useState("");
  const [result, setResult] = useState(null);
  const [iterations, setIterations] = useState(0); // Count iterations

  // Binary Search Function
  const binarySearch = (arr, target) => {
    let left = 0,
      right = arr.length - 1,
      count = 0; // Count iterations

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      count++; // Increment iteration count

      if (arr[mid] === target) {
        setIterations(count);
        return mid;
      }
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }

    setIterations(count);
    return -1;
  };

  // Handle search event
  const handleSearch = () => {
    const index = binarySearch(array, parseInt(target));
    setResult(
      index !== -1
        ? `✅ Element found at index ${index} in ${iterations} iterations`
        : "❌ Element not found"
    );
  };
  return (
    <div className='mt-24 px-24 flex flex-col gap-7'>

       {/* binarysearch heading code... */}

    {/* linearsearch heading code... */}
    <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent px-4 py-6 leading-tight tracking-tight transition-transform duration-300 ease-in-out transform hover:scale-105 hover:drop-shadow-[0_5px_25px_rgba(100,100,255,0.4)]">
        Binary Search Algorithm
    </h1>

    {/* button of visualization */}

    <div className="flex flex-col items-center justify-center text-center p-6">
      <p className="text-lg md:text-xl mb-6 text-gray-800 font-medium max-w-3xl mx-auto">
    Ready to learn Binary Search visually? Dive into our step-by-step interactive simulation now!
      </p>

      <a href="/visualization/BinaryVisualize">
          <button
      className="px-8 py-3 bg-yellow-300 text-black font-bold rounded-full shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:scale-105 hover:shadow-xl"
           >
          Explore Visualization
          </button>
     </a>
    </div>
    
    {/* binary search define section */}

    <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
  <p>
    <span className="text-yellow-400 font-semibold">Binary Search</span> is a 
    searching algorithm used in a <span className="text-yellow-300">sorted array</span> 
    by repeatedly dividing the search interval in half. The idea of Binary Search 
    is to use the information that the array is sorted and reduce the time 
    complexity to <span className="text-yellow-300">O(log N)</span>.
  </p>
</div>

    {/* Input & Search Button */}
<div className="lex flex-col items-center justify-center text-center mb-4">
            <p className="mb-2">🟢 Sorted Array: {JSON.stringify(array)}</p>
            <input
              type="number"
              value={target}
              onChange={(e) => setTarget(e.target.value)} 
              className="border p-2 rounded mr-2"
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

  
{/* image section 1 */}

<div className="flex justify-center items-center p-6">
          <img 
            src={BINARY_SEARCH_IMG} 
            alt="bINARY SEARCH Visualization" 
            className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
          </div>

{/* Conditions to Apply Binary Search Algorithm: */}

          <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 space-y-4">
  <h2 className="text-2xl text-orange-300 font-bold">Conditions to Apply Binary Search Algorithm:</h2>

  <ul className="list-disc list-inside pl-4 space-y-2 text-gray-300">
    <li>
      <span className="text-yellow-300 font-medium">Sorted Data Structure:</span> The data structure must be sorted in either ascending or descending order for binary search to work.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Constant Time Access:</span> You should have the ability to access any element in constant time (O(1)), which typically applies to data structures like arrays.
    </li>
  </ul>
</div>

{/* Binary Search Algorithm */}
<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 space-y-4">
  <h2 className="text-2xl text-orange-300 font-bold">Binary Search Algorithm</h2>

  <p className="text-lg text-gray-300">
    Below is the step-by-step algorithm for Binary Search:
  </p>

  <ul className="list-decimal list-inside pl-6 space-y-2 text-gray-300">
    <li>
      <span className="text-yellow-300 font-medium">Divide the Search Space:</span> Divide the search space into two halves by finding the middle index “mid”.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Compare the Middle Element:</span> Compare the middle element of the search space with the key.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Key Found:</span> If the key is found at the middle element, the process is terminated.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Key Not Found:</span> If the key is not found at the middle element, choose which half will be used as the next search space.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Smaller Key:</span> If the key is smaller than the middle element, the left side is used for the next search.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Larger Key:</span> If the key is larger than the middle element, the right side is used for the next search.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Repeat Until Found:</span> This process is continued until the key is found or the total search space is exhausted.
    </li>
  </ul>
</div>

{/* How Does Binary Search Algorithm Work? */}

<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 space-y-4">
  <h2 className="text-2xl text-orange-300 font-bold">How Does Binary Search Algorithm Work?</h2>

  <p className="text-lg text-gray-300">
    To understand the working of binary search, consider the following illustration:
  </p>

  <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-yellow-300">Example:</h3>
    <p className="text-lg text-gray-300">
      Consider the array <code className="bg-gray-900 text-yellow-300">arr[] = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]</code> and the target <code className="bg-gray-900 text-yellow-300">target = 23</code>.
    </p>
  </div>

  <ul className="list-decimal list-inside pl-6 space-y-2 text-gray-300">
    <li>
      <span className="text-yellow-300 font-medium">Step 1: Initial Search Space</span> - The initial search space is the entire array: <code className="bg-gray-900 text-yellow-300">[2, 5, 8, 12, 16, 23, 38, 56, 72, 91]</code>.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Step 2: Find Middle Element</span> - The middle element is at index 5: <code className="bg-gray-900 text-yellow-300">arr[5] = 23</code>.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Step 3: Compare with Target</span> - Compare the middle element <code className="bg-gray-900 text-yellow-300">23</code> with the target <code className="bg-gray-900 text-yellow-300">23</code>.
    </li>
    <li>
      <span className="text-yellow-300 font-medium">Step 4: Key Found</span> - Since the middle element is equal to the target, we have found the target at index 5.
    </li>
  </ul>

  <p className="text-lg text-gray-300 italic">
    In this case, the binary search terminates after just one comparison because the target was located at the middle of the array.
  </p>
</div>

{/* image section  2*/}

<div className="flex justify-center items-center p-6">
          <img 
            src={BINARY_SEARCH_IMG_1} 
            alt="bINARY SEARCH Visualization" 
            className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
          </div>

          <div className="flex justify-center items-center p-6">
          <img 
            src={BINARY_SEARCH_IMG_2} 
            alt="bINARY SEARCH Visualization" 
            className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
          </div>

          <div className="flex justify-center items-center p-6">
          <img 
            src={BINARY_SEARCH_IMG_3} 
            alt="bINARY SEARCH Visualization" 
            className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
          </div>

          <div className="flex justify-center items-center p-6">
          <img 
            src={BINARY_SEARCH_IMG_4} 
            alt="bINARY SEARCH Visualization" 
            className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
          </div>

{/* Time Complexity */}

<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 space-y-4">
  <h2 className="text-2xl text-orange-300 font-bold">Complexity Analysis of Binary Search Algorithm</h2>

  <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-yellow-300">Time Complexity:</h3>
    <ul className="list-decimal list-inside pl-6 space-y-2 text-gray-300">
      <li>
        <span className="text-yellow-300 font-medium">Best Case:</span> <code className="bg-gray-900 text-yellow-300">O(1)</code> - The best case occurs when the target is located at the middle of the array, requiring just one comparison.
      </li>
      <li>
        <span className="text-yellow-300 font-medium">Average Case:</span> <code className="bg-gray-900 text-yellow-300">O(log N)</code> - In most cases, the array is halved each time, leading to logarithmic growth.
      </li>
      <li>
        <span className="text-yellow-300 font-medium">Worst Case:</span> <code className="bg-gray-900 text-yellow-300">O(log N)</code> - Even in the worst case, binary search reduces the search space by half at each step, resulting in a logarithmic time complexity.
      </li>
    </ul>
  </div>

  <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-yellow-300">Auxiliary Space:</h3>
    <ul className="list-decimal list-inside pl-6 space-y-2 text-gray-300">
      <li>
        <span className="text-yellow-300 font-medium">Without Recursion:</span> <code className="bg-gray-900 text-yellow-300">O(1)</code> - Binary search only requires a constant amount of extra space to hold the variables.
      </li>
      <li>
        <span className="text-yellow-300 font-medium">With Recursion:</span> <code className="bg-gray-900 text-yellow-300">O(log N)</code> - If the algorithm is implemented recursively, the space complexity is proportional to the height of the recursion tree, which is logarithmic.
      </li>
    </ul>
  </div>
</div>

{/* Applications of Binary Search Algorithm */}

<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 space-y-4">
  <h2 className="text-2xl text-orange-300 font-bold">Applications of Binary Search Algorithm</h2>

  <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-yellow-300">1. Machine Learning Algorithms</h3>
    <p className="text-gray-300">
      Binary search can be used as a building block in more complex algorithms for tasks such as training neural networks or optimizing hyperparameters for machine learning models. By efficiently narrowing down the search space, binary search can help in tasks like hyperparameter tuning where it can be used to quickly find the optimal configuration for a model.
    </p>
  </div>

  <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-yellow-300">2. Computer Graphics</h3>
    <p className="text-gray-300">
      In computer graphics, binary search is used for various algorithms, such as ray tracing or texture mapping. These applications often require efficient searching of data structures like bounding boxes or pixels, where binary search can quickly identify the relevant region or object.
    </p>
  </div>

  <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-yellow-300">3. Searching in Databases</h3>
    <p className="text-gray-300">
      Binary search is frequently used in databases to search for records in sorted tables or indexes. In systems where data is organized and indexed, binary search provides an efficient method of retrieving data, improving the speed of queries and reducing the load on the database.
    </p>
  </div>
</div>


{/* advantages  */}

<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 space-y-4">
  <h2 className="text-2xl text-orange-300 font-bold">Advantages of Binary Search Algorithm</h2>

  <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-yellow-300">1. Fast Search Time</h3>
    <p className="text-gray-300">
      The time complexity of Binary Search is O(log N), making it much faster than linear search, especially for large datasets. It divides the search space in half at each step, significantly reducing the number of elements to check.
    </p>
  </div>

  <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-yellow-300">2. Efficient for Sorted Arrays</h3>
    <p className="text-gray-300">
      Binary search is particularly efficient when the dataset is already sorted. Since it only works on sorted data, it allows for a much quicker search compared to linear search in these cases.
    </p>
  </div>

  <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-yellow-300">3. Minimal Space Complexity</h3>
    <p className="text-gray-300">
      Binary search has an auxiliary space complexity of O(1) in the iterative version, making it space-efficient. Even if the recursive version is used, its space complexity is O(log N) due to the call stack.
    </p>
  </div>
</div>

{/* Disadvantages  */}

<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 space-y-4">
  <h2 className="text-2xl text-orange-300 font-bold">Disadvantages of Binary Search Algorithm</h2>

  <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-yellow-300">1. Only Works on Sorted Data</h3>
    <p className="text-gray-300">
      Binary search can only be applied to sorted arrays or data structures. If the data is not sorted, it requires sorting first, which adds overhead and may impact overall performance.
    </p>
  </div>

  <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-yellow-300">2. More Complex Implementation</h3>
    <p className="text-gray-300">
      Compared to linear search, binary search has a more complex implementation, especially when considering edge cases in recursive and iterative versions, making it harder to implement and debug.
    </p>
  </div>

  <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-yellow-300">3. Not Suitable for Small Data Sets</h3>
    <p className="text-gray-300">
      For small datasets, binary search might not provide a significant advantage over simpler algorithms like linear search. The overhead of splitting the dataset may not justify its use in such cases.
    </p>
  </div>
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
