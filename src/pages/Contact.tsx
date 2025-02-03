import React from "react";
// import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Contact: React.FC = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-image-box">
        <img src="/my-portfolio/images/myimage.JPG" alt="Image" />
      </div>
      <div className="contact-box">
        <h1>My Contact</h1>
        <div className="dashline"></div>
        <p>
          <FontAwesomeIcon icon={faPhone} /> &nbsp; 091-843-1741
        </p>
        <br />
        <p>
          <FontAwesomeIcon icon={faGithub} /> &nbsp;  
          <a href="https://github.com/Kwanpeemai" target="_blank" rel="noopener noreferrer">
            github.com/Kwanpeemai
          </a>
        </p>
        <br />
        <p>
        <FontAwesomeIcon icon={faAt}/> &nbsp; kwanpuengchai@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
