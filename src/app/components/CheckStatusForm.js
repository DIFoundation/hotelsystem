"use client";
import React, { useState } from "react";

const RoomStatus = ({ getRoomStatus }) => {
  const [formData, setFormData] = useState({
    roomNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof getRoomStatus === "function") {
      getRoomStatus(formData);
    } else {
      console.error("Room status is not a function");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="roomNumber"
        placeholder="Enter Room Number you want to check"
        value={formData.roomNumber}
        onChange={handleChange}
        required
      />
      <button type="submit">Check Status</button>
    </form>
  );
};

export default RoomStatus;