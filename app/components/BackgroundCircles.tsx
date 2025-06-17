import { motion } from 'framer-motion';
import React from 'react';

function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      {/* Inner Pulse Circle */}
      <motion.div
        className="absolute border-1 border-yellow-100 rounded-full h-[150px] w-[150px] sm:h-[200px] sm:w-[200px]"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.5, 0.1, 0.5],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      />
      {/* Middle Ripple Circle */}
      <motion.div
        className="absolute border border-white rounded-full h-[100px] w-[100px] sm:h-[400px] sm:w-[400px]"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
      {/* Outer Glow Circle */}
      <motion.div
        className="absolute border-2 border-yellow-600/25 rounded-full h-[150px] w-[150px] sm:h-[600px] sm:w-[600px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      {/* Static Glow Circle */}
      <div className="absolute rounded-full h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] bg-gradient-to-r from-yellow-500/10 to-white-400/10 shadow-[0_0_40px_rgba(59,130,246,0.2)]" />
    </motion.div>
  );
}

export default BackgroundCircles;