import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../(pages)/api";

// Function to fetch available rooms from the smart contract
export async function fetchAvailableRooms() {
  if (!window.ethereum) {
    console.error("MetaMask is not installed.");
    return [];
  }

  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
    const rooms = await contract.getAvailableRooms(); // Fetch available rooms

    return rooms.map((room) => room.toString()); // Convert BigNumbers to strings
  } catch (error) {
    console.error("Error fetching rooms:", error);
    return [];
  }
}
