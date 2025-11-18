import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
export default function Footer() {
  const purple1 = '#a322e3ff'; 
  const purple2 = '#7b2cbf'; 

  return (
    <footer
      className="text-white pt-5 pb-3"
      style={{
        background: `linear-gradient(90deg, ${purple1}, ${purple2})`,
      }}
      aria-label="Site footer"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">TicketEasy</h5>
            <p className="small">
              Fast, reliable bus bookings across the country. Live availability,
              cancellations, and instant e-tickets.
            </p>
            <div className="d-flex gap-2 mt-2" aria-hidden="false">
              <a href="#" className="text-white" aria-label="Facebook">
               <FaFacebookSquare  size={40}/>
              </a>

              <a href="#" className="text-white" aria-label="Twitter">
                <BsTwitterX size={40}/>

              </a>

              <a href="#" className="text-white" aria-label="Instagram">
                <RiInstagramFill size={40}/>
              </a>
            </div>
          </div>

          <div className="col-md-2 mb-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white text-decoration-none">Search Buses</a></li>
              <li><a href="#" className="text-white text-decoration-none">My Bookings</a></li>
              <li><a href="#" className="text-white text-decoration-none">Offers</a></li>
              <li><a href="#" className="text-white text-decoration-none">Help Center</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6>Contact</h6>
            <p className="small mb-1">Email: support@busnxt.example</p>
            <p className="small mb-1">Phone: : 082700 99991</p>
            <p className="small">WHY TAP, 79, Lohmanradhri Towers, 77 &, Pantheon Rd, Egmore, Chennai, Tamil Nadu 600008</p>
          </div>

          <div className="col-md-3 mb-4">
            <h6>Newsletter</h6>
            <p className="small">Get bus deals & travel alerts.</p>
            <p className="small">Happy Journuy</p>
            <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="form-control me-2" placeholder="Email" aria-label="Email" />
              <button className="btn btn-light" type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="border-top border-white-25 pt-3 mt-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <small>© {new Date().getFullYear()} TicketEasy — All rights reserved.</small>
         
        </div>
      </div>
    </footer>
  );
}