import React from "react";
import {Link} from 'react-router-dom' 
import Footer from "../component/Footer/Footer";
const Lastpay = () => {
  return (
    <>
    <div className="container mt-5">

      <div className="row">

        
        <div className="col-12 col-md-7">
          <h2 className="fw-bold">Passenger Details</h2>

          <div className="pt-3">

            <div className="mb-3">
              <label For="fname" className="form-label">Full Name</label>
              <input
                type="text"
                id="fname"
                className="form-control"
                placeholder="Enter Name" required
              />
            </div>

            <div className="mb-3">
              <label For="emailaddress" className="form-label">Email Address</label>
              <input
                type="email"
                id="emailaddress"
                className="form-control"
                placeholder="name@gmail.com" required
              />
            </div>

            <div className="mb-3">
              <label For="phone" className="form-label">Phone</label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                placeholder="eg: +91 9034789225" required
              />
            </div>

            <div className="mb-3">
              <label For="alter" className="form-label">Alternative Number</label>
              <input
                type="tel"
                id="alter"
                className="form-control"
                placeholder="eg: +91 7890450015"
              />
            </div>

          </div>
        </div>

        
        <div className="col-12 col-md-5">
          <div className="card p-4 shadow-sm">

           
            <h4 className="fw-bold text-center">Your Ticket Report Status</h4>
            <hr />

            
            <p className="fw-semibold mb-1">Your Destination</p>

            <div className="d-flex justify-content-between">
              <div>
                <p className="small text-muted mb-0">From (New Buspark)</p>
                <p className="fw-semibold mb-0">Chennai (06:15 pm)</p>
              </div>

              <div>
                <p className="small text-muted mb-0">To (Bus Stand)</p>
                <p className="fw-semibold mb-0">Madurai (08:45 am)</p>
              </div>
            </div>

            <p className="small text-muted mt-2 mb-1">Bus No. :</p>
            <p className="fw-semibold">(Ba. 2 Kha 9704)</p>

            <hr />

           
            <p className="fw-semibold mb-1">Your Seats</p>

            <div className="d-flex gap-2 flex-wrap">
              <span className="px-3 py-1 border rounded-pill bg-light">A2</span>
              <span className="px-3 py-1 border rounded-pill bg-light">A3</span>
              <span className="px-3 py-1 border rounded-pill bg-light">A4</span>
              <span className="px-3 py-1 border rounded-pill bg-light">B6</span>
            </div>

            <hr />

          
            <p className="fw-semibold mb-1">Total Fare Price</p>

            <div className="d-flex justify-content-between">
              <p className="small text-muted">Total Price: <br />(including all taxes)</p>
              <h5 className="fw-bold">INR 6400</h5>
            </div>

            <button
              style={{ backgroundColor: "#6A1B9A", color: "white" }}
              className="btn w-100 mt-3"
            >
                <Link to={'/payment'}>Proceed to Pay</Link>
            </button>

          </div>
        </div>

      </div>
    </div>
     <Footer/>
    </>
  );
};

export default Lastpay;