import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../component/Footer/Footer";
import './Seat.css'
import {Link, useLocation} from 'react-router-dom'
import Seatbus from "./Seatbus";
import Sleeper from "../sleeper";
const rows = ["A", "B", "C", "D"];
const seatsPerRow = 9;
const bookedSeats = ["A3", "A7", "B5", "C1", "D8"];

const Seat = () => {
    const { state:{busId,busType} } = useLocation();
    console.log(busType)
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seatPrice = 877;



  return (
    <>
    <div className="container-fluid p-4 fade-in">
      <div className="row">
        {
          busType === "A/C Sleeper" || busType === 'NON-A/C Sleeper' ?  <Sleeper busId={busId}/> : <Seatbus busId={busId}/>
        }
        {/* <div className="col-md-7 p-3 border-end">
          <h5 className="fw-bold mb-3">
            Click on available seats to reserve your seat
          </h5>

          {rows.map((row) => (
            <div className="d-flex mb-3" key={row}>
              {[...Array(seatsPerRow)].map((_, i) => {
                const seatId = `${row}${i + 1}`;

                return (
                  <div
                    key={seatId}
                    onClick={() => handleSeatClick(seatId)}
                    className={`seat-box mx-1 p-2 rounded text-center ${getSeatClass(
                      seatId
                    )}`}
                    style={{ width: "45px", cursor: "pointer" }}
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
        </div> */}

        
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
            onClick={() =>
              alert(`Proceeding with seats: ${selectedSeats.join(", ")}`)
            }
          >
          <Link to={'/lastpay'} style={{ textDecoration: "none", color: "white" }}> PROCEED TO CHECKOUT</Link> 
          </button>

          {selectedSeats.length === 0 && (
            <p className="text-danger mt-2">
              Please select at least one seat to proceed.
            </p>
          )}
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Seat;
