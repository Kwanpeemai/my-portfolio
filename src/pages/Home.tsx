import React from "react";

const Home: React.FC = () => {
  return (
    <div id="home" className="home-container">
      <div className="image-box">
        <img src="/src/assets/img.svg" alt="Image" />
      </div>
      <div className="text-box">
        <div className="head-with-line">
          <h1>My</h1>
          <div className="dashline"></div>
        </div>
        <h1>Portfolio</h1>
        <p>
          I am a 3rd-year Computer Science student passionate about Full Stack
          Development. With experience in both back-end and front-end, I focus
          on building scalable solutions and seamless user experiences. I thrive
          in collaborative environments and continuously seek to learn and grow.
        </p>
      </div>
    </div>
  );
};

export default Home;
