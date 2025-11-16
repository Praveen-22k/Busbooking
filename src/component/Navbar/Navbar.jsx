import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import '../Navbar/Navbar.css'
const Navbar = () => {
  return (
    <div className=''><nav class="navbar navbar-expand-lg custom-nav">
  <div class="container-fluid nav  ">
    <a class="navbar-brand"  style={{ color: "#FFF7F7" }} href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavDropdown">
      <ul class="navbar-nav w-100 d-flex justify-content-end ">
        <li class="nav-item navtext">
          <a class="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Bookings</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">MyBookings</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Conact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><FaRegUserCircle size={25}/></a>
        </li>
      </ul>
    </div>
  </div>
</nav></div>
  )
}

export default Navbar