"use client"; // This component will be rendered on the client side
import React, { useState } from "react";

const BookingForm = ({ onBookRoom }) => { // Ensure the prop name matches
  const [formData, setFormData] = useState({
    roomNumber: "",
    // amount: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onBookRoom === "function") { // Check if onBookRoom is a function
      onBookRoom(formData); // Call the function passed as a prop
    } else {
      console.error("onBookRoom is not a function");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="roomNumber"
        placeholder="Room Number"
        value={formData.roomNumber}
        onChange={handleChange}
        required
      />
      {/* <input
        type="text"
        name="amount"
        placeholder="Amount to Pay (ETH)"
        value={formData.amount}
        onChange={handleChange}
        required
      /> */}
      <button type="submit">Book Room</button>
    </form>
  );
};

export default BookingForm;