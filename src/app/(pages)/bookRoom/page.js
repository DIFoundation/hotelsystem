"use client"
import React from 'react';
import Header from '@/app/components/Header';
import BookingForm from '@/app/components/BookingForm';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../api';
import Link from 'next/link';

const Page = () => {

  const bookRoom = async (formData) => {
    const { roomNumber, amount } = formData;
    
    try {
      // Check if MetaMask is installed
      if (!window.ethereum) {
        throw new Error("MetaMask is not installed. Please install MetaMask to proceed.");
      }

      // Create a provider and signer
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner(); // Await the signer

      // Create a contract instance
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      console.log("Submitting transaction to book room...");

      // Call the `bookRoom` function on the smart contract
      const transaction = await contract.checkIn(
        roomNumber, // Room number
        // { value: ethers.parseEther(amount) } // Payment amount in ETH
        
      );

      console.log("Transaction sent:", transaction.hash);
      await transaction.wait(); // Wait for the transaction to be mined
      console.log("Room successfully booked!");
      alert("Room successfully booked!");
    } catch (error) {
      console.log("Error booking room:", error.message);
      alert(`Error: ${error.message}`);
    }

    // Log the booking data
    console.log("Booking room with data:", { roomNumber });    
  };

  return (
    <div>
      <Header />

      <h1>Book a Room</h1>
      <BookingForm onBookRoom={bookRoom} />

      <h2>
      <Link href="/checkRoomStatus">
        <button>Check Room Status</button>
      </Link>

      <Link href="/checkOut">
        <button>Check Out</button>
      </Link>
      </h2>
    </div>
  );
};

export default Page;