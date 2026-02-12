import React from 'react'
import work1 from './work1.pdf'
import work2 from './work2.pdf'
import work3 from './work3.pdf'

import { useParams } from 'react-router-dom';
import './projectWindow.css';
import Navbar1 from './navbar1';

function ProjectWindow( {match}) {
    let { projectId } = useParams();
    projectId = match.params.id; // Get the testimonial id from the URL
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
            link = work3;
            break;
        case '3':
            link = work1;
            break;
        default:
            break;
    }

    return (
      <div>
        <Navbar1 />
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
  

export default ProjectWindow
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
