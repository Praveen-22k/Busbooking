import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CustomerSupport() {
  return (
    <div>

     
      <div className=" text-white text-center py-5"style={{backgroundColor:"#6A1B9A"}}>
        <h1 className="fw-bold">
          <i className="bi bi-telephone-inbound me-2"></i> 24/7 Customer Support
        </h1>
        <p className="mt-2">
          Our dedicated support team is available around the clock to assist you
          with any queries or concerns.
        </p>
      </div>

     
      <div className="container my-5"style={{color:"#B027F5"}}>
        <h3 className="fw-bold mb-4">
          <i className="bi bi-headset me-2"></i> How to Reach Us
        </h3>

        <div className="row g-4">
          
          <div className="col-md-6 col-lg-3">
            <div className="p-4 shadow-sm bg-white rounded h-100">
              <h5 className="fw-bold mb-2 ">
                <i className="bi bi-telephone me-2"></i> Phone Support
              </h5>
              <p>
                Call us anytime at <b>+1 800 123 456</b> for immediate
                assistance.
              </p>
            </div>
          </div>

          
          <div className="col-md-6 col-lg-3">
            <div className="p-4 shadow-sm bg-white rounded h-100">
              <h5 className="fw-bold mb-2 ">
                <i className="bi bi-chat-dots me-2"></i> Live Chat
              </h5>
              <p>
                Chat with our agents instantly using the live chat feature on our website.
              </p>
            </div>
          </div>

          
          <div className="col-md-6 col-lg-3">
            <div className="p-4 shadow-sm bg-white rounded h-100">
              <h5 className="fw-bold mb-2 ">
                <i className="bi bi-envelope me-2"></i> Email Support
              </h5>
              <p>
                Send us an email at <b>support@example.com</b> and receive a
                response within 24 hours.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="p-4 shadow-sm bg-white rounded h-100">
              <h5 className="fw-bold mb-2 ">
                <i className="bi bi-journal-text me-2"></i> Help Center
              </h5>
              <p>
                Visit our <b>Help Center</b> for FAQs, troubleshooting guides,
                and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="text-center bg-light py-5"style={{color:"#B027F5"}}>
        <h3 className="fw-bold  mb-4">
          🌟 Why Choose Our Support?
        </h3>

        <div className="container">
          <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: "700px" }}>
            <li className="mb-2">✔️ <b>24/7 availability</b> – Assistance whenever you need it.</li>
            <li className="mb-2">✔️ <b>Multi-language support</b> – Help in multiple languages.</li>
            <li className="mb-2">✔️ <b>Fast response times</b> – Most queries resolved within minutes.</li>
            <li className="mb-2">✔️ <b>Friendly & professional team</b> – Experts ready to help.</li>
            <li className="mb-2">✔️ <b>Multiple communication channels</b> – Choose what works best.</li>
          </ul>
        </div>
      </div>

    </div>
  );
}   