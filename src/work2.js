import React from 'react';
import './work2.css';
import Navbar from './navbar.work';
import work4 from './work4.pdf';
import work5 from './work5.pdf';
import work6 from './work6.pdf';
import work7 from './work7.pdf';
import w4 from './w4.png';
import w5 from './w5.png';
import w6 from './w6.png';
import w7 from './w7.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const workData = [
  {
    id: 4,
    name: "Graphic Merchandise Design",
    img: w5,
    link: work4
  },
  {
    id: 5,
    name: "Illustrations",
    img: w4,
    link: work5
  },
  {
    id: 6,
    name: "Fashion Illustrations",
    img: w6,
    link: work6
  },
  {
    id: 7,
    name: "Branding",
    img: w7,
    link: work7
  }
]
const Work2 = () => {
  return (
    <div>
        <Navbar/>
    <h1 style={{ paddingLeft: '5%', paddingTop: '4.5%', marginBottom: '-1%', textAlign: 'left' }}>Graphic Design and Illustration</h1>
      <div className="image-container1">
      {workData.map((testimonial) => (
        <Link style={{textDecoration:'none'}}to={`projectWindow2/${testimonial.id}`}>
            <div
              key={testimonial.id}
              className="work-card"
              style={{ backgroundColor: 'white'  }}
              // onClick={() => handleProjectClick(testimonial.id)}
            >
              <div className="cont">
                <img src={testimonial.img} />
                <h3 style={{ color: 'black', fontSize:'18px', marginLeft:'2%'}}>{testimonial.name}</h3>
                {/* <h3 style={{ color: '#8791B2' }}>{testimonial.designation}</h3> */}
                {/* <h3 style={{ color: '#8791B2' }}>{testimonial.companyname}</h3> */}
                {/* <iframe className='contented' title="PDF Document" src = {testimonial.link} alt = "could not" height='100%' width = '100%s'></iframe> */}
              </div>
            </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Work2;
