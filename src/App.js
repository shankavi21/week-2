import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css'


import { useEffect } from "react";
import app from "./firebase"; 


export default function App() {
  useEffect(() => {
    console.log("🔥 Firebase App Connected:", app);
  }, []);
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Explore SriLanka</Link>
          <div className="collapse navbar-collapse show">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/registration">Registration</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About />} />
      </Routes>
  
    </>
  );

}
