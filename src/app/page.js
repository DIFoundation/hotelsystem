"use client";
import React from "react";
import Link from "next/link";
import Header from "./components/Header";
import BookingForm from "./components/BookingForm";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "./(pages)/api";

const HomePage = () => {
  async function bookRoom(formData) {
    const { fullName, roomNumber, dayNumber, amount } = formData;

    try {
      // Check if MetaMask is installed
      if (!window.ethereum) {
        throw new Error(
          "MetaMask is not installed. Please install MetaMask to proceed."
        );
      }

      // Create a provider and signer
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner(); // Await the signer

      // Create a contract instance
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );
      console.log("Submitting transaction to book room...");

      // Call the `bookRoom` function on the smart contract
      const transaction = await contract.checkIn(
        fullName,
        roomNumber,
        dayNumber,
        { value: ethers.parseEther(amount) }
      );

      await transaction.wait(); // Wait for the transaction to be mined
      console.log("Room successfully booked!");
      alert("Room successfully booked! Hash: ", transaction.hash);
    } catch (error) {
      console.log("Error booking room:", error.message);
      alert(`Error: ${error.message}`);
    }
  }

  return (
    <div className="relative w-full h-screen bg-cover overflow-auto">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/waterfall.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <Header/>

      <div className="absolute top-1/4 left-5 right-5 md:top-24 lg:top-1/4 flex flex-col-reverse md:flex-row justify-between items-center ">
        <div className="flex flex-row md:flex-col max-md:items-center max-md:space-x-10">
          <div className="text-white text-xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Find comfort <br /> like your <br /><span className="italic text-yellow-500">home</span>
          </div>

          <Link href="/">
            <button className="mt-1 md:mt-6 bg-yellow-500 text-black text-sm font-semibold md:font-bold px-4 md:px-6 py-2 md:py-3 rounded-lg border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500">
              Check Out
            </button>
          </Link>
        </div>

        <div className=" bg-green-900 max-sm:py-2 md:p-8 rounded-md md:rounded-xl shadow-lg md:w-1/2 text-white">
          <BookingForm onBookRoom={bookRoom} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
