import React from "react";
import { Ba1 } from "../../assets/assests";
import { Ba2 } from "../../assets/assests";
import { Ba3 } from "../../assets/assests";
import "../Banner/Banner.css";
const Banner = () => {
  return (
    <div className="position-relative">
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Ba1} class="d-block w-100 " alt="..."/>
       <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
        <h2 class="fw-bold text-white">Fast & Easy Bus Booking</h2>
        <p class="text-white">Your journey begins with comfort</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Ba2} class="d-block w-100 " alt="..."/>
      <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
        <h2 class="fw-bold text-white">Travel Anywhere</h2>
        <p class="text-white">Book buses to all major destinations</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Ba3} class="d-block w-100 " alt="..."/>
      <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
        <h2 class="fw-bold text-white">Safe & Secure</h2>
        <p class="text-white">Reliable service every time</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      <div className="container fromtodet p-4 rounded position-absolute top-100 start-50 translate-middle">
        <div class="input-group">
          <span class="input-group-text fw-bold" style={{color:'#B027F5'}}>Ticket Easy Journey date</span>
          <input
            type="text"
            aria-label="First name"
            placeholder="From"
            class="form-control"
         
          />
          <input
            type="text"
            aria-label="Last name"
            placeholder="To"
            class="form-control"
            
          />
          <input
            type="date"
            aria-label="Last name"
            placeholder="Date"
            class="form-control"
            
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
