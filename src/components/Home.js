import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from "../assets/mask.jpg";

// function Home() {
    
//     return (
//         <div className="container mt-5">
            
//             <h1>Welcome to Explore SriLanka!</h1>
//             <p>Manage your data efficiently using our mobile-friendly app.</p>
//             <div className="button-group">
//                 <Link to="/registration" className="btn btn-primary me-2">Register</Link>
//                 {/* <Link to="/about" className="btn btn-secondary">About</Link> */}
//             </div>
//         </div>
//     );
function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center text-white"
        style={{
          height: "80vh",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          style={{ zIndex: 1 }}
        ></div>

        {/* Content */}
        <div className="position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold">Welcome to Explore SriLanka!</h1>
          <p className="lead">
            Discover amazing places and manage your travel data efficiently.
          </p>
          <div className="d-flex justify-content-center mt-4">
            <Link to="/registration" className="btn btn-primary btn-lg me-3">
              Register
            </Link>
            {/* <Link to="/about" className="btn btn-outline-light btn-lg">
              About
            </Link> */}
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="container mt-5 text-center">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Explore Destinations</h5>
                <p className="card-text">
                  Find the best places to visit across Sri Lanka.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Manage Data</h5>
                <p className="card-text">
                  Keep track of your trips and plan efficiently.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Mobile Friendly</h5>
                <p className="card-text">
                  Access your travel info anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white mt-5 p-4 text-center">
        <p>&copy; 2025 Explore SriLanka. All rights reserved.</p>
        
      </footer>
    </div>
    );
    console.log("App js component works!");
}

export default Home;