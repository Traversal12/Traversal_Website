import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Para from './components/Para'
import Mentors from './components/Mentors'
import Carousel from './components/Carousel'

function App() {
  return (
    <div className='w-full h-full bg-black text-white' >
      <div className='max-w-screen-lg mx-auto'>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <Para/>
      <Mentors/>
      <Carousel/>
      </div>
      
    </div>
  )
}

export default App