"use client";
import React, { useState } from "react";
import { ethers } from "ethers";
import Balance from "./Balance";

const WalletButton = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {

        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        
        // Get the connected wallet address
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        console.log("Wallet connected");
        
      } catch (error) {
        console.error("Connection error:", error);
      }
    } else {
      console.log("MetaMask is not installed!");
      alert("Please install MetaMask to connect your wallet!");
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    console.log("Wallet disconnected");
    
  };

  return (
    <div className="absolute top-6 right-12 bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500"
      style={{ 
        textAlign: "center",
        fontSize: "16px",
        display: "flex"
     }}>
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
    </div>
  );
};

export default WalletButton;
