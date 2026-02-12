import React from 'react';
import './navbar.css';
import Logo from './logo.png';
import Gmail from './gmail.png';
import Linkedin from './linkedin.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="social-icons">
        <a href="mailto:shambhavipalnicontact@gmail.com"><img src={Gmail} alt="Gmail" /></a>
        <a href="https://www.linkedin.com/in/shambhavi-palni-046aa1201/"><img src={Linkedin} alt="LinkedIn" /></a>
      </div>
    </nav>
  );
};

export default Navbar;
