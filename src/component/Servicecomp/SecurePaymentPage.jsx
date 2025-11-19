import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap-icons/font/bootstrap-icons.css";

const SecurePaymentPage = () => {
  return (
    <div>

     
      <div className=" text-white text-center py-5"style={{backgroundColor:"#6A1B9A"}}>
        <h1 className="fw-bold">
          <i className="bi bi-lock-fill me-2"></i> Secure Payment
        </h1>
        <p className="mt-2">
          Our secure payment system ensures all transactions are encrypted, safe,
          and seamless for our customers.
        </p>
      </div>

      
      <div className="container my-5"style={{color:"#B027F5"}}>
        <h3 className="fw-bold mb-4">
          <i className="bi bi-shield-lock-fill  me-2" ></i>
          Key Security Features
        </h3>

        <div className="row g-4">
          
          <div className="col-md-4">
            <div className="p-3 shadow rounded bg-white h-100">
              <h5><i className="bi bi-lock-fill text-success me-2"></i>End-to-End Encryption</h5>
              <p>All transactions are encrypted to prevent unauthorized access and fraud.</p>
            </div>
          </div>

          
          <div className="col-md-4">
            <div className="p-3 shadow rounded bg-white h-100">
              <h5><i className="bi bi-credit-card-fill text-warning me-2"></i>Multiple Payment Options</h5>
              <p>Supports credit cards, wallets, UPI, and more flexible payments.</p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="col-md-4">
            <div className="p-3 shadow rounded bg-white h-100">
              <h5><i className="bi bi-shield-shaded text-primary me-2"></i>3D Secure Authentication</h5>
              <p>Extra security layer to verify payments through OTP and biometrics.</p>
            </div>
          </div>

         
          <div className="col-md-4">
            <div className="p-3 shadow rounded bg-white h-100">
              <h5><i className="bi bi-arrow-repeat text-info me-2"></i>Transparent Refund Policies</h5>
              <p>Clear refund rules with fast processing for customer satisfaction.</p>
            </div>
          </div>

          
          <div className="col-md-4">
            <div className="p-3 shadow rounded bg-white h-100">
              <h5><i className="bi bi-geo-alt-fill text-danger me-2"></i>Real-time Fraud Detection</h5>
              <p>Advanced AI-powered fraud detection system for instant alerts.</p>
            </div>
          </div>

          
          <div className="col-md-4">
            <div className="p-3 shadow rounded bg-white h-100">
              <h5><i className="bi bi-bell-fill text-success me-2"></i>Instant Payment Confirmation</h5>
              <p>Receive confirmation messages immediately after payment completion.</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-light py-5"style={{color:"#B027F5"}}>
        <div className="container">
          <h3 className="fw-bold mb-4 text-center">
            <i className="bi bi-tools me-2"></i>
            How Our Payment System Works
          </h3>

          <div className="row g-4 justify-content-center">
            <div className="col-md-3">
              <div className="p-3 shadow rounded bg-white h-100 text-center">
                <h4> Choose Payment Method</h4>
                <p>Select your preferred payment method from available options.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3 shadow rounded bg-white h-100 text-center">
                <h4>Enter Secure Details</h4>
                <p>Input your payment details, which are encrypted for security.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3 shadow rounded bg-white h-100 text-center">
                <h4> Receive Instant Confirmation</h4>
                <p>You will receive a confirmation message and receipt instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="container my-5"style={{color:"#B027F5"}}>
        <h3 className="fw-bold mb-3">
          <i className="bi bi-stars text-warning me-2"></i>
          Why Choose Our Secure Payment System?
        </h3>

        <ul className="list-unstyled fs-5">
          <li><i className="bi bi-check-circle-fill text-success me-2"></i>Zero hidden fees & transparent pricing</li>
          <li><i className="bi bi-check-circle-fill text-success me-2"></i>24/7 customer support</li>
          <li><i className="bi bi-check-circle-fill text-success me-2"></i>Instant refunds on eligible transactions</li>
          <li><i className="bi bi-check-circle-fill text-success me-2"></i>Trusted by thousands of satisfied customers</li>
          <li><i className="bi bi-check-circle-fill text-success me-2"></i>PCI-DSS compliant for advanced security</li>
        </ul>
      </div>

    </div>
  );
};

export default SecurePaymentPage;