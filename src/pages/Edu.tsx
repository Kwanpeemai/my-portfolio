import React from "react";

const Edu: React.FC = () => {
  return (
    <div>
      <div id="edu" className="edu-container">
        <div className="edu-images-container">
          <div className="box box1">
            <img src="/src/assets/nssc.svg" alt="Image" />
            <div className="hidden-box"></div>
          </div>
          <div className="box box2">
            <div className="hidden-box"></div>
            <img src="/src/assets/su.svg" alt="Image" />
          </div>
        </div>
        <div className="box box3">
          <div className="text-box">
            <h1>Education</h1>
            <div className="dashline"></div>
            <div className="school-box">
              <p>1.</p>
              <p>
                Nakhonsawan School, Nakhonsawan, Thailand <br />
                High School Diploma (Science-Mathematics Program) <br />
                Graduated: 2021 GPA: 3.89
              </p>
            </div>
            <div className="school-box">
              <p>2.</p>
              <p>
                Silpakorn University, Nakhonpathom, Thailand <br />
                Bachelor of Science(Computer Science) <br />
                Expected Graduation: 2026 GPA: 3.50 (5 semesters)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edu;
