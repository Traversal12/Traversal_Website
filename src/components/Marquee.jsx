import React from 'react'
import traversal from "../assets/traversal_logo.png"
import geu from "../assets/geu_logo.png"

function Marquee() {
    var images=[
        traversal,
        geu,
        traversal,
        geu,
        traversal,
        geu,
        traversal,
        geu,
        traversal,
        geu,
       
    ]
  return (
    <div className='max-w-screen-lg mx-auto overflow-hidden '>
    <div className='flex h-12 mt-20 gap-16'>
    {images.map((ele,index)=>(
        <img key={index} src={ele} alt="Logo" className="mr-4" />)
    )}
    </div>
    </div>
  )
}

export default Marquee