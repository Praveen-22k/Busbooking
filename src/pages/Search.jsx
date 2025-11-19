import React from "react";
import { RiSofaFill } from "react-icons/ri";
import { MdAir } from "react-icons/md";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { LiaArrowLeftSolid } from "react-icons/lia";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";


const Search = () => {
  return (
    <div className="container mt-3 border border-dark-subtle p-3 rounded "  style={{ boxShadow: "0 4px 15px rgba(176, 39, 245, 0.25)" }}>
      <div className="row text-center">
        <div className="col"><FaBus size={30} color="#6A1B9A" />MRM Travels</div>
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
            Non-Ac{" "}
          </div>
          <div
            className=" text-light rounded"
            style={{ backgroundColor: "#b18fc1ff", color: "#ffeb0eff" }}
          >
            <FaStar size={20} color= "#ffeb0eff" />
            4.5
          </div>
          <div
            className=" text-light rounded"
            style={{ backgroundColor: "#b18fc1ff", color: "#6A1B9A" }}
          >
            <MdAirlineSeatReclineExtra size={20} color="#6A1B9A" />
            37Seats
          </div>
        </div>
      </div>
      <div className="row pt-3 d-flex align-items-center text-center ">
        <div className="col ">
          21:32 <br />
          Coimbatore
        </div> 
        <div className="col  ">
            <MdOutlineKeyboardDoubleArrowLeft size={50} color="#6A1B9A"/>
          <FaBus size={30} color="#6A1B9A" />
          <MdOutlineKeyboardDoubleArrowRight size={50} color="#6A1B9A"/>
        </div>
        <div className="col">
          07:25 <br />
          Chennai
        </div>
      </div>
      <div className="row pt-3 d-flex align-items-center text-center ">
        <div className="col ">
        <span className="fw-bolder text-danger">RS.850</span>  /Per Seat
        </div> 
        <div className="col  ">
            <span className=' fw-bolder text-success'>550</span>/Total kms
        </div>
        <div className="col">
         <button className="btn text-light" style={{backgroundColor:'#B027F5'}}>Reserve Seat</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
