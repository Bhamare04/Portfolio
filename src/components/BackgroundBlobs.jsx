import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const BackgroundBlobs = () => {
  const shouldReduceMotion = useReducedMotion();

  const floatAnimation = (duration, delay = 0) => 
    shouldReduceMotion
      ? {}
      : {
          animate: {
            y: [0, 25, -10, 0],
            x: [0, 15, -15, 0],
            scale: [1, 1.08, 0.95, 1],
          },
          transition: {
            duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay,
          },
        };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Purple Gradient Blob */}
      <motion.div
        className="absolute -top-16 -left-16 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-purple-600/35 to-indigo-600/30 blur-3xl"
        {...floatAnimation(8, 0)}
      />

      {/* Amber/Yellow Glow Blob */}
      <motion.div
        className="absolute top-1/3 -right-20 w-80 h-80 sm:w-[26rem] sm:h-[26rem] rounded-full bg-gradient-to-tr from-amber-500/25 to-yellow-400/20 blur-3xl"
        {...floatAnimation(10, 2)}
      />

      {/* Deep Navy/Blue Accent Blob */}
      <motion.div
        className="absolute -bottom-20 left-1/4 w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full bg-gradient-to-r from-violet-600/25 to-pink-500/20 blur-3xl"
        {...floatAnimation(12, 4)}
      />
    </div>
  );
};

export default BackgroundBlobs;
