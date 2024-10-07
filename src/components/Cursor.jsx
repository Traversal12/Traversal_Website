import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Cursor({cursorVisible}) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // console.log(cursorVisible);
    // console.log(position);

    useEffect(() => {
      const updateCursorPosition = (e) => {
        // console.log(e);
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener('mousemove', updateCursorPosition);
  
      return () => {
        window.removeEventListener('mousemove', updateCursorPosition);
      };
    }, []);

    const variants = { left: position.x, top: position.y };
  return (
    <motion.div
    className='fixed top-0 left-0 bg-[#00a6ff] rounded-full h-4 w-4 z-50 pointer-events-none'
    style={{ opacity:cursorVisible  }}
    variants={variants}
    animate={variants} 
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  />
  
  )
}

export default Cursor