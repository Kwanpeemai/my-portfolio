import React from "react";

const MyProject: React.FC = () => {
  return (
    <div id="project" className="project-container">
      <div className="pj-head">
        <h1>My Project</h1>
        <div className="dashline"></div>
      </div>
      <div className="pj-card-container">
        <div className="pj-box">
          <div className="img-pj">
            <img src="/my-portfolio/images/mobileapp.svg" alt="" />
          </div>
          <p>Mobile Application Project</p>
          <a
            href="https://github.com/Kwanpeemai/MoblieApp-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>View the project on GitHub</p>
          </a>
          <div className="ptext">
            <br />
            <p className="job-description">
              Full Stack Developer <span className="date">Sep - Oct 2024</span>
            </p>
            <p>
              <li>
                Built a Flutter-based music app with mood-based categorization.{" "}
              </li>
              <li>Integrated Spotify, YouTube, and Google APIs.</li>
              <li>
                Utilized Provider for state management and designed UI with
                Figma.
              </li>
            </p>
          </div>
        </div>

        <div className="pj-box">
          <div className="img-pj">
            <img src="/my-portfolio/images/4hat.png" alt="" />
          </div>
          <p>Assignment ODDS (INTERN)</p>
          <a
            href="https://assignment-odds-qxzh9mi4f-peemais-projects.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>View the project on Vercel</p>
          </a>
          <div className="ptext">
            <br />
            <p className="job-description">
              Front-End Developer <span className="date">Mar 2024</span>
            </p>
          </div>
        </div>

        <div className="pj-box">
          <div className="img-pj">
            <img src="/my-portfolio/images/webapp.png" alt="" />
          </div>
          <p>Web Application Development</p>
          <a
            href="https://drive.google.com/file/d/1rYzhI23Ib1CIm_XgK-CmfckeVml0NgWd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>View the project on manual</p>
          </a>
          <div className="ptext">
            <br />
            <p className="job-description">
              Full Stack Developer <span className="date">Mar - Apr 2024</span>
            </p>
            <p>
              <li>
                Developed an Angular and Golang food ordering system.
              </li>
              <li>
                Implemented real-time stock management, dynamic pricing, and
                used MySQL for data storage.
              </li>
              <li>
                Integrated multilingual support and order processing APIs.
              </li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
