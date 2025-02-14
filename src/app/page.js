// Home Page
import React from 'react';
import Link from 'next/link';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from './(pages)/api';

const HomePage = (
  bookRoom = async (formData) => {
    const { fullName, roomNumber, dayNumber, amount } = formData;
    
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
        fullName,
        roomNumber,
        dayNumber,
        {value: ethers.parseEther(amount)}
      );

      await transaction.wait(); // Wait for the transaction to be mined
      console.log("Room successfully booked!");
      alert("Room successfully booked! Hash: ", transaction.hash);
    } catch (error) {
      console.log("Error booking room:", error.message);
      alert(`Error: ${error.message}`);
    }  
  }

) => (
  <div className='relative w-full h-screen bg-cover' style={{ backgroundImage: "url('/rover.png')" }} >
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>

    <Header />  

    <div className="absolute left-20 top-1/3">
        <div className="text-white text-5xl font-bold leading-snug">
            Taking you <br /> to the best <br /> <span className="italic">places</span>
        </div>
        
          <Link href="/">
            <button className='mt-6 bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500'>
              Check Room Status
            </button>
          </Link>
        
    </div>  

    <div className="absolute right-20 top-1/4 bg-green-900 p-8 rounded-xl shadow-lg w-1/2 text-white">
      <BookingForm onBookRoom={bookRoom} />
    </div>
    
  </div>
);

export default HomePage;
