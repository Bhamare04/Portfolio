import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './About.css';
import myPhoto from '../assets/kartik.jpeg';

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className="about-section"
      id="about"
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut' }}
    >
      <div className="about-container">
        <div className="about-image">
          <img src={myPhoto} alt="Kartik Sanjay Bhamare" />
        </div>
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            Hi! I'm <strong>Kartik Sanjay Bhamare</strong> — an <strong>MCA student</strong> with a strong interest in <strong>Artificial Intelligence</strong> and <strong>Machine Learning</strong>, backed by hands-on experience building predictive models using <strong>Python</strong> and <strong>scikit-learn</strong>.
            <br /><br />
            I've developed projects like employee churn prediction and stock price forecasting, applying <strong>data analysis</strong> and <strong>machine learning</strong> techniques to solve real-world problems. I'm also comfortable building full-stack web applications using <strong>Python</strong> and <strong>Django</strong>.
            <br /><br />
            Alongside my technical work, I bring strong <strong>problem-solving</strong>, <strong>teamwork</strong>, and <strong>leadership</strong> skills — gained through roles like Event Co-ordinator at the ACE Technical Club and Event Co-head at Technophilia.
            <br /><br />
            I'm currently pursuing my Master's in Computer Application and continuously sharpening my skills in <strong>Data Science</strong> and modern web development.
          </p>

          <div className="about-badges">
            <span className="about-badge">🎓 MCA Student</span>
            <span className="about-badge">🤖 AI & Machine Learning</span>
            <span className="about-badge">🐍 Python & Django</span>
            <span className="about-badge">📊 Data Science</span>
            <span className="about-badge">🧩 Problem Solving</span>
            <span className="about-badge">🤝 Teamwork & Leadership</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

