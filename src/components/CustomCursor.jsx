import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16, // Center the cursor (w-8/2 = 16)
      y: mousePosition.y - 16, // Center the cursor (h-8/2 = 16)
      backgroundColor: "rgb(6, 182, 212)", // cyan-500
      mixBlendMode: "difference"
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgb(255, 255, 255)",
      mixBlendMode: "difference"
    }
  };

  // Optional: Add listeners for specific elements to change cursor size/variant
  // For now, we keep it simple. User can extend this.

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] opacity-70 hidden md:block" // Hidden on mobile
      variants={variants}
      animate={cursorVariant}
      transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
      }}
    />
  );
};

export default CustomCursor;
