"use client";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

function WalletBalance() {
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        if (!window.ethereum) {
          setBalance(null);
          return;
        }

        const provider = new ethers.BrowserProvider(window.ethereum);

        // Detect if accounts are already connected
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        if (accounts.length === 0) {
          setBalance(null);
          return;
        }

        const address = accounts[0];
        const balanceWei = await provider.getBalance(address);
        setBalance(ethers.formatEther(balanceWei));
      } catch (err) {
        setError("Failed to fetch wallet balance: " + err.message);
      }
    };

    fetchBalance();

    // Listen for account changes and balance updates
    window.ethereum?.on("accountsChanged", fetchBalance);
    window.ethereum?.on("chainChanged", fetchBalance);

    return () => {
      window.ethereum?.removeListener("accountsChanged", fetchBalance);
      window.ethereum?.removeListener("chainChanged", fetchBalance);
    };
  }, []);

  return (
    <div>
      {balance !== null ? (
        <p>{balance.slice(0, 5)} ETH</p>
      ) : (
        <p
          style={{
            display: "none",
          }}
        >
          Wallet not connected.
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default WalletBalance;
