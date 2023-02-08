import { useState } from "react"

import {  close, logo, menu } from '../assets'
import { navLinks } from '../constants/index';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <img src={logo} alt='hookbank' className="w-[124px] h-[32px] ml-5 sm:ml-10" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-10' : 'mr-10'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center mr-5">
          <img src={toggle ? close : menu} 
          alt='menu' 
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
          />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0  w-full sidebar`}
          >

          <ul className="list-none flex flex-col justify-end items-center flex-1" onClick={() => setToggle((prev) => !prev)}>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-2'}`}
                > 
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
          </ul> 
          </div>
      </div>
    </nav>
  )
}

export default Navbar