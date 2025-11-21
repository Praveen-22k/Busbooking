import React, { useState } from "react";
import { RiSofaFill } from "react-icons/ri";
import { MdAir } from "react-icons/md";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { LiaArrowLeftSolid } from "react-icons/lia";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom'
import Footer from "../component/Footer/Footer";
const Search = () => {
  const [color, setColor] = useState('#6A1B9A');
  const location = useLocation();
  const datasets = location.state;
  return (
    <>
      {
        datasets.map((value) => (
          <div className="container mt-3 border border-dark-subtle p-3 rounded " style={{ boxShadow: "0 4px 15px rgba(176, 39, 245, 0.25)" }} key={value._id}>
            <div className="row text-center">
              <div className="col"><FaBus size={30} color="#6A1B9A" />{value.final?.busname}</div>
              <div className="col d-flex gap-3">
                <div
                  className=" text-light rounded"
                  style={{ backgroundColor: "#b18fc1ff", color: "#6A1B9A" }}
                >
                  <RiSofaFill size={20} color="#6A1B9A" /> Sofa
                </div>
                <div
                  className="text-light rounded"
                  style={{ backgroundColor: "#b18fc1ff", color: "#6A1B9A" }}
                >
                  <MdAir size={20} color="#6A1B9A" />
                 {value.final?.bustype}
                </div>
                <div
                  className=" text-light rounded"
                  style={{ backgroundColor: "#b18fc1ff", color: "#ffeb0eff" }}
                >
                  <FaStar size={20} color="#ffeb0eff" />
                  4.5
                </div>
                <div
                  className=" text-light rounded"
                  style={{ backgroundColor: "#b18fc1ff", color: "#6A1B9A" }}
                >
                  <MdAirlineSeatReclineExtra size={20} color="#6A1B9A" />
                 {value.final?.totalseats}
                </div>
              </div>
            </div>
            <div className="row pt-3 d-flex align-items-center text-center ">
              <div className="col ">
               {value.final?.fromtime}<br />
               {value.source}
              </div>
              <div className="col  ">
                <MdOutlineKeyboardDoubleArrowLeft size={50} color="#6A1B9A" />
                <FaBus size={30} color="#6A1B9A" />
                <MdOutlineKeyboardDoubleArrowRight size={50} color="#6A1B9A" />
              </div>
              <div className="col">
               {value.final?.totime} <br />
                {value.destination}
              </div>
            </div>
            <div className="row pt-3 d-flex align-items-center text-center ">
              <div className="col ">
                <span className="fw-bolder text-danger">{value.final?.amount}</span>  /Per Seat
              </div>
              <div className="col  ">
                <span className=' fw-bolder text-success'>{value.totalkm}</span>/Total kms
              </div>
              <div className="col">
                <button className="btn text-light" ><Link to={'/seat'} state={{
                  busId:value.final?.busid,
                  busType:value.final?.bustype,
                }}> <span
                  className=""
                  style={{ color }}
                  onMouseEnter={() => setColor("#ffffff")}
                  onMouseLeave={() => setColor("#6A1B9A")}
                >
                  Reserve Seat
                </span></Link></button>
              </div>
            </div>
          </div>
        ))
      }


      <Footer />
    </>
  );
};

export default Search;
