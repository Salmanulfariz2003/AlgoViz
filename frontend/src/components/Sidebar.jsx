// // src/components/Sidebar.jsx
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   const navItems = [
//     { name: "Merge Sort", path: "/merge-sort" },
//     { name: "Bubble Sort", path: "/bubble-sort" },
//     { name: "Quick Sort", path: "/quick-sort" },
//   ];

//   return (
//     <div className="h-screen w-64 bg-white shadow-md p-4 fixed top-0 left-0 z-50">
//       <h2 className="text-xl font-bold text-blue-700 mb-8">Visualizer</h2>
//       <ul className="space-y-4">
//         {navItems.map((item) => (
//           <li key={item.path}>
//             <NavLink
//               to={item.path}
//               className={({ isActive }) =>
//                 `block px-4 py-2 rounded-lg font-medium ${
//                   isActive
                    // ? "bg-blue-500 text-white"
//                     : "text-gray-700 hover:bg-gray-100"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
