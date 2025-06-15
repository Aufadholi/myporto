import { motion } from 'motion/react';
import React from 'react';

function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      {/* Ping effect */}
      <motion.div
        className="absolute border border-[#333333] rounded-full h-[200px] w-[200px]"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      />
      {/* Pulse effect */}
      <motion.div
        className="absolute border border-[#807058] rounded-full opacity-20 h-[500px] w-[500px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      />
      {/* Static circle */}
      <div className="absolute border-2 border-[#4a3e3e] rounded-full h-[300px] w-[300px] animate-pulse" />
    </motion.div>
  );
}

export default BackgroundCircles;