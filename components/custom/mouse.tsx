"use client"

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MouseLight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute w-[150px] h-[150px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)',
              left: mousePosition.x,
              top: mousePosition.y,
              transform: 'translate(-50%, -50%)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MouseLight;

// Usage example:
const App = () => {
  return (
    <div>
      <MouseLight />
      {/* Your other components */}
    </div>
  );
};