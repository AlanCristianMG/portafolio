import React from 'react';
import { useEffect } from 'react';
import './Footer.css';
import Facebook from '../../../assets/img/icons/facebook_w.png';
import Github from '../../../assets/img/icons/github_w.png';
import Gmail from '../../../assets/img/icons/gmail.png';
import Linkedin from '../../../assets/img/icons/linkedin_w.png';
import ArrowButton from '../../common/Buttons/arrowButton/multicolorButton';
import ScrollReveal from 'scrollreveal';

const Footer = () => {
  useEffect(() => {
    ScrollReveal().reveal('footer', { delay: 100 });
  }, []);

  return (
    <footer>
      <div className="footer">
        <div className="about">
          <h3>Alan Cristian M. G.</h3>
          <h4>Software Development Student at UTVT</h4>
          <p>Committed to delivering high quality software and continuous improvement.</p>
          <div className="social-f">
            <a href="#"><img src={Github} alt="GitHub" /></a>
            <a href="#"><img src={Linkedin} alt="LinkedIn" /></a>
            <a href="#"><img src={Facebook} alt="Facebook" /></a>
            <a href="#"><img src={Gmail} alt="Gmail" /></a>
          </div>
        </div>
        <div className="links">
          <div className="link-section general-l">
            <h5>General</h5>
            <ul>
              <li><a href="#">My Mission</a></li>
              <li><a href="#">Hobbies</a></li>
              <li><a href="#">Courses</a></li>
            </ul>
          </div>
          <div className="link-section contact-l">
            <h5>Contact</h5>
            <ul>
              <li><a href="#">Email Alan</a></li>
              <li><a href="#">Phone Number Alan</a></li>
              <li><a href="#">Home</a></li>
            </ul>
          </div>
        </div>
        <div className="form">
          <h4>Say Hello!</h4>
          <form>
            <input type="text" placeholder="Enter your email" />
            <textarea placeholder="Write me a message"></textarea>
            <ArrowButton/>
          </form>
        </div>
        <div className="rights">
          <p>&copy; 2024 Alan Cristian M. G. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
