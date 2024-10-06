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
import MeshGradient from './components/MeshGradient'
import LocomotiveScroll from 'locomotive-scroll';
import Cursor from './components/Cursor'


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-full bg-[#0d0d0d] text-white relative' >
      <Cursor/>
      <Navbar/>
      <div className='max-w-screen-lg mx-auto'>
      <Hero/>
      <MeshGradient size={"w-[70%] h-[8%]"} position={"top-0 right-4"}/>
      <Marquee/>
      <Para/>
      <Mentors/>
      <Process/>
      <Team/>
      <Footer/>
      <MeshGradient size={"w-[95%] h-[5%]"} position={"bottom-0 left-56"} />
      </div>
    </div>
  )
}

export default App 