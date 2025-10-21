

// new code 2 cards with flipping effect and images code hai 

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import IMG from "../assets/linear example.gif";
// import BINARYSEARCH from "../assets/binary example.gif";

// export const Searching = () => {
//   const navigate = useNavigate();
//   const [flipped, setFlipped] = useState(Array(2).fill(false));

//   const searching = [
//     { name: 'Linear Search', img: IMG, description: '"Linear Search is a simple algorithm that checks each element in a list sequentially until the target value is found or the list ends. It has a time complexity of O(n)".', link: '/searching/linear' },
//     { name: 'Binary Search', img: BINARYSEARCH, description: '"Binary Search efficiently finds elements in a sorted array by repeatedly dividing the search range in half. O(log n) time complexity."', link: '/searching/binary' },
//   ];

//   const handleMouseEnter = (index) => {
//     setFlipped(prev => prev.map((flip, i) => (i === index ? true : flip)));
//   };

//   const handleMouseLeave = (index) => {
//     setFlipped(prev => prev.map((flip, i) => (i === index ? false : flip)));
//   };

//   return (
//     <main className="mt-20 bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-6 rounded-lg shadow-xl border border-gray-300">
//       <h1 className="text-5xl font-bold text-center text-gray-800 tracking-wide transition-all duration-300 hover:text-blue-600 hover:scale-105">
//         Explore Searching Algorithms
//       </h1>

//       <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 px-10 py-10'>
//         {searching.map((element, index) => (
//           <div
//             key={index}
//             className='relative w-full h-80 perspective hover:scale-105 transition-all duration-500'
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={() => handleMouseLeave(index)}
//           >
//             <div className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${flipped[index] ? 'rotate-y-180' : ''}`}>
//               {/* Front Side */}
//               <div className='absolute w-full h-full backface-hidden shadow-lg rounded-lg overflow-hidden bg-gradient-to-r from-green-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold uppercase'>
//                 {element.name}
//               </div>
//               {/* Back Side */}
//               <div className='absolute w-full h-full backface-hidden rotate-y-180 shadow-lg rounded-lg overflow-hidden bg-white border border-gray-300 flex flex-col items-center justify-start p-4'>
//                 <img src={element.img} alt={element.name} className='w-full h-40 object-contain rounded-lg' />
//                 <h3 className='text-xl font-semibold mt-4 text-gray-800'>{element.name}</h3>
//                 <p className='text-gray-600 text-center text-sm px-2'>{element.description}</p>
//                 <button onClick={() => navigate(element.link)} className='mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300'>
//                   Explore
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };




// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import IMG from "../assets/linear example.gif";
// import BINARYSEARCH from "../assets/binary example.gif";

// export const Searching = () => {
//   const navigate = useNavigate();
//   const [flipped, setFlipped] = useState(Array(2).fill(false));

//   const searching = [
//     { name: 'Linear Search', img: IMG, description: 'Linear Search is a simple algorithm that checks each element in a list sequentially until the target value is found or the list ends. It has a time complexity of O(n).', link: '/searching/linear' },
    
//     { name: 'Binary Search', img: BINARYSEARCH, description: 'Binary Search efficiently finds elements in a sorted array by repeatedly dividing the search range in half. O(log n) time complexity.', link: '/searching/binary' },
//   ];

//   const handleMouseEnter = (index) => {
//     setFlipped(prev => prev.map((flip, i) => (i === index ? true : flip)));
//   };

//   const handleMouseLeave = (index) => {
//     setFlipped(prev => prev.map((flip, i) => (i === index ? false : flip)));
//   };

//   return (
//     <main className="mt-20 bg-gradient-to-br from-blue-50 to-blue-300 py-16 px-6 md:px-20 rounded-xl shadow-xl border border-blue-300">
//       <h1 className="text-5xl font-bold text-center text-gray-800 tracking-wide mb-12 transition-all duration-300 hover:text-blue-600 hover:scale-105">
//         Explore Searching Algorithms
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-10 py-10">
//         {searching.map((element, index) => (
//           <div
//             key={index}
//             className="relative w-full h-80 perspective hover:scale-105 transition-all duration-500"
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={() => handleMouseLeave(index)}
//           >
//             <div className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${flipped[index] ? 'rotate-y-180' : ''}`}>
//               {/* Front Side */}
//               <div className="absolute w-full h-full backface-hidden shadow-lg rounded-lg overflow-hidden bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white text-4xl font-bold uppercase tracking-wide">
//                 {element.name}
//               </div>
//               {/* Back Side */}
//               <div className="absolute w-full h-full backface-hidden rotate-y-180 shadow-lg rounded-lg overflow-hidden bg-white border border-gray-300 flex flex-col items-center justify-start p-5">
//                 <img src={element.img} alt={element.name} className="w-full h-40 object-contain rounded-lg mb-4" />
//                 <h3 className="text-xl font-semibold mb-3 text-gray-800">{element.name}</h3>
//                 <p className="text-gray-600 text-center text-sm px-2">{element.description}</p>
//                 <button
//                   onClick={() => navigate(element.link)}
//                   className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:scale-105"
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
// };




import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IMG from "../assets/linear example.gif";
import BINARYSEARCH from "../assets/binary example.gif";

export const Searching = () => {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(Array(2).fill(false));

  const searching = [
    {
      name: 'Linear Search',
      img: IMG,
      description:
        'Linear Search checks each element one by one until the target is found or the list ends. Time complexity: O(n).',
      link: '/searching/linear',
    },
    {
      name: 'Binary Search',
      img: BINARYSEARCH,
      description:
        'Binary Search splits the list in half each time to find the target in sorted arrays. Time complexity: O(log n).',
      link: '/searching/binary',
    },
  ];

  const handleMouseEnter = (index) => {
    setFlipped((prev) => prev.map((flip, i) => (i === index ? true : flip)));
  };

  const handleMouseLeave = (index) => {
    setFlipped((prev) => prev.map((flip, i) => (i === index ? false : flip)));
  };

  return (
    <main className="mt-20 bg-gradient-to-br from-blue-50 to-blue-200 py-16 px-6 md:px-20 rounded-xl shadow-xl border border-blue-200">
      <h1 className="text-5xl font-bold text-center text-gray-800 tracking-wide mb-14 transition-all duration-300 hover:text-blue-600 hover:scale-105">
        Explore Searching Algorithms
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-6 md:px-10">
        {searching.map((element, index) => (
          <div
            key={index}
            className="relative w-full h-80 perspective hover:scale-[1.03] transition-transform duration-500"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div
              className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${
                flipped[index] ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden shadow-md rounded-xl overflow-hidden bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white text-6xl font-bold uppercase tracking-wide">
                {element.name}
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 shadow-md rounded-xl overflow-hidden bg-white border border-gray-300 p-4 flex flex-col justify-between">
                <div className="flex flex-col items-center">
                  <img
                    src={element.img}
                    alt={element.name}
                    className="w-full h-36 object-contain rounded-lg mb-3"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{element.name}</h3>
                  <p className="text-sm text-gray-600 text-center px-2">
                    {element.description}
                  </p>
                </div>
                <button
                  onClick={() => navigate(element.link)}
                  className="mt-4 self-center px-5 py-3 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
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
};
