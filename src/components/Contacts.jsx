import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './Contacts.css';

const Contacts = () => {
  const form = useRef();
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });
  const shouldReduceMotion = useReducedMotion();

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: 'Sending message...' });

    // TODO: Replace with your own EmailJS service ID, template ID, and public key
    // from https://www.emailjs.com/ so messages are delivered to your inbox.
    emailjs.sendForm(
      'service_eu98qt8',     // service ID
      'template_1tvi9sl',    // template ID
      form.current,
      'eqEPhNnrKxazQGIEt'    // public key
    ).then(() => {
      setStatus({ loading: false, success: true, message: '✅ Message sent successfully! I will get back to you soon.' });
      form.current.reset();
    }).catch(() => {
      setStatus({ loading: false, success: false, message: '❌ Something went wrong. Please try again or reach out via email directly.' });
    });
  };

  return (
    <motion.section 
      className="contact-section-wrapper" 
      id="contact"
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
    >
      <h2 className="contact-title">Let's Get In Touch</h2>
      <p className="contact-subtitle">Have a project in mind, a question, or an opportunity? Feel free to send a message!</p>

      <div className="contact-layout">
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="contact-info-card">
          <h3>Contact Details</h3>
          <p>
            I'm always open to discussing new software development projects, creative ideas, or opportunities to be part of your team.
          </p>

          <div className="contact-details-list">
            <a href="mailto:kartikbhamare04@gmail.com" className="contact-detail-item">
              <FaEnvelope className="contact-detail-icon" />
              <div>
                <span className="block text-xs text-gray-400 font-normal">Email Direct</span>
                <span className="font-semibold">kartikbhamare04@gmail.com</span>
              </div>
            </a>

            <a href="https://github.com/Bhamare04" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
              <FaGithub className="contact-detail-icon" />
              <div>
                <span className="block text-xs text-gray-400 font-normal">GitHub Profile</span>
                <span className="font-semibold">github.com/Bhamare04</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/kartik-bhamare/" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
              <FaLinkedin className="contact-detail-icon" />
              <div>
                <span className="block text-xs text-gray-400 font-normal">LinkedIn Profile</span>
                <span className="font-semibold">linkedin.com/in/kartik-bhamare</span>
              </div>
            </a>

            <div className="contact-detail-item">
              <FaMapMarkerAlt className="contact-detail-icon" />
              <div>
                <span className="block text-xs text-gray-400 font-normal">Location</span>
                <span className="font-semibold">Dhule, Maharashtra 🇮🇳</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          {status.message && (
            <div className={`form-status ${status.success === true ? 'success' : status.success === false ? 'error' : ''}`}>
              {status.message}
            </div>
          )}

          <label htmlFor="user_name">Your Name</label>
          <input id="user_name" type="text" name="user_name" placeholder="John Doe" required />

          <label htmlFor="user_email">Your Email Address</label>
          <input id="user_email" type="email" name="user_email" placeholder="john@example.com" required />

          <label htmlFor="user_message">Message</label>
          <textarea id="user_message" name="message" placeholder="Hi Kartik, I'd like to talk about..." rows="5" required></textarea>

          <button type="submit" disabled={status.loading} className="send-btn">
            <FaPaperPlane />
            <span>{status.loading ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contacts;


