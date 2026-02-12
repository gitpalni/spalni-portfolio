import React from 'react';
import './navbar.pages.css';
import { Link } from 'react-router-dom';
import Back from './back.png';
import Gmail from './gmail.png';
import Linkedin from './linkedin.png';
import Logo from './logo.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="back">
      <Link to="/work">
          <img src={Back} alt="" />
        </Link>
      </div>
      <div className="social-icons">
        <a href="mailto:shambhavipalnicontact@gmail.com"><img src={Gmail} alt="Gmail" /></a>
        <a href="https://www.linkedin.com/in/shambhavi-palni-046aa1201/"><img src={Linkedin} alt="LinkedIn" /></a>
      </div>
    </nav>
  );
};

export default Navbar;
