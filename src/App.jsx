import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Para from './components/Para'
import Mentors from './components/Mentors'
import Carousel from './components/Carousel'
import Process from './components/Process'
import Team from './components/Team'
import Footer from './components/Footer'


function App() {
  return (
    <div className='w-full h-full bg-[#0d0d0d] text-white' >
      <Navbar/>
      <div className='max-w-screen-lg mx-auto'>
      <Hero/>
      <Marquee/>
      <Para/>
      <Mentors/>
      <Process/>
      <Team/>
      <Footer/>
      </div>
      
    </div>
  )
}

export default App