
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import IMG from "../assets/Heap_sort_example.gif";
// import MERGEIMAGE from "../assets/Merge sort example.gif";
// import QUICKIMAGE from "../assets/quick sort example.gif";
// import INSERTIONIMAGE from "../assets/insertion sort example.gif";
// import BUBBLEIMAGE from "../assets/BubbleSort example.gif";
// import SELECTIONIMAGE from "../assets/SelectionSort example.gif";

// export default function Sorting() {
//   const navigate = useNavigate();
//   const [flipped, setFlipped] = useState(Array(6).fill(false));

//   const sorting = [
//     { name: 'Heap Sort', img: IMG, description: 'Uses a binary heap to sort by repeatedly extracting the max element. O(n log n) time.', link: '/sorting/heap' },
//     { name: 'Merge Sort', img: MERGEIMAGE, description: 'Merge Sort is a divide-and-conquer algorithm that recursively splits and merges arrays in sorted order, with O(n log n) time complexity.', link: '/sorting/merge' },
//     { name: 'Quick Sort', img: QUICKIMAGE, description: 'Quick Sort partitions the array and recursively sorts subarrays, achieving O(n log n) average time complexity.', link: '/sorting/quick' },
//     { name: 'Insertion Sort', img: INSERTIONIMAGE, description: 'Efficient for small or nearly sorted data, inserting elements into their correct position. Worst-case: O(n²).', link: '/sorting/insertion' },
//     { name: 'Bubble Sort', img: BUBBLEIMAGE, description: 'A simple algorithm that repeatedly swaps adjacent elements if they are in the wrong order.', link: '/sorting/bubble' },
//     { name: 'Selection Sort', img: SELECTIONIMAGE, description: 'Selects the smallest element in each pass and swaps it into place. Time complexity: O(n²).', link: '/sorting/selection' },
//   ];

//   const handleMouseEnter = (index) => {
//     setFlipped(prev => prev.map((val, i) => i === index ? true : val));
//   };

//   const handleMouseLeave = (index) => {
//     setFlipped(prev => prev.map((val, i) => i === index ? false : val));
//   };

//   return (
//     <main className="mt-20 bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-6 md:px-20 rounded-xl shadow-xl border border-gray-300">
//       <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 tracking-wide mb-12 transition-all duration-300 hover:text-blue-600 hover:scale-105">
//         Explore Sorting Algorithms
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//         {sorting.map((item, index) => (
//           <div
//             key={index}
//             className="relative w-full h-96 perspective"
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={() => handleMouseLeave(index)}
//           >
//             <div className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${flipped[index] ? 'rotate-y-180' : ''}`}>
//               {/* Front Side */}
//               <div className="absolute w-full h-full backface-hidden rounded-xl shadow-xl bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center text-2xl font-bold uppercase tracking-wide">
//                 {item.name}
//               </div>

//               {/* Back Side */}
//               <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white text-gray-800 rounded-xl shadow-xl border border-gray-300 p-5 flex flex-col items-center justify-start">
//                 <img src={item.img} alt={item.name} className="w-full h-40 object-contain rounded-md mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
//                 <p className="text-sm text-center text-gray-600 flex-grow">{item.description}</p>
//                 <button
//                   onClick={() => navigate(item.link)}
//                   className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:scale-105"
//                 >
//                   Explore
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }





//new code 6 cards with flipping effect and images code hai

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IMG from "../assets/Heap_sort_example.gif";
import MERGEIMAGE from "../assets/Merge sort example.gif";
import QUICKIMAGE from "../assets/quick sort example.gif";
import INSERTIONIMAGE from "../assets/insertion sort example.gif";
import BUBBLEIMAGE from "../assets/BubbleSort example.gif";
import SELECTIONIMAGE from "../assets/SelectionSort example.gif";

export default function Sorting() {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(Array(6).fill(false));

  const sorting = [
    { name: 'Heap Sort', img: IMG, description: 'Uses a binary heap to sort by repeatedly extracting the max element. O(n log n) time.', link: '/sorting/heap' },

    { name: 'Merge Sort', img: MERGEIMAGE, description: 'Merge Sort is a divide-and-conquer algorithm that recursively splits and merges arrays in sorted order, with O(n log n) time complexity.', link: '/sorting/merge' },

    { name: 'Quick Sort', img: QUICKIMAGE, description: 'Quick Sort partitions the array and recursively sorts subarrays, achieving O(n log n) average time complexity.', link: '/sorting/quick' },

    { name: 'Insertion Sort', img: INSERTIONIMAGE, description: 'Efficient for small or nearly sorted data, inserting elements into their correct position. Worst-case: O(n²).', link: '/sorting/insertion' },

    { name: 'Bubble Sort', img: BUBBLEIMAGE, description: 'A simple algorithm that repeatedly swaps adjacent elements if they are in the wrong order.', link: '/sorting/bubble' },

    { name: 'Selection Sort', img: SELECTIONIMAGE, description: 'Selects the smallest element in each pass and swaps it into place. Time complexity: O(n²).', link: '/sorting/selection' },
  ];

  const handleMouseEnter = (index) => {
    setFlipped(prev => prev.map((val, i) => i === index ? true : val));
  };

  const handleMouseLeave = (index) => {
    setFlipped(prev => prev.map((val, i) => i === index ? false : val));
  };

  return (
    <main className="mt-20 bg-gradient-to-br from-blue-50 to-blue-200 py-16 px-6 md:px-20 rounded-xl shadow-xl border border-blue-300">
      <h1 className="text-5xl font-bold text-center text-gray-800 tracking-wide mb-12 transition-all duration-300 hover:text-blue-600 hover:scale-105">
        Explore Sorting Algorithms
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {sorting.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-96 perspective"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${flipped[index] ? 'rotate-y-180' : ''}`}>
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden rounded-xl shadow-xl bg-gradient-to-r from-green-400 to-blue-500 text-white flex items-center justify-center text-5xl font-bold uppercase tracking-wide transform hover:scale-105 transition-all duration-300">
                {item.name}
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white text-gray-800 rounded-xl shadow-xl border border-gray-300 p-5 flex flex-col items-center justify-start">
                <img src={item.img} alt={item.name} className="w-full h-40 object-contain rounded-md mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h3>
                <p className="text-sm text-center text-gray-600 flex-grow">{item.description}</p>
                <button
                  onClick={() => navigate(item.link)}
                  className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:scale-105"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
