import React from 'react';
import { FaSearchLocation } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosPricetag } from "react-icons/io";

const Homecard= () => {
  return (
    <div className="bg-light py-5 "style={{color:"#B027F5", marginTop:'110px'}}>
        <div className="container">
          <h3 className="fw-bold mb-4 text-center">
            <i className="bi bi-tools me-2"></i>
            Why Choose TicketEasy?
          </h3>

          <div className="row g-4 justify-content-center">
            <div className="col-md-3">
              <div className="p-3 shadow rounded bg-white h-100 text-center ">
                <FaSearchLocation  size={50} style={{ color: "#B027F5",marginTop:'30px' }} />
                <p className="mt-2 fw-semibold" style={{ color: "#6A1B9A" }}>
                Easy Search
              </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3 shadow rounded bg-white h-100 text-center">
                <IoLocationOutline  size={50} style={{ color: "#B027F5",marginTop:'30px' }} />
                 <p className="mt-2 fw-semibold" style={{ color: "#6A1B9A" }}>
                Track Locations
              </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3 shadow rounded bg-white h-100 text-center">
                <IoIosPricetag  size={50} style={{ color: "#B027F5",marginTop:'30px' }} />
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