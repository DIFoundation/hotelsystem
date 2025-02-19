"use client";
import React, { useState } from "react";
import { ethers } from "ethers";
import Balance from "./Balance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WalletButton = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);

        toast.info("Connecting wallet. Please wait...");

        // Get the connected wallet address
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);

        toast.success("Wallet connected");

        console.log("Wallet connected");
      } catch (error) {
        console.error("Connection error:", error);
        if (error.code === 4001) {
          toast.error("Connection rejected by user.");
        } else {
          toast.error("Connection failed. Please try again.");
        }
      }
    }; 
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    toast.info('Wallet Disconected');
  };

  return (
    <div
      className="absolute top-6 right-12 bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500"
      style={{
        textAlign: "center",
        fontSize: "16px",
        display: "flex",
      }}
    >
      <Balance />
      <button
        onClick={walletAddress ? disconnectWallet : connectWallet}
        style={{
          backgroundColor: "inherit",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      >
        {walletAddress
          ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
          : "Connect Wallet"}
      </button>
      <ToastContainer />
    </div>
  );
};

export default WalletButton;
