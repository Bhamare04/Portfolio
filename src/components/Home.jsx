import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import BackgroundBlobs from './BackgroundBlobs';
import TypewriterText from './TypewriterText';
import cvImage from '../assets/kartik_bhamare_Resume.pdf';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Framer Motion Staggered Entrance Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.7,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0a0f2c] via-[#161036] to-[#0a0f2c] text-white px-6 sm:px-12 py-28 overflow-hidden">
      {/* BACKGROUND DEPTH - Blurred Floating Blobs */}
      <BackgroundBlobs />

      {/* Hero Content Container */}
      <motion.div
        className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center justify-center space-y-7"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Badge */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-amber-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-inner">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            Available for AI/ML & Python Development Roles
          </span>
        </motion.div>

        {/* HERO ENTRANCE ANIMATION - Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-md">
            Kartik Sanjay Bhamare
          </span>{' '}
          👋
        </motion.h1>

        {/* HERO ENTRANCE ANIMATION - Subtext with Typewriter */}
        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-normal min-h-[3.5rem] flex items-center justify-center flex-wrap gap-2"
        >
          <span>Building intelligent solutions as</span>
          <TypewriterText
            words={[
              'an MCA Student 🎓',
              'an AI & ML Enthusiast 🤖',
              'a Python Developer 🐍',
            ]}
            typeSpeed={70}
            deleteSpeed={40}
            delay={2200}
          />
        </motion.div>

        {/* BUTTON MICRO-INTERACTIONS - Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <motion.button
            onClick={openModal}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            className="px-8 py-3.5 bg-gradient-to-r from-amber-400 to-yellow-400 text-[#0a0f2c] font-bold text-base sm:text-lg rounded-full shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40 hover:from-amber-300 hover:to-yellow-300 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-400/50 cursor-pointer flex items-center gap-2"
          >
            <span>Download Resume</span>
            <span className="text-xl">📄</span>
          </motion.button>

          <motion.a
            href="#contact"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            className="px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-base sm:text-lg rounded-full backdrop-blur-md transition-all duration-300 hover:border-amber-400/40 focus:outline-none focus:ring-4 focus:ring-white/20 cursor-pointer flex items-center gap-2"
          >
            <span>Contact Me</span>
            <span className="text-xl">✉️</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* CV Modal Overlay */}
      {showModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative bg-[#0e163d] border border-white/15 rounded-2xl p-4 sm:p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col gap-4 text-white"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h3 className="text-xl font-bold text-amber-300 flex items-center gap-2">
                <span>📄</span> Kartik Sanjay Bhamare — Curriculum Vitae
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={cvImage}
                  download="kartik_bhamare_Resume.pdf"
                  className="px-4 py-1.5 bg-amber-400 text-[#0a0f2c] font-semibold text-sm rounded-lg hover:bg-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span>Download PDF</span> 📥
                </a>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white text-2xl font-bold leading-none transition-colors p-1"
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>
            </div>
            <iframe
              src={cvImage}
              title="Kartik Sanjay Bhamare CV"
              className="w-full h-[70vh] rounded-lg border border-white/10 bg-white"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};


export default Home;
