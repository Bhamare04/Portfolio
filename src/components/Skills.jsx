import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section 
      className="skills-section" 
      id="skills"
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
    >
      <h2 className="section-title">Skills & Expertise</h2>

      <div className="skills-container">
        {/* Category 1 */}
        <div className="skills-category">
          <div>
            <h3>🚀 Programming</h3>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>

        {/* Category 2 */}
        <div className="skills-category">
          <div>
            <h3>💻 Frontend</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>

        {/* Category 3 */}
        <div className="skills-category">
          <div>
            <h3>🛠️ Backend & Database</h3>
            <ul>
              <li>Django</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>

        {/* Category 4 */}
        <div className="skills-category">
          <div>
            <h3>📊 Libraries</h3>
            <ul>
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Scikit-learn</li>
              <li>Matplotlib</li>
            </ul>
          </div>
        </div>

        {/* Category 5 */}
        <div className="skills-category">
          <div>
            <h3>🧰 Tools</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Power BI</li>
              <li>VS Code</li>
            </ul>
          </div>
          <a
            href="https://github.com/Bhamare04"
            target="_blank"
            rel="noopener noreferrer"
            className="leetcode-btn"
          >
            <span>View GitHub Profile</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;

