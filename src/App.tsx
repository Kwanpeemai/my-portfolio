import React from "react";
import Home from "./pages/Home";
import Edu from "./pages/Edu";
import MyProject from "./pages/MyProject";
import Contact from "./pages/Contact";
import "./pages/styles.css";
import NavBar from "./components/NavBar";
import './components/NavBar.css'
import './App.css'

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="padding-navbar">
        <Home />
        <Edu />
        <MyProject />
        <Contact />
      </div>
    </div>
  );
};

export default App;
