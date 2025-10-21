import React from 'react'

export const NavItem = ({link, title}) => {
  return (
    <li className="px-6 py-2 md:py-0 cursor-pointer transition-all duration-300 hover:text-yellow-400 hover:scale-105 hover:underline">
    <a href={link}>{title}</a>
  </li>
  )
}
