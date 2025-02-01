"use client"
import React from 'react';
import Header from '@/app/components/Header';
import CheckingOut from '@/app/components/CheckOut';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../api';
import Link from 'next/link';

const Page = () => {

  const checkingOut = async (formData) => {
    const { roomNumber } = formData;

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
      console.log("Checking out of room...");

      // Call the `bookRoom` function on the smart contract
      const transaction = await contract.checkOut ( roomNumber );
      
      alert(`You checked out from Room Number ${roomNumber} that you're occupied`);
      
      console.log("Room status: ", transaction);
    } catch (error) {
      console.log("Error checking out:", error.message);
      alert(`Error: ${error.message}`);
    }    
  };



  return (
    <div>
      <Header />

      <h1>Check-out from the Room you Occupied</h1>
      <CheckingOut onCheckingOut={checkingOut} />

      <h2>
      <Link href="/bookRoom">
        <button>Book Room</button>
      </Link>

      <Link href="/checkRoomStatus">
        <button>Check Room Status</button>
      </Link>
      </h2>
    </div>
  );
};

export default Page;