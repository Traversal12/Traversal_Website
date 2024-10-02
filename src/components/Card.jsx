import React from 'react'

function Card() {
  return (
    <div className='w-[490px] h-[280px] border-2 border-[#272727] bg-[0f0f0f] rounded-lg p-[36px] text-[18px]   '>
        <span className='text-[#0daaff]'>01</span>
        <div className='pt-5 leading-10 '><h1 className='font-semibold'>Discover thid demo</h1>
        <div><ul className='list-disc w-[500px] pl-6 text-[#d6d6d6]'>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
        </ul></div>
        </div>
    </div>
  )
}

export default Card