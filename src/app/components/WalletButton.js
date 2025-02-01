"use client";
import React, { useState } from "react";
import { ethers } from "ethers";

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
    <div style={{ textAlign: "center" }}>
      <button
        onClick={walletAddress ? disconnectWallet : connectWallet}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background-color 0.3s ease",
        }}
      >
        {walletAddress 
          ? `Disconnect: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` 
          : "Connect Wallet"}
      </button>
    </div>
  );
};

export default WalletButton;
