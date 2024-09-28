import React from 'react'
import logo from "../assets/logo.png"

function Navbar() {
  return (
    <div className="max-w-screen-lg mx-auto py-3 flex items-center ">
    <div className='w-28 bg-white rounded-3xl '><img src={logo} alt="Logo" className="mr-4" /></div>
   <div className='flex ml-16 mr-20'>
   {["Event", "Community", "Services", "Skill Development", "Resources", "About"].map((ele, index) => (
      <a key={index} className="m-4 font-semibold text-sm items-center flex gap-1" href="#">
        {ele}
      </a>
    ))}
   </div>

<button style={{border:"2px solid #00b7db"}} className='w-32 p-4 rounded-2xl'>JOIN US</button>
  </div>

  )
}

export default Navbar