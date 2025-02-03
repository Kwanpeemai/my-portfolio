import React from "react";

const MyProject: React.FC = () => {
  return (
    <div id="project" className="project-container">
      <div className="pj-head">
        <h1>My Project</h1>
      </div>
      <div className="pj-card-container">
        <div className="pj-box">
          <a
            href="https://github.com/Kwanpeemai/WepAppProject_Backend.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the project on GitHub
          </a>
        </div>
        <div className="pj-box">
          <a
            href="https://github.com/Kwanpeemai/Assignment_ODDS.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the project on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
