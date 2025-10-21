import React from 'react'
import { FaChevronDown } from "react-icons/fa";

export const Dropdown = ({title, options}) => {
  return (
    <li className="relative px-6 py-2 md:py-0 group">
      <button className="flex items-center space-x-1 transition-all duration-300 hover:text-yellow-400">
        <span>{title}</span>
        <FaChevronDown className="group-hover:rotate-180 transition-transform duration-300" />
      </button>
      <ul className="absolute left-0 mt-2 bg-gray-800 text-white rounded-md shadow-lg w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300">
        {options.map((option, index) => (
          <li
            key={index}
            className="px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 cursor-pointer"
          >
            <a href={option.path}>{option.title}</a>
          </li>
        ))}
      </ul>
    </li>
  )
}
