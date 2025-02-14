"use client"
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../(pages)/api";

export default function RecentTransactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        async function fetchTransactions() {
            if (!window.ethereum) return;
            const provider = new ethers.BrowserProvider(window.ethereum);
            const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
            
            try {
                const txHistory =  await contract.getTransactionHistory();
                console.log(txHistory);
                
                const formattedTxs = txHistory.map(tx => ({
                    user: tx.user,
                    roomNumber: Number(tx.roomNumber),
                    timestamp: new Date(Number(tx.timestamp) * 1000).toLocaleString(),
                    action: tx.action,
                    txHash: tx.txHash
                }));

                console.log(formattedTxs);
                setTransactions(formattedTxs);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        }

        fetchTransactions();

        if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
            
            contract.on("action", (roomNumber, user, event) => {
                const newTx = {
                    user: user,
                    roomNumber: Number(roomNumber),
                    timestamp: new Date().toLocaleString(),
                    action: action,
                    txHash: event.transactionHash
                };
                setTransactions(prev => [newTx, ...prev]); // Add new transaction to the top
            });

            return () => {
                contract.removeAllListeners("action");
            };
        }
    }, []);

    return (
        <div>
            <div className="p-4">
            <h2 className="text-lg mb-4">Recent Transactions</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">USER</th>
                            <th className="border p-2">ROOM NUMBER</th>
                            <th className="border p-2">TIMESTAMP</th>
                            <th className="border p-2">ACTION</th>
                            <th className="border p-2">HASH</th>
                            <th className="border p-2">DOWNLOAD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="text-center p-4">No transactions found</td>
                            </tr>
                        ) : (
                            transactions.map((tx, index) => (
                                <tr key={index} className="border text-center">
                                    <td className="border p-2">{`${tx.user.slice(0, 6)}...${tx.user.slice(-4)}`}</td>
                                    <td className="border p-2">{tx.roomNumber}</td>
                                    <td className="border p-2">{tx.timestamp}</td>
                                    <td className="border p-2">{tx.action}</td>
                                    <td className="border p-2">{`${tx.txHash.slice(0, 6)}...${tx.txHash.slice(-4)}`}</td>
                                    <td className="border p-2">
                                        <button className="bg-black text-white px-4 py-1 rounded">Download</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}
