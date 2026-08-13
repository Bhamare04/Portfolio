import React from 'react';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Resume from './Resume.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contacts from './Contacts.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container bg-[#0a0f2c] min-h-screen text-white selection:bg-amber-400 selection:text-[#0a0f2c]">
      <Navbar />
      <main>
        <Home />
        <About />
        <Resume />
        <Projects />
        <Skills />
        <Contacts />
      </main>
      <footer className="py-8 text-center text-sm text-gray-500 border-t border-white/5 bg-[#070a1e]">
        <p>© {new Date().getFullYear()} Kartik Sanjay Bhamare. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;

