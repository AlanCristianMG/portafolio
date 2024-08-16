import React, { useState, useEffect } from 'react';
import './Welcome.css';
import Orbit from '../../../../common/Others/Orbit/Orbit';
import GlitchButton from '../../../../common/Buttons/glitchButton/GlitchButton';
import avatar from '../../../../../assets/img/avatar.webp'

function Welcome() {
  const words = ["a Software Engineer", "a Web Developer", "a Tech Enthusiast", "a Problem Solver"];
  const [currentText, setCurrentText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setCurrentText(currentWord.slice(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);
        setSpeed(50); // Velocidad de borrado más rápida
      } else {
        setCurrentText(currentWord.slice(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);
        setSpeed(150); // Velocidad de escritura más lenta
      }

      if (!isDeleting && letterIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pausa antes de borrar
      } else if (isDeleting && letterIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(typingTimeout);
  }, [currentText, letterIndex, isDeleting, speed, words, wordIndex]);

  return (
    <section className='Welcome'>
      <div className="welcome-text">
        <div className="w-tittle">Hi!, I'm</div>
        <div className="w-name">Alan Cristian</div>
        <div className="w-tittle animated-text">
          {currentText}
          <span className="cursor">|</span>
        </div>
        <div className="w-buttons">
          <GlitchButton text={"Download CV"} />
        </div>
      </div>
      <div className="welcome-image">
        <img src={avatar} />
      </div>

    </section>
  );
}

export default Welcome;
