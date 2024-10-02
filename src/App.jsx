import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Para from './components/Para'
import Mentors from './components/Mentors'
import Carousel from './components/Carousel'
import Process from './components/Process'


function App() {
  return (
    <div className='w-full h-full bg-[#0d0d0d] text-white' >
      <div className='max-w-screen-lg mx-auto'>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <Para/>
      <Mentors/>
      <Carousel/>
      <Process/>
      
      </div>
      
    </div>
  )
}

export default App