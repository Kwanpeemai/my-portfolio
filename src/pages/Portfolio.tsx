import React from "react";
import Home from "./Home";
import Edu from "./Edu";
import MyProject from "./MyProject";
import Contact from "./Contact";
import './styles.css';

const Portfolio: React.FC = () => {
  return (
    <div className="padding-navbar">
      <Home />
      <Edu />
      <MyProject />
      <Contact />
    </div>
  );
};

export default Portfolio;
