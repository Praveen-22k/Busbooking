import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Help from "./pages/Help";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Payment from "./pages/Razorpay";
import Lastpay from "./pages/Razorpay";
import Showticket from "./pages/Showticket";
import CancelTicket from "./pages/Cancelticket";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Seat from "./pages/Seat/Seat";
import Sleeper from "./pages/sleeper";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/help" element={<Help />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/user" element={<Signin />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/seat" element={<Seat />}></Route>
          <Route path="/sleeper" element={<Sleeper />}></Route>
          <Route path="/payment" element={<Checkout />}></Route>
          <Route path="/lastpay" element={<Lastpay />}></Route>
          <Route path="/showticket" element={<Showticket />}></Route>
          <Route path="/cancelticket" element={<CancelTicket />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
