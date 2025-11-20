import React, { useState } from "react";

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
    <div>
      <h2>Payment Now!</h2>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setamount(e.target.value)}
      />{" "}
      <br /> <br />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
};

export default Checkout;
