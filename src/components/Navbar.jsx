import React from 'react'
import logo from "../assets/logo.png"
import Button from './Button'

function Navbar() {
  return (
    <div className=" mx-auto py-3 flex items-center justify-center sticky top-0 z-10 backdrop-blur-sm  ">
    <div className='w-28 bg-white rounded-full mt-2 '><img src={logo} alt="Logo" className="mr-4" /></div>
   <div className='flex ml-16 mr-20'>
   {["Event", "Community", "Services", "Skill Development", "Resources", "About"].map((ele, index) => (
      <a key={index} className="m-4 font-semibold text-sm items-center flex gap-1" href="#">
        {ele}
      </a>
    ))}
   </div>

<Button title={"JOIN US"} />
  </div>

  )
}

export default Navbar