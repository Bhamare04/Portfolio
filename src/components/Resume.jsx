import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './Resume.css';

const education = [
  {
    degree: 'Master of Computer Application (MCA)',
    school: 'SavitriBai Phule University, Nashik',
    meta: '2026 – 27 · CGPA: 8.64',
  },
  {
    degree: 'Bachelor of Computer Science (BCS)',
    school: 'SavitriBai Phule University, Nashik',
    meta: '2025 · CGPA: 8.76',
  },
  {
    degree: '12th (Science)',
    school: 'S.G. Patil College, Sakri, Maharashtra',
    meta: '2022 · Percentage: 76.50%',
  },
];

const experience = [
  {
    role: 'Python Full Stack Intern',
    company: 'Kiran Academy, Pune',
    meta: 'Sep 2025 – Feb 2026',
    desc: 'Worked on Python and Data Science based projects, gaining hands-on experience with full-stack development workflows.',
  },
  {
    role: 'Event Co-ordinator — ACE Club (Technical Club)',
    company: 'Coordinated with team members for smooth execution and active participation.',
    meta: 'Mar 2026',
  },
  {
    role: 'Event Co-head — Technophilia Event',
    company: 'Led planning and execution of technical events, coordinated with team members and managed event timelines.',
    meta: 'Jan 2024',
  },
];

const certificates = [
  {
    name: 'Power BI Certification — ISO 9001:2015',
    skill: 'Basic Operations, Data Transformation, Charts',
  },
  {
    name: 'Core Java — Great Learning',
    skill: 'Fundamentals of Java, Exception Handling, OOPs Concepts',
  },
  {
    name: 'Git & GitHub Certification',
    skill: 'Core Concepts, Repository Creation, Basic Commands',
  },
];

const achievements = [
  { text: "2nd Rank in Bachelor's Degree — BCS, KVN Naik College", date: 'Aug 2025' },
  { text: '2nd Rank in LogicHunt Competition, Abacus Club — MCA, KKWIEER', date: 'Dec 2025' },
  { text: '50 Days Badge on LeetCode', date: 'Jul 2026' },
];

const Resume = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className="resume-section"
      id="resume"
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
    >
      <h2 className="resume-title">Education & Experience</h2>

      <div className="resume-grid">
        {/* Education */}
        <div className="resume-block">
          <h3>🎓 Education</h3>
          {education.map((item, i) => (
            <div className="resume-item" key={i}>
              <p className="resume-item-title">{item.degree}</p>
              <p className="resume-item-sub">{item.school}</p>
              <p className="resume-item-meta">{item.meta}</p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="resume-block">
          <h3>💼 Experience & Leadership</h3>
          {experience.map((item, i) => (
            <div className="resume-item" key={i}>
              <p className="resume-item-title">{item.role}</p>
              <p className="resume-item-sub">{item.company}</p>
              <p className="resume-item-meta">{item.meta}</p>
              {item.desc && <p className="resume-item-desc">{item.desc}</p>}
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div className="resume-block">
          <h3>📜 Certificates</h3>
          <ul className="certificates-list">
            {certificates.map((c, i) => (
              <li key={i}>
                <span>
                  <span className="certificate-name">{c.name}</span>
                  <span className="certificate-skill">{c.skill}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div className="resume-block">
          <h3>🏆 Achievements</h3>
          <ul className="achievements-list">
            {achievements.map((a, i) => (
              <li key={i}>
                <span>{a.text}</span>
                <span className="badge-date">{a.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
