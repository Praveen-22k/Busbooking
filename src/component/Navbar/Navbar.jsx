import React from "react";
import "../Navbar/Navbar.css";
import { BsBusFrontFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div >
      <nav
        class="navbar navbar-expand-lg custom-nav"
        style={{ backgroundColor: "#B027F5" }}
      >
        <div class="container nav  ">
          <Link
            to={"/"}
            class="navbar-brand fw-bolder fs-4 "
            style={{ color: "#FFF7F7", textDecoration: "underline" }}
            href="#"
          >
            <BsBusFrontFill size={30} />
            TicketEasy...
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavDropdown">
            <ul class="navbar-nav w-100 d-flex justify-content-end ">
              <li class="nav-item navtext">
                <Link to={"/"} class="nav-link " aria-current="page" href="#">
                  Home
                </Link>
              </li>
           

<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Bookings
          </a>
          <ul class="dropdown-menu " style={{backgroundColor:'#B027F5'}}>
            <li><Link to={"/showticket"} class="dropdown-item" href="#">ShowTickets</Link></li>
            <li><Link to={'/cancelticket'} class="dropdown-item" href="#"> CancelTickets</Link></li>
            <li><hr class="dropdown-divider"/></li>
           
          </ul>
        </li>

              <li class="nav-item">
                <Link to={"/service"} class="nav-link" href="#">
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/help"} class="nav-link" href="#">
                  Help
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/user"} class="nav-link" href="#">
                  <FaRegUserCircle size={25} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
