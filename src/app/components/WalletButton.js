"use client";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Balance from "./Balance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WalletButton = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (typeof window.ethereum !== "undefined") {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const accounts = await provider.send("eth_accounts", []);
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
          }
        } catch (error) {
          console.error("Error checking wallet connection:", error);
        }
      }
    };
    checkWalletConnection();
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setWalletAddress(accounts[0]);
        toast.success("Wallet connected");
      } catch (error) {
        console.error("Connection error:", error);
        if (error.code === 4001) {
          toast.error("Connection rejected by user.");
        } else {
          toast.error("Connection failed. Please try again.");
        }
      }
    } else {
      toast.error("MetaMask not detected. Please install it.");
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    toast.info("Wallet Disconnected");
  };

  return (
    <div
      className="absolute top-6 right-12 bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500 flex items-center"
    >
      {walletAddress && <Balance address={walletAddress} />}
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
