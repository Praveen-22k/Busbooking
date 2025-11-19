import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap-icons/font/bootstrap-icons.css";

const RefundPolicyPage = () => {
  return (
    <div>


      <div className=" text-white text-center py-5"style={{backgroundColor:"#6A1B9A"}}>
        <h1 className="fw-bold">
          <i className="bi bi-receipt-cutoff me-2"></i> Refund Policy
        </h1>
        <p className="mt-2">
          We offer users the option to purchase refundable tickets with clear and
          transparent terms.
        </p>
      </div>

      
      <div className="container my-5"style={{color:"#B027F5"}}>
        <h3 className="fw-bold mb-4">
          <i className="bi bi-journal-text text-warning me-2"></i>
          Our Refund Policy
        </h3>

        <div className="row g-4">

          
          <div className="col-md-4">
            <div className="p-3 shadow rounded bg-white h-100">
              <h5>
                <i className="bi bi-check2-circle text-success me-2"></i>
                Full Refunds
              </h5>
              <p>Available within 24 hours of purchase, no questions asked.</p>
            </div>
          </div>

          
          <div className="col-md-4">
            <div className="p-3 shadow rounded bg-white h-100">
              <h5>
                <i className="bi bi-percent text-warning me-2"></i>
                Partial Refunds
              </h5>
              <p>For cancellations made at least 48 hours before departure.</p>
            </div>
          </div>

          
          <div className="col-md-4">
            <div className="p-3 shadow rounded bg-white h-100">
              <h5>
                <i className="bi bi-x-circle-fill text-danger me-2"></i>
                No Refunds
              </h5>
              <p>For last-minute cancellations (less than 24 hours before departure).</p>
            </div>
          </div>

          
          <div className="col-md-4">
            <div className="p-3 shadow rounded bg-white h-100">
              <h5>
                <i className="bi bi-clock-fill text-info me-2"></i>
                Refund Processing Time
              </h5>
              <p>Refunds take 5–7 business days to be processed.</p>
            </div>
          </div>

          
          <div className="col-md-4">
            <div className="p-3 shadow rounded bg-white h-100">
              <h5>
                <i className="bi bi-wallet2 text-warning me-2"></i>
                Refund to Original Payment Method
              </h5>
              <p>Refunds will be credited back to the original payment source.</p>
            </div>
          </div>

          
          <div className="col-md-4">
            <div className="p-3 shadow rounded bg-white h-100">
              <h5>
                <i className="bi bi-eye-fill text-primary me-2"></i>
                Transparent Terms
              </h5>
              <p>No hidden fees or unexpected deductions.</p>
            </div>
          </div>

        </div>
      </div>

      
      <div className="bg-light py-5"style={{color:"#B027F5"}}>
        <div className="container">
          <h3 className="fw-bold mb-4 text-center">
            <i className="bi bi-tools me-2"></i>
            How Our Refund Process Works
          </h3>

          <div className="row g-4 justify-content-center">

           
            <div className="col-md-3">
              <div className="p-3 shadow rounded bg-white h-100 text-center">
                <h4>1. Request a Refund</h4>
                <p>Log into your account and request a refund under “My Bookings.”</p>
              </div>
            </div>

            
            <div className="col-md-3">
              <div className="p-3 shadow rounded bg-white h-100 text-center">
                <h4>2. Refund Approval</h4>
                <p>Your request will be reviewed based on eligibility.</p>
              </div>
            </div>

            
            <div className="col-md-3">
              <div className="p-3 shadow rounded bg-white h-100 text-center">
                <h4>3. Refund Processed</h4>
                <p>The refund will be credited back to your original payment method.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      
      <div className="container my-5"style={{color:"#B027F5"}}>
        <h3 className="fw-bold mb-3">
          <i className="bi bi-stars text-warning me-2"></i>
          Why Choose Our Refund Policy?
        </h3>

        <ul className="list-unstyled fs-5">
          <li><i className="bi bi-check-circle-fill text-success me-2"></i>No hidden charges & transparent terms</li>
          <li><i className="bi bi-check-circle-fill text-success me-2"></i>Fast and hassle-free refund process</li>
          <li><i className="bi bi-check-circle-fill text-success me-2"></i>24/7 customer support for refund-related queries</li>
          <li><i className="bi bi-check-circle-fill text-success me-2"></i>Refunds processed directly to your payment source</li>
          <li><i className="bi bi-check-circle-fill text-success me-2"></i>Trusted by thousands of satisfied users</li>
        </ul>
      </div>

    </div>
  );
};

export default RefundPolicyPage;