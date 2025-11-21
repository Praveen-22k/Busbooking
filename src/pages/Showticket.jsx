import React from 'react';

const Showticket = () => {
  return (
    <div className="container my-4 p-0 border rounded overflow-hidden">

      
      <div   style={{backgroundColor:" #6A1B9A"}} className="row  text-white m-0 p-3">
        <div className="col-8">
          <h5 className="m-0 fw-bold">MRM Travels</h5>
        </div>
        <div className="col-4 text-end fw-bold">
          (Bus No.) Ba. 2 Kha 9704
        </div>
      </div>

    
      <div className="row p-3 g-3">

        
        <div className="col-md-8 col-12">
          <p><strong>Bill No.:</strong> 465</p>
          <p><strong>Price:</strong> INR 1600 / seat</p>
          <p><strong>Date:</strong> 2025-11-22</p>

          <p><strong>Name of Passenger:</strong> Praveen</p>
          <p><strong>Total Seat No.:</strong> A2, A3, A4, B6</p>
          <p><strong>Total No. of Passenger:</strong> 04 Only</p>
          <p><strong>Pickup Station:</strong> Chennai</p>

          <hr />

          <div>
            <h6 className="fw-bold">Madurai,Bus stand</h6>
            <div className="d-flex justify-content-between mt-2">
              <span><strong>Arrive:</strong> 05:45 PM</span>
              <span><strong>Departure:</strong> 06:15 PM</span>
            </div>
          </div>
        </div>

    
        <div className="col-md-4 col-12">
          <div className="p-3 border rounded bg-light">
            <p><strong>Bill No.:</strong> 465</p>
            <p><strong>Date:</strong>2025-11-22</p>
            <p><strong>Name:</strong>  Praveen</p>
            <p><strong>From:</strong>Chennai</p>
            <p><strong>To:</strong> Madurai,Bus stand</p>
            <p><strong>Dept. Time:</strong> 06:15 PM</p>
            <p><strong>Seat No.:</strong> A2, A3, A4, B6</p>
            <p><strong>Total Passenger:</strong> 04 Only</p>
            <p><strong>Total Price:</strong> INR 6400</p>
          </div>
        </div>

      </div>

      
      <div style={{backgroundColor:" #6A1B9A"}} className="row m-0  text-white p-2 text-center small">
        Note: 40% charge for cancellation before 24 hours of the program.
      </div>
    </div>
  );
};

export default Showticket;