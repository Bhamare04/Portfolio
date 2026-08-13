import React, { useState, useEffect } from 'react';

const TypewriterText = ({ 
  words = ["a passionate developer 🚀", "a MERN stack engineer 💻", "a problem solver ⚡"],
  typeSpeed = 100,
  deleteSpeed = 50,
  delay = 2000 
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[currentWordIndex];

    let timer;
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
      }, deleteSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
      }, typeSpeed);
    }

    if (!isDeleting && currentText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, delay]);

  return (
    <span className="inline-flex items-center text-yellow-300 font-semibold">
      <span>{currentText}</span>
      <span className="ml-1 w-[2px] h-6 bg-yellow-400 animate-pulse"></span>
    </span>
  );
};

export default TypewriterText;
