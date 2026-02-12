import React from 'react';
import './home.css';
import Navbar from './navbar'
import Ticket from './ticket.png';
import Main from './Untitled-Artwork.png';
import Button from './button';
import Form from './Form';

const home = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }
  return (
    <div >
      <Navbar/>
     <div className='entirecontent'>
      <div className="text">
        <p>Shambhavi Palni</p> <br/><p className='line'>UX Designer</p>
      </div>  
        <br/>
        <p className='homepagetext'>Hey there! I am a creative Graphic and UI/UX
          <br/>
          Designer, and here is your ticket to my portfolio!</p>
        <div classname='buttonandticket'><div className="button"><Button onScroll={handleScroll}/></div>
        <img className='ticket' src={Ticket} alt="Ticket" /></div>
        <br />
        <br />
        <br />
        <img className='main' src={Main} alt="Main" />
        <Form />
      </div>
    </div>
  );
}

export default home;
