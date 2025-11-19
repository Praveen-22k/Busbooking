import React from 'react';
import { Helpbanner, Helpbanner2 } from '../assets/assests';
import Footer from '../component/Footer/Footer';
const Help = () => {
  return (
    <div className="container-fluid p-0">

      <div className="row g-0 min-vh-100">

      
        <div className="col-12 col-md-4 d-flex flex-column align-items-center bg-light p-4">

        
          <img
            src={Helpbanner2}
            className="img-fluid mb-3"
            style={{ maxWidth: "200px" }}
            alt="Help Icon"
          />

          <div className="text-center px-3">
            <p className="mt-3">
              <strong>Need Assistance?</strong><br /><br />
              Welcome to the Help Center! Whether you're booking your first ticket
              or managing a reservation, we're here to guide you every step of the way.
              Explore FAQs, learn how to use key features, and get quick support for
              payment, cancellations, or travel updates. Your journey matters —
              let us help make it smooth and stress-free.
            </p>
          </div>

       
          <button className="btn btn-success mt-3 w-75 w-md-50">
            Contact Us
          </button>
        </div>

      
        <div
          className="col-12 col-md-8 d-flex flex-column align-items-center p-4 p-md-5 text-white border border-white rounded"
          style={{ backgroundColor: "#B027F5" }}
        >

          <h1 className="text-center mb-4">TicketEasy Help</h1>

         
          <img
            src={Helpbanner}
            alt="Help Banner"
            className="img-fluid"
            style={{ maxWidth: "500px", width: "100%" }}
          />

          <h2 className="mt-4 mt-md-5 text-center">24/7 Customer Support</h2>
        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default Help;