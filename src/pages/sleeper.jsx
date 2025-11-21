import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../component/Footer/Footer";

import { Link } from "react-router-dom";

const lowerRows = ["L1", "L2", "L3", "L4"]; 
const upperRows = ["U1", "U2", "U3", "U4"]; 
const seatsPerRow = 4;

const bookedSeats = ["L1-2", "L3-1", "U2-3", "U4-4"]; 

const Sleeper = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seatPrice = 877;

  const handleSeatClick = (seatId) => {
    if (bookedSeats.includes(seatId)) return;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const getSeatClass = (seatId) => {
    if (bookedSeats.includes(seatId)) return "seat booked";
    if (selectedSeats.includes(seatId)) return "seat selected";
    return "seat available";
  };

  const sleeperBoxStyle = {
    width: "80px",
    height: "40px",
    border: "2px solid #6A1B9A",
    borderRadius: "8px",
    margin: "6px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
  };

  return (
    <>
      <div className="container-fluid p-4 fade-in">
        <div className="row">
      
          <div className="col-md-7 p-3 border-end">
            <h5 className="fw-bold mb-3">
              Click on available sleeper berths to reserve your seat
            </h5>

            <h6 className="fw-bold text-primary mb-2">Lower Berth</h6>
            {lowerRows.map((row) => (
              <div className="d-flex mb-3" key={row}>
                {[...Array(seatsPerRow)].map((_, i) => {
                  const seatId = `${row}-${i + 1}`;

                  return (
                    <div
                      key={seatId}
                      onClick={() => handleSeatClick(seatId)}
                      className={`mx-1 text-center ${getSeatClass(seatId)}`}
                      style={sleeperBoxStyle}
                    >
                      {seatId}
                    </div>
                  );
                })}
              </div>
            ))}

            <hr />

            <h6 className="fw-bold text-primary mb-2">Upper Berth</h6>
            {upperRows.map((row) => (
              <div className="d-flex mb-3" key={row}>
                {[...Array(seatsPerRow)].map((_, i) => {
                  const seatId = `${row}-${i + 1}`;

                  return (
                    <div
                      key={seatId}
                      onClick={() => handleSeatClick(seatId)}
                      className={`mx-1 text-center ${getSeatClass(seatId)}`}
                      style={sleeperBoxStyle}
                    >
                      {seatId}
                    </div>
                  );
                })}
              </div>
            ))}

            <div className="mt-4 d-flex gap-4">
              <div>
                <span className="legend available"></span> Available
              </div>
              <div>
                <span className="legend booked"></span> Booked
              </div>
              <div>
                <span className="legend selected"></span> Selected
              </div>
            </div>
          </div>

       
          <div className="col-md-5 p-4">
            <h5 className="fw-bold">Your Destination</h5>

            <div className="d-flex justify-content-between">
              <p>
                From: <b>Coimbatore</b>
              </p>
              <p>
                To: <b>Chennai</b>
              </p>
            </div>

            <hr />

            <h6 className="fw-bold">Selected Seats</h6>
            <div className="border p-2" style={{ minHeight: "50px" }}>
              {selectedSeats.length === 0
                ? "No seats selected"
                : selectedSeats.join(", ")}
            </div>

            <hr />

            <h6 className="fw-bold">Fare Details</h6>
            <div className="d-flex justify-content-between">
              <p>Basic Fare:</p>
              <p>₹ {seatPrice}</p>
            </div>

            <div className="d-flex justify-content-between">
              <p>Total Price:</p>
              <p className="fw-bold">₹ {selectedSeats.length * seatPrice}</p>
            </div>

            <button
              className="btn btn-danger w-100 mt-3"
              disabled={selectedSeats.length === 0}
            >
              <Link to={"/lastpay"} style={{ textDecoration: "none", color: "white" }}>
                PROCEED TO CHECKOUT
              </Link>
            </button>

            {selectedSeats.length === 0 && (
              <p className="text-danger mt-2">
                Please select at least one berth to proceed.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sleeper;
