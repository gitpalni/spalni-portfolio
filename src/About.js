import React from 'react';
import Navbar from './navbar.pages';
import img1 from './about.png';
import './about.css';

const About = () => {
  return (
    <div className='about-body'>
      <Navbar/> 
      <img className='img_x' src={img1} alt="" />
      <span className = "anchor">
        <a href = "./Shambhavi Palni-CV-v2602.pdf" target = "_blank">Resume</a><span className='t'> | </span>
        <a href = "mailto:shambhavipalnicontact@gmail.com" target='_blank'>shambhavipalnicontact@gmail.com</a>
      </span>
    </div>
  );
}

export default About;
