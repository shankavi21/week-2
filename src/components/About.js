import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../assets/mask.jpg"; // 👈 put your background image inside src/assets/

function About() {
  return (
    <div
      style={{
        backgroundImage: `url(${aboutImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* About Section */}
      <div className="container mt-5 flex-grow-1">
        <div className="card shadow-lg bg-light bg-opacity-75">
          <div className="card-body p-4">
            <h2 className="text-center text-primary mb-4">About Explore SriLanka</h2>
            <p className="lead text-center">
              Explore SriLanka is a tourism-focused web app designed to help 
              travelers discover amazing destinations, manage bookings, and plan 
              their trips with ease.
            </p>
            <p>
              This project is built using <strong>React</strong> for the frontend 
              and <strong>Firebase</strong> for backend services such as authentication 
              and database management. It is designed to be fully mobile-friendly, 
              ensuring travelers can access their data anytime, anywhere. 
            </p>
            <p>
              The app demonstrates modern web development practices while 
              addressing real-world needs in the tourism industry.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white mt-5 p-4 text-center">
        <p>&copy; 2025 Explore SriLanka. All rights reserved.</p>
        
      </footer>
    </div>
  );
}

export default About;
