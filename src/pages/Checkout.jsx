import React, { useState } from "react";
import Footer from "../component/Footer/Footer";
const Checkout = () => {
  const [amount, setamount] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    if (amount == "") {
      alert("Please enter the amount");
    } else {
      var options = {
        key: "rzp_test_Rhu1C3W4vbIytW",
        key_secret: "4QRUMThRk6dwKzRmL9CsWVO3",
        amount: amount * 100,
        currency: "INR",
        name: "busbooking_project",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "praveen",
          email: "pk6789423@gmail.com",
          contact: "7550390247",
        },
        notes: { address: "razor corporate office" },
        theme: { color: "#B027F5" },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };
  return (
    <>
    <div className="container card p-5 my-5 border" style={{    width: "300px",
    color: "#6A1B9A",
    borderColor: "#6A1B9A",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // ⭐ shadow added
    borderRadius: "12px"}}>
    <div className='text-center '>
      <h2>Payment Now!</h2>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setamount(e.target.value)}
      />{" "}
      <br /> <br /><div className="" >
      <button onClick={handlesubmit} className="" style={{backgroundColor:'#6A1B9A', color:'#ffff'}}>Submit</button></div>
    </div>
      
    </div><Footer/>
</>
  );
};

export default Checkout;
