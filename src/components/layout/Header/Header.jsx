import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../../../assets/img/logo_white.png';
import Facebook from '../../../assets/img/icons/facebook_w.png';
import Github from '../../../assets/img/icons/github_w.png';
import Gmail from '../../../assets/img/icons/gmail.png';
import Linkedin from '../../../assets/img/icons/linkedin_w.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animationEnded, setAnimationEnded] = useState(false);
  const [enableAnimations, setEnableAnimations] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setEnableAnimations(window.innerWidth > 1040);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial window size

    const timer = setTimeout(() => {
      setAnimationEnded(true);
    }, 5000); // Adjust time according to your animation duration

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const navbar = document.querySelector('header');
    const originalPosition = navbar.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset > originalPosition) {
        navbar.classList.add('fixed');
      } else {
        navbar.classList.remove('fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("martinezgenarocristian@gmail.com")
      .then(() => {
        alert('Correo copiado!');
      })
      .catch(err => {
        console.error('Error al copiar correo:', err);
      });
  }

  return (
    <header className={animationEnded || !enableAnimations ? '' : 'animate__animated animate__bounceInLeft animate__delay-0.5s'}>
      <div className="navbar">
        <div className="logo"><img src={Logo} alt="Logo" /></div>
        <div className={`menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="social">
          <a className={animationEnded || !enableAnimations ? '' : 'animate__animated animate__bounceInRight animate__delay-1s'} target="_blank" href="https://www.linkedin.com/in/alan-cristian-martinez-genaro-103322311"><img src={Linkedin} alt="Linkedin" /></a>
          <a className={animationEnded || !enableAnimations ? '' : 'animate__animated animate__bounceInRight animate__delay-2s'} target="_blank" href="https://github.com/AlanCristianMG"><img src={Github} alt="Github" /></a>
          <a className={animationEnded || !enableAnimations ? '' : 'animate__animated animate__bounceInRight animate__delay-3s'} href="#"><img src={Facebook} alt="Facebook" /></a>
          <a className={animationEnded || !enableAnimations ? '' : 'animate__animated animate__bounceInRight animate__delay-4s'} href="#" onclick={copyToClipboard}><img onClick={copyToClipboard} src={Gmail} alt="Gmail" /></a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
