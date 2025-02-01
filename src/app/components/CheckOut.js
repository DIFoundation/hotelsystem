"use client";
import React, { useState } from "react";

const CheckingOut = ({ onCheckingOut }) => { // Ensure the prop name matches
  const [formData, setFormData] = useState({
    roomNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onCheckingOut === "function") {
      onCheckingOut(formData); // Call the function passed as a prop
    } else {
      console.error("Unable to check out");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="roomNumber"
        placeholder="Enter Room Number you Occupied to check out"
        value={formData.roomNumber}
        onChange={handleChange}
        required
      />
      <button type="submit">Check Out</button>
    </form>
  );
};

export default CheckingOut;