import React from "react";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="home-container">
      <div className="image-box">
        <img src="/my-portfolio/images/myimage.JPG" alt="Image" />
      </div>
      <div className="text-box">
        <div className="head-with-line">
        <h1>My</h1>
        <div className="dashline">
        </div>
        </div>
        <h1>Portfolio</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
      </div>
    </div>
  );
};

export default Contact;
