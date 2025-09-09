"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-orange-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorPosition.x - 12,
          y: cursorPosition.y - 12,
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Trail Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-orange-400 rounded-full pointer-events-none z-[9998] opacity-60"
        style={{
          x: cursorPosition.x - 6,
          y: cursorPosition.y - 6,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
    </>
  );
};

export default CustomCursor;
