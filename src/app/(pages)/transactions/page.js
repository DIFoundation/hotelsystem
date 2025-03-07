"use client"
import { useState, useEffect } from "react";
import { CONTRACT_ADDRESS } from "../api";

const smartContractAddress = CONTRACT_ADDRESS;

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(
          `https://test.xfiscan.com/address/${smartContractAddress}`
        );

        console.log(`raw transactions from ${smartContractAddress} are ${response}`);
        
        const data = await response.json();

        if (data.status === "1") {
          setTransactions(data.result);
        } else {
          setError("No transactions found.");
        }
      } catch (err) {
        setError("Error fetching transactions.");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Transaction History</h2>

        {loading && <p className="text-gray-500">Loading transactions...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && transactions.length === 0 && (
          <p className="text-gray-500">No transactions available.</p>
        )}

        {!loading && transactions.length > 0 && (
          <ul className="space-y-4">
            {transactions.map((tx) => (
              <li key={tx.hash} className="p-4 border rounded-lg bg-gray-50">
                <p><strong>From:</strong> {tx.from}</p>
                <p><strong>To:</strong> {tx.to}</p>
                <p><strong>Amount:</strong> {tx.value / 1e18} XFI</p>
                <p><strong>Tx Hash:</strong> 
                  <a 
                    href={`https://xfiscan.com/tx/${tx.hash}`} 
                    className="text-blue-500 hover:underline" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tx.hash.slice(0, 10)}...
                  </a>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;
