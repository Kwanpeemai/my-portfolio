import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import Edu from "./pages/Edu";
// import MyProject from "./pages/MyProject";
// import Contact from "./pages/Contact";
import "./pages/styles.css";
import NavBar from "./components/NavBar";
import "./components/NavBar.css";
import "./App.css";
import Portfolio from "./pages/Portfolio";

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/my-portfolio" />} />
        <Route path="/my-portfolio" element={<Portfolio/>} />
      </Routes>
    </div>
  );
};

export default App;
