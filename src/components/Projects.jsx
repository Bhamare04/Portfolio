import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'Smart Expense Tracker',
    description: 'A web-based smart expense tracker that lets users manage their expenses, track daily transactions, and visualize spending using dashboards, with export in proper PDF format.',
    tech: ['Python', 'Django', 'MySQL', 'HTML5', 'CSS', 'JavaScript'],
    duration: 'May 2026 – Present',
    role: 'Individual',
  },
  {
    title: 'Employee Churn Prediction Model',
    description: 'A machine learning classification model to predict employee attrition using HR datasets, involving data preprocessing, feature engineering, and exploratory data analysis with Logistic Regression and Random Forest.',
    tech: ['Python', 'Pandas', 'NumPy', 'scikit-learn'],
    duration: 'Nov – Dec 2025',
    role: 'Individual',
  },
  {
    title: 'Stock Price Prediction System',
    description: 'A regression model to forecast stock prices using historical market data, applying data preprocessing, normalization, and time-series analysis to visualize actual vs. predicted trends.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'scikit-learn'],
    duration: 'Jan – Feb 2026',
    role: 'Individual',
  },
  {
    title: 'Art Gallery Management System',
    description: 'A web-based management system to catalogue artworks and artists, and streamline gallery exhibitions and admin operations for a smoother visitor and management experience.',
    tech: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    duration: 'April 2026',
    role: 'Group Project',
  },
];

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section 
      className="projects-section" 
      id="projects"
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
    >
      <h2 className="projects-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div>
              <div className="project-tech-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="project-tech-tag">{t}</span>
                ))}
              </div>
              <div className="project-meta-row">
                <span className="project-duration">📅 {project.duration}</span>
                <span className="project-role">👤 {project.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;

