import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Para from './components/Para';
import Mentors from './components/Mentors';
import Carousel from './components/Carousel';
import Process from './components/Process';
import Team from './components/Team';
import Footer from './components/Footer';
import MeshGradient from './components/MeshGradient';
import LocomotiveScroll from 'locomotive-scroll';
import Cursor from './components/Cursor';

function App() {
  const [cursorVisible, setCursorVisible] = useState(100);
  const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className="w-full h-full bg-[#0d0d0d] text-white relative overflow-hidden">
      <Cursor cursorVisible={cursorVisible} />
      <Navbar />
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <MeshGradient size="w-[70%] h-[8%]" position="top-0 right-4" />
        <Marquee />
        <Para />
        <Mentors setCursorVisible={setCursorVisible} />
        <Process />
        <Team setCursorVisible={setCursorVisible} />
        <Footer />
        <MeshGradient size="w-[95%] h-[5%]" position="bottom-0 left-56" />
      </div>
    </div>
  );
}

export default App;
