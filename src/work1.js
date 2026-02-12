import React from 'react';
import './work1.css';
import Navbar from './navbar.work';
import w1 from './w1.png';
import w2 from './w2.png';
import w3 from './w3.png';
import work1 from './work1.pdf';
import work2 from './work2.pdf';
import work3 from './work3.pdf';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const workData = [
  {
    id: 1,
    name: "Collab",
    img: w1,
    link: work2
  },
  {
    id: 2,
    name: "Retro Reel",
    img: w3,
    link: work3
  },
  {
    id: 3,
    name: "Craft Documentation",
    img: w2,
    link: work1
  },
]

const Work1 = () => {
  return (
    <div>
        <Navbar/>
    <h1 style={{ paddingLeft: '5%', paddingTop: '4.5%', marginBottom: '-1%', textAlign: 'left' }}>UI/UX Design</h1>
      <div className="image-container">
      {workData.map((testimonial) => (
        <Link style={{textDecoration:'none'}}to={`projectWindow/${testimonial.id}`}>
            <div
              key={testimonial.id}
              className="work-card"
              style={{ backgroundColor: 'white' }}
            >
              <div className="content">
                <img src={testimonial.img} />
                <h3 style={{ color: 'black', fontSize: '18px', marginLeft: '2%'}}>{testimonial.name}</h3>
              </div>
            </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Work1;
