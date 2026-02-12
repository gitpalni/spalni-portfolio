import React, { useState } from 'react';
import './references.css';
import Navbar from './navbar.pages';
import Modal from './modal';
import lor1 from './lor1.pdf';
import lor2 from './lor2.pdf';
import lor3 from './lor3.pdf';
import lor4 from './lor4.pdf';

const testimonialsData = [
  {
    id: 1,
    name: 'S. A. Venkatasubramanian',
    designation: 'NIFT Assoc. Professor',
    companyname: '(Industry mentor)',
    color: '#F0F4FF',
    image: lor1, // Add './' before the image path
  },
  {
    id: 2,
    name: 'Vatsal Ambastha',
    designation: 'CEO and Founder',
    companyname: 'Firexit Software Pvt Ltd.',
    color: '#FFECED',
    image: lor2, // Add './' before the image path
  },
  {
    id: 3,
    name: 'Priyanshu Srivastava',
    designation: 'NIFT Assis. Professor',
    companyname: '(UX and Communication Design)',
    color: '#FFF8E4',
    image: lor3, // Add './' before the image path
  },
  {
    id: 4,
    name: 'Akshat Gupta',
    designation: 'Founder',
    companyname: 'LittleBird India',
    color: '#E8FFEC',
    image: lor4, // Add './' before the image path
  },
];

const TestimonialsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
    setModalOpen(false);
  };

  return (
    <div>
      <Navbar className='navbar'/>
      <div className="testimonials-page">
        <div className="heading">
          <h1>Recommendations/&nbsp;References</h1>
        </div>
        <div className="testimonials-container">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card"
              style={{ backgroundColor: testimonial.color }}
              onClick={() => openModal(testimonial)}
            >
              <div className="content">
                <h3 style={{ color: '#8791B2' }}>{testimonial.name}</h3>
                <h3 style={{ color: '#8791B2' }}>{testimonial.designation}</h3>
                <h3 style={{ color: '#8791B2' }}>{testimonial.companyname}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalOpen && (
        <Modal className='modal' onClose={closeModal}>
          <div>
            {/* <img src={require(`./${selectedTestimonial.image}.pdf`)} alt={selectedTestimonial.name} /> */}
            {console.log(selectedTestimonial.image)}
            <iframe className='contented' title="PDF Document" src = {selectedTestimonial.image} alt = "could not" height='100%' width = '100%s'></iframe>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default TestimonialsPage;
