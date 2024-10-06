import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function CustomCursor({visible}) {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
  
        window.addEventListener('mousemove', updateCursorPosition);
  
        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <motion.div
            className='border-2 border-[#00a6ff] text-white absolute pointer-events-none z-30 rounded-3xl backdrop-blur-sm bg-[#00a6ff30] w-28'
            style={{
                left: position.x-290,
                top: position.y-270,
                padding: '0.625rem',
            }}
        >
            View Profile
        </motion.div>
    );
}

export default CustomCursor;
