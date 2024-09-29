import React from 'react'
import Button from './Button'

function Hero() {
  return (
    <div className='max-w-screen-lg mx-auto mt-36'>
    <p className='text-7xl'>Elevate your Skills with Traversal get industry ready.
   </p>
   <p className='text-xl pt-6'> Design agency crafting minimal brand identities that speaks volumes.</p>
   <div className='mt-8 flex gap-2'>
    <Button title={"View Plans" } fill={"bg-[#00a6ff]"}/>
    <Button title={"Learn More"} />
   </div>
</div>
  )
}

export default Hero