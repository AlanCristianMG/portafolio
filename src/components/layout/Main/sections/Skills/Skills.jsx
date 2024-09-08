import React from 'react';
import './Skills.css';
import html from '../../../../../assets/img/tech/html5.svg';
import css from '../../../../../assets/img/tech/css3.svg';
import js from '../../../../../assets/img/tech/javascript.svg';
import git from '../../../../../assets/img/tech/git.svg';
import spring from '../../../../../assets/img/tech/spring.svg';
import docker from '../../../../../assets/img/tech/docker.svg';
import mysql from '../../../../../assets/img/tech/mysql.svg';
import python from '../../../../../assets/img/tech/python.svg';
import react from '../../../../../assets/img/tech/react.svg';
import java from '../../../../../assets/img/tech/java.svg';
import github from '../../../../../assets/img/tech/github.svg';

function Skills() {
  const techIcons = [html, css, js, git, github, spring, docker, mysql, python, react, java];

  return (
    <section className='Skills'>
      <div className='section-tittle excep'>My arsenal</div>
      <div className="icons-tech">
        <div className="scroll-container">
          <div className="scroll-content">
            {techIcons.map((icon, index) => (
              <img src={icon} alt={`tech-icon-${index}`} key={index} />
            ))}
            {techIcons.map((icon, index) => (
              <img src={icon} alt={`tech-icon-duplicate-${index}`} key={`dup-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
