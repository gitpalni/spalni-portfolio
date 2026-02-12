import React, { useState, useEffect } from 'react';
import Stick from './stick.png';
import About from './about_normal.png';
import Work from './work_normal.png';
import Cv from './cv_normal.png';
import References from './reference_normal.png';
import Contact from './contact_normal.png';
import HoverAbout from './about_hover.png';
import ClickAbout from './about_click.png';
import HoverWork from './work_hover.png';
import ClickWork from './work_click.png';
import HoverCv from './cv_hover.png';
import ClickCv from './cv_click.png';
import HoverReferences from './reference_hover.png';
import ClickReferences from './reference_click.png';
import HoverContact from './contact_hover.png';
import ClickContact from './contact_click.png';
import Mouse from './mouse.png';
import { Link } from 'react-router-dom';
import './button.css';

const Button = ({onScroll}) => {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);

  useEffect(() => {
    let clickTimeout;

    if (clicked) {
      clickTimeout = setTimeout(() => {
        setClicked(null);
      }, 1000); // Change back to normal after 2 seconds (2000 milliseconds)
    }

    return () => {
      clearTimeout(clickTimeout);
    };
  }, [clicked]);

  const handleHover = (button) => {
    setHovered(button);
  };

  const handleClick = (button) => {
    console.log('Button clicked:', button);
    setClicked(button);
  };

  return (
    <div className='button-container'>
      <img className='stick' src={Stick} alt="" />
      <div className='overlay'>
        <Link to="/about">
          <img
            className={`about_normal ${hovered === 'about' ? 'hover' : ''} ${clicked === 'about' ? 'click' : ''}`}
            src={clicked === 'about' ? ClickAbout : (hovered === 'about' ? HoverAbout : About)}
            alt=""
            onMouseEnter={() => handleHover('about')}
            onMouseLeave={() => handleHover(null)}
            onClick={() => handleClick('about')}
          />
        </Link>
        <Link to="/work">
        <img
          className={`work_normal ${hovered === 'work' ? 'hover' : ''} ${clicked === 'work' ? 'click' : ''}`}
          src={clicked === 'work' ? ClickWork : (hovered === 'work' ? HoverWork : Work)}
          alt=""
          onMouseEnter={() => handleHover('work')}
          onMouseLeave={() => handleHover(null)}
          onClick={() => handleClick('work')}
        />
        </Link>
        <a href="https://drive.google.com/file/d/1OsPeNtAEUVLA06cWRE4GYLraCd3d0G67/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <img
            className={`cv_normal ${hovered === 'cv' ? 'hover' : ''} ${clicked === 'cv' ? 'click' : ''}`}
            src={clicked === 'cv' ? ClickCv : (hovered === 'cv' ? HoverCv : Cv)}
            alt=""
            onMouseEnter={() => handleHover('cv')}
            onMouseLeave={() => handleHover(null)}
            onClick={() => handleClick('cv')}
          />
        </a>
        {/* <CVModal cvLink = 'https://drive.google.com/file/d/1u-bOv_KpF4ZG_1kNWA40cQ0CdBBcXLBQ/view?usp=drive_link'/> */}

        <Link to="/references">
          <img
            className={`references_normal ${hovered === 'references' ? 'hover' : ''} ${clicked === 'references' ? 'click' : ''}`}
            src={clicked === 'references' ? ClickReferences : (hovered === 'references' ? HoverReferences : References)}
            alt=""
            onMouseEnter={() => handleHover('references')}
            onMouseLeave={() => handleHover(null)}
            onClick={() => handleClick('references')}
          />
        </Link>
        <img
          className={`contact_normal ${hovered === 'contact' ? 'hover' : ''} ${clicked === 'contact' ? 'click' : ''}`}
          src={clicked === 'contact' ? ClickContact : (hovered === 'contact' ? HoverContact : Contact)}
          alt=""
          onMouseEnter={() => handleHover('contact')}
          onMouseLeave={() => handleHover(null)}
          onClick={() => onScroll()
          }
        />
        <img className='mouse' src={Mouse} alt="" />
      </div>
    </div>
  );
}

export default Button;
