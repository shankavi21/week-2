import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// function Registration() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`Registered: ${name}, ${email}`);
//     };
//     return (
//         <div className="container mt-5">
//             <h2>Register</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label>Name</label>
//                     <input type="text" value={name} onChange={(e) => setName(e.target.value)}
//                         className="form-control" />
//                 </div>
//                 <div className="mb-3">
//                     <label>Email</label>
//                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
//                         className="form-control" />
//                 </div>
//                 <button type="submit" className="btn btn-success">Submit</button>
//             </form>
//         </div>
//     );
function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDestination: ${destination}`);
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
<option value="Ampara">Ampara</option>
<option value="Anuradhapura">Anuradhapura</option>
<option value="Badulla">Badulla</option>
<option value="Batticaloa">Batticaloa</option>
<option value="Colombo">Colombo</option>
<option value="Galle">Galle</option>
<option value="Gampaha">Gampaha</option>
<option value="Hambantota">Hambantota</option>
<option value="Jaffna">Jaffna</option>
<option value="Kalutara">Kalutara</option>
<option value="Kandy">Kandy</option>
<option value="Kegalle">Kegalle</option>
<option value="Kilinochchi">Kilinochchi</option>
<option value="Kurunegala">Kurunegala</option>
<option value="Mannar">Mannar</option>
<option value="Matale">Matale</option>
<option value="Matara">Matara</option>
<option value="Monaragala">Monaragala</option>
<option value="Mullaitivu">Mullaitivu</option>
<option value="Nuwara Eliya">Nuwara Eliya</option>
<option value="Polonnaruwa">Polonnaruwa</option>
<option value="Puttalam">Puttalam</option>
<option value="Ratnapura">Ratnapura</option>
<option value="Trincomalee">Trincomalee</option>
<option value="Vavuniya">Vavuniya</option>

                  </select>
                </div>
                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registration;