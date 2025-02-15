"use client"; // This component will be rendered on the client side
import React, { useState, useEffect } from "react";
import { fetchAvailableRooms } from "./FetchRoom";

const BookingForm = ({ onBookRoom }) => {
  // Ensure the prop name matches
  const [formData, setFormData] = useState({
    fullName: "",
    roomNumber: "",
    dayNumber: "",
    amount: "0.0001",
  });
  const [availableRooms, setAvailableRooms] = useState([]);

  useEffect(() => {
    async function getRooms() {
      const rooms = await fetchAvailableRooms();
      setAvailableRooms(rooms);
    }
    getRooms();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onBookRoom === "function") {
      // Check if onBookRoom is a function
      onBookRoom(formData); // Call the function passed as a prop
    } else {
      console.error("onBookRoom is not a function");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className=" ">
        <input
          type="name"
          name="fullName"
          placeholder="Enter Fullname"
          className="w-full p-2 max-sm:text-sm md:p-3 mb-2 bg-gray-200 text-black rounded-lg focus:outline-none"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <div className="flex flex-col md:flex-row md:space-x-4 max-md:space-y-4 mb-2 -mx-4">
          <select
            name="roomNumber"
            className="md:w-1/2 p-2 max-sm:text-sm bg-gray-200 text-black rounded-lg focus:outline-none"
            value={formData.roomNumber}
            onChange={handleChange}
            required
          >
            <option value="">Check for Available Rooms</option>
            {availableRooms.length > 0 ? (
              availableRooms.map((room) => (
                <option key={room} value={room}>
                  {room}
                </option>
              ))
            ) : (
              <option disabled>No available rooms</option>
            )}
          </select>
          <select
            name="roomNumber"
            className="md:w-1/2 p-2 max-sm:text-sm bg-gray-200 text-black rounded-lg focus:outline-none"
            value={formData.dayNumber}
            onChange={handleChange}
            required
          >
            <option value="">Number of Days to Spend</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>

        <input
          type="text"
          name="amount"
          placeholder="Amount to Pay (ETH)"
          className="w-full p-2 max-sm:text-sm  bg-gray-200 text-black rounded-lg focus:outline-none"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="mt-6 w-full bg-yellow-500 text-black font-bold  py-3 rounded-lg border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500"
        >
          Book Room
        </button>
      </form>
      <div className="flex justify-center mt-2 space-x-2">
        <span className="w-2 h-2 bg-white rounded-full"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
      </div>
    </div>
  );
};

export default BookingForm;
