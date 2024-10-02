import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'

function App() {
  return (
    <div className='w-full h-full bg-black text-white' >
      <Navbar/>
      <Hero/>
      <Marquee/>
      
    </div>
  )
}

export default App