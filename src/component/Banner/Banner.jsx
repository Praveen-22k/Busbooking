import React, { useState } from "react";
import { Ba1 } from "../../assets/assests";
import { Ba2 } from "../../assets/assests";
import { Ba3 } from "../../assets/assests";
import { Ba4 } from "../../assets/assests";
import "../Banner/Banner.css";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import axios from "axios";

const data = {
  fromdata: "",
  todata: "",
  dateData: "",
};

const Banner = () => {
  const [color, setColor] = useState('#6A1B9A');
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];
  const [searchdata, setsearchdata] = useState(data);
  const [suggestion, setsuggestion] = useState([]);
  const [activeField, setActiveField] = useState("fromdata");


  const handlechage = async (event) => {
    const { name, value } = event.target;
    setActiveField(name);
    const capitalizeFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
    setsearchdata((prevdata) => ({
      ...prevdata,
      [name]: name === "fromdata" || name === "todata" ? capitalizeFirstLetter(value) : value,
    }));
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    try {
      const { fromdata, todata, dateData } = searchdata;
      if (!fromdata || !todata || !dateData) {
        toast.info("Please enter all values");
        return;
      };
      const final = await axios.get(
        `http://localhost:3105/user/search/?source=${fromdata}&destination=${todata}&date=${dateData}`,
        { headers: { "Content-Type": "application/json" } }
      );
      if (!final?.data) {
        toast.error("Oops, Server Error");
        return;
      };
      if (final.data.message) {
        toast.error(final.data.message);
        return;
      };
      navigate("/search", { state: final.data });
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error)
    };
  };

  return (
    <div class="position-relative">
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Ba2} class="d-block w-100 " alt="..." />
            <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
              <h2 class="fw-bold text-white">Fast & Easy Bus Booking</h2>
              <p class="text-white">Your journey begins with comfort</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Ba4} class="d-block w-100 " alt="..." />
            <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
              <h2 class="fw-bold text-white">Travel Anywhere</h2>
              <p class="text-white">Book buses to all major destinations</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Ba3} class="d-block w-100 " alt="..." />
            <div class="carousel-caption d-flex flex-column justify-content-center align-items-center">
              <h2 class="fw-bold text-white">Safe & Secure</h2>
              <p class="text-white">Reliable service every time</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class=" container fromtodet p-4 rounded position-absolute top-100 start-50 translate-middle position-relative">
        <div class="input-group">
          <span class="input-group-text fw-bold" style={{ color: "#B027F5" }}>
            Ticket Easy Journey date
          </span>
          <input
            type="text"
            placeholder="From..."
            aria-label="First name"
            name="fromdata"
            value={searchdata.fromdata}
            onChange={handlechage}
            autoComplete="off"
            class="form-control"
          />
          <input
            type="text"
            aria-label="Last name"
            placeholder="To"
            class="form-control"
            name="todata"
            value={searchdata.todata}
            onChange={handlechage}
            autoComplete="off"
          />
          <input
            type="date"
            aria-label="Last name"
            placeholder="Date"
            class="form-control"
              name="dateData"
              value={searchdata.dateData}
              onChange={handlechage}
              min={today}
          />
        </div>
        <div class="position-absolute top-100 start-50 translate-middle banbut">
          <button onClick={handlesubmit}>
           
              {" "}
              <span

                style={{ color }}
                onMouseEnter={() => setColor("#ffffff")}
                onMouseLeave={() => setColor("#6A1B9A")}

              >
                Search Bus
              </span>
   
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
