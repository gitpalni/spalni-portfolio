import React from 'react'
import { useEffect, useState } from 'react';
import Navbar from './navbar.work'
import Navbar2 from './navbar2';
import Navbar3 from './navbar3';
import work1 from './work1.pdf'
import work2 from './work2.pdf'
import work3 from './work3.pdf'
import work4 from './work4.pdf';
import work5 from './work5.pdf';
import work6 from './work6.pdf';
import work7 from './work7.pdf';
import work8 from './work8.pdf';
import work9 from './work9.pdf';
import work10 from './work10.pdf';
import work11 from './work11.pdf';
import w1 from './w1.png'
import w2 from './w2.png'
import w3 from './w3.png'
import w8 from './w8.png';
import w9 from './w9.png';
import w10 from './w10.png';
import w11 from './w11.png';
import { useParams } from 'react-router-dom';
import './projectWindow.css';
import Navbar1 from './navbar1';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const workData = [
  {
    id: 2,
    name: "Collab",
    img: w1,
    link: work1
  },
  {
    id: 1,
    name: "Craft Documentation",
    img: w2,
    link: work2
  },
  {
    id: 3,
    name: "Retro Reel",
    img: w3,
    link: work3
  },
  {
    id: 4,
    name: "Graphic Merchandise Design",
    img: w1,
    link: work4
    },
    {
    id: 5,
    name: "Illustrations",
    img: w2,
    link: work5
    },
    {
    id: 6,
    name: "Fashion Illustrations",
    img: w3,
    link: work6
    },
    {
    id: 7,
    name: "Branding",
    img: w3,
    link: work7
    },
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
    name: "Bracelet Design",
    img: w10,
    link: work11
    },
    {
    id: 11,
    name: "Study Desk Design",
    img: w11,
    link: work10
    }
]
function ProjectWindow3( {match}) {
    let { projectId } = useParams();
    projectId = match.params.id; // Get the testimonial id from the URL
    const id = Number(projectId);
    // const pdfSrc = `./work${projectId}.pdf`;
    // const [pdfUrl, setPdfUrl] = useState("");
    // useEffect(() => {
    //   // Replace with logic to fetch the PDF URL based on testimonialId
    //   // Example: const pdfUrl = fetchPdfUrl(testimonialId);
    //   setPdfUrl(match.params.id);
    // }, [projectId]);
    var link;
    switch(projectId){
        case '1':
            link = work2;
            break;
        case '2':
            link = work1;
            break;
        case '3':
            link = work3;
            break;
        case '4':
            link = work4;
            break;
        case '5':
            link = work5;
            break;
        case '6':
          link = work6;
          break;
        case '7':
            link = work7;
            break;
        case '8':
            link = work8;
            break;
        case '9':
            link = work9;
            break;
        case '10':
            link = work11;
            break;
        case '11':
            link = work10;
            break;
        default:
            break;
    }
    
    return (
      <div>
        {/* {console.log(navbar)} */}
        <Navbar3 />
        <div className='project-container'>
        <iframe 
        className="centered-iframe"
        title="PDF Document"
        src = {link} 
        alt = "could not"
        // height='100%'
        >
        </iframe>
      </div>
      </div>
    );
  }
  

export default ProjectWindow3
// import { useParams } from 'react-router-dom';

// function ProjectWindow() {
//   const { projectId } = useParams();

//   const pdfSrc = `./work${projectId}.pdf`;

//   return (
//     <div>
//       <h2>Testimonial Page</h2>
//       <iframe
//         title="Testimonial PDF"
//         src={pdfSrc}
//         width="100%"
//         height="500px"
//         frameBorder="0"
//         scrolling="auto"
//       ></iframe>
//     </div>
//   );
// }
// projectId==1?work1:(projectId==2?work2:(projectId==3?work3:(projectId==4?work)))
// export default ProjectWindow;
