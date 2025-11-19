import React from 'react';
import { FaSearchLocation } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosPricetag } from "react-icons/io";

const Homecard= () => {
  return (
    <div className="container-fluid d-flex justify-content-center p-5 mt-5">

      
      <div className="row w-100 justify-content-center">
        <div 
          className="card p-4 col-12 col-md-11 col-lg-10" 
          style={{ maxWidth: "1200px", border: "none" }}
        >

          <h2 className="text-center mb-4 fw-bold" style={{ color: "#6A1B9A" }}>
            Why Choose TicketEASY?
          </h2>

         
          <div className="row text-center fs-1">

            <div className="col-12 col-md-4 mb-4">
              <FaSearchLocation style={{ color: "#B027F5" }} />
              <p className="mt-2 fw-semibold" style={{ color: "#6A1B9A" }}>
                Easy Search
              </p>
            </div>

            <div className="col-12 col-md-4 mb-4">
              <IoLocationOutline style={{ color: "#B027F5" }} />
              <p className="mt-2 fw-semibold" style={{ color: "#6A1B9A" }}>
                Track Locations
              </p>
            </div>

            <div className="col-12 col-md-4 mb-4">
              <IoIosPricetag style={{ color: "#B027F5" }} />
              <p className="mt-2 fw-semibold" style={{ color: "#6A1B9A" }}>
                Best Prices
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Homecard;