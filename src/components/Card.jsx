import React from 'react';

function Card() {
  return (
    <div className='w-[45%] max-w-[490px] m-3 h-auto border-2 border-[#272727] bg-[#0f0f0f] rounded-lg p-8 text-base md:text-lg lg:text-xl'>
      <span className='text-[#0daaff]'>01</span>
      <div className='pt-5 leading-6 md:leading-7'>
        <h1 className='text-lg md:text-xl'>Discover this demo</h1>
        <ul className='list-disc font-[1] pl-6 text-[#d6d6d6]'>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;