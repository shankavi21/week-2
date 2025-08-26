import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from '../firebase'; // Make sure firebase.js is in src/
import { collection, addDoc } from "firebase/firestore";



function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if(name.length < 3) { alert("Name must be at least 3 characters"); return; }
    if(!email.includes("@")) { alert("Invalid email"); return; }
    if(phone.length !== 10 || isNaN(phone)) { alert("Phone must be 10 digits"); return; }
    if(destination === "") { alert("Please select a destination"); return; }

    try {
      // Add document to Firestore
      await addDoc(collection(db, "users"), {
        name,
        email,
        phone,
        destination,
        timestamp: new Date()
      });

      // Show success message
      setSuccess(true);

      // Clear form fields
      setName('');
      setEmail('');
      setPhone('');
      setDestination('');

      // Hide success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);

    } catch(err) {
      console.error("Error adding document: ", err);
      alert("Error submitting form. Check console.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">Tourism Registration</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Preferred Destination</label>
                  <select
                    className="form-select"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                  >
                    <option value="">-- Select District --</option>
                    {/* All your options here */}
                  
  
  <option value="Colombo">Colombo</option>
  <option value="Gampaha">Gampaha</option>
  <option value="Kalutara">Kalutara</option>
  <option value="Kandy">Kandy</option>
  <option value="Matale">Matale</option>
  <option value="Nuwara Eliya">Nuwara Eliya</option>
  <option value="Galle">Galle</option>
  <option value="Matara">Matara</option>
  <option value="Hambantota">Hambantota</option>
  <option value="Jaffna">Jaffna</option>
  <option value="Kilinochchi">Kilinochchi</option>
  <option value="Mannar">Mannar</option>
  <option value="Vavuniya">Vavuniya</option>
  <option value="Mullaitivu">Mullaitivu</option>
  <option value="Batticaloa">Batticaloa</option>
  <option value="Ampara">Ampara</option>
  <option value="Trincomalee">Trincomalee</option>
  <option value="Kurunegala">Kurunegala</option>
  <option value="Puttalam">Puttalam</option>
  <option value="Anuradhapura">Anuradhapura</option>
  <option value="Polonnaruwa">Polonnaruwa</option>
  <option value="Badulla">Badulla</option>
  <option value="Moneragala">Moneragala</option>
  <option value="Ratnapura">Ratnapura</option>
  <option value="Kegalle">Kegalle</option>


                    {/* add the rest */}
                  </select>
                </div>
                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Register
                  </button>
                </div>
              </form>

              {success && (
                <div className="alert alert-success mt-3" role="alert">
                  Registration successful!
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
