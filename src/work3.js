import React from 'react';
import './work1.css';
import Navbar from './navbar.work';
import work8 from './work8.pdf';
import work9 from './work9.pdf';
import work10 from './work10.pdf';
import work11 from './work11.pdf';
import w8 from './w8.png';
import w9 from './w9.png';
import w10 from './w10.png';
import w11 from './w11.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const workData = [
  {
    id: 8,
    name: "Product Design - A 5 Project Compilation",
    img: w8,
    link: work8
  },
  {
    id: 9,
    name: "Product Design at Little Bird India",
    img: w9,
    link: work9
  },
  {
    id: 10,
    name: "Study Desk Design",
    img: w11,
    link: work10
  },
  {
    id: 11,
    name: "Bracelet Design",
    img: w10,
    link: work11
  }
]
const Work3 = () => {
  return (
    <div>
        <Navbar/>
    <h1 style={{ paddingLeft: '5%', paddingTop: '4.5%', marginBottom: '-1%', textAlign: 'left' }}>Product Design</h1>
      <div className="image-container">
      {workData.map((testimonial) => (
        <Link style={{textDecoration:'none'}}to={`projectWindow3/${testimonial.id}`}>
            <div
              key={testimonial.id}
              className="work-card"
              style={{ backgroundColor: 'white'  }}
              // onClick={() => handleProjectClick(testimonial.id)}
            >
              {/* <div className="cont"> */}
                <img src={testimonial.img} />
                <h3 style={{ color: 'black', marginLeft:'2%', fontSize:'18px' }}>{testimonial.name}</h3>
                {/* <h3 style={{ color: '#8791B2' }}>{testimonial.designation}</h3> */}
                {/* <h3 style={{ color: '#8791B2' }}>{testimonial.companyname}</h3> */}
                {/* <iframe className='contented' title="PDF Document" src = {testimonial.link} alt = "could not" height='100%' width = '100%s'></iframe> */}
              {/* </div> */}
            </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Work3;
