import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className='w-full h-full bg-black text-white' >
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App