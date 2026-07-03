import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Tilt({ children, className = '', style = {}, ...props }) {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate cursor position relative to card center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const x = clientX - centerX;
    const y = clientY - centerY;

    // Normalize values to range between -1 and 1
    const normalizedX = x / (width / 2);
    const normalizedY = y / (height / 2);

    // Apply tilt angles (max 12 degrees)
    setRotateX(-normalizedY * 12);
    setRotateY(normalizedX * 12);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
        ...style
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
