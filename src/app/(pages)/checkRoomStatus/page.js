"use client"
import React from 'react';
import { ethers } from 'ethers';
import RoomStatus from '@/app/components/CheckStatusForm'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../api';
import Link from 'next/link';

const Page = () => {

  const roomStatus = async (formData) => {
    const { roomNumber } = formData;

    try {
      if (!window.ethereum) {
        throw new Error("MetaMask is not installed. Please install MetaMask to proceed.");
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      console.log("Checking room status...");

      const transaction = await contract.getRoomStatus ( roomNumber );
      
      alert(`Room Number ${roomNumber} is ${transaction}`);
      
      console.log("Room status: ", transaction);
    } catch (error) {
      console.log("Error checking room:", error.message);
      alert(`Error: ${error.message}`);
    }    
  };

  return (
    <div>

      <h1>Check Room Status</h1>
      <RoomStatus getRoomStatus={roomStatus} />

      <h2>
      <Link href="/bookRoom">
        <button>Book Room</button>
      </Link>

      <Link href="/checkOut">
        <button>Check Out</button>
      </Link>
      </h2>
    </div>
  );
};

export default Page;