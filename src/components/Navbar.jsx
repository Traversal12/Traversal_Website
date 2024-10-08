import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Button from './Button';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-auto py-3 flex items-center justify-between sticky top-0 z-20 backdrop-blur-sm md:px-52">
      <div className="w-24 bg-white rounded-full mt-2">
        <img src={logo} alt="Logo" className="mr-4" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:ml-16 md:mr-20">
        {['Event', 'Community', 'Services', 'Skill Development', 'Resources', 'About'].map((ele, index) => (
          <a key={index} className="m-4 font-semibold text-sm items-center flex gap-1" href="#">
            {ele}
          </a>
        ))}
      </div>

      {/* JOIN US Button */}
      <Button title={"JOIN US"} visibility="hidden md:block" link={"https://chat.whatsapp.com/BCKXbk7b38X2tbY1lgK7iy"} />

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-neutral-900 shadow-md md:hidden">
          {['Event', 'Community', 'Services', 'Skill Development', 'Resources', 'About'].map((ele, index) => (
            <a key={index} className="block px-4 py-2 text-sm font-semibold hover:bg-gray-100" href="#">
              {ele}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
