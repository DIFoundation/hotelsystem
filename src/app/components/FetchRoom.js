import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../(pages)/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

export async function fetchAvailableRooms() {
  if (!window.ethereum) {
    console.log("MetaMask is not installed.");
    toast.error("MetaMask is not installed.");
    return [];
  }

  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      provider
    );
    const rooms = await contract.getAvailableRoom();

    return rooms.map((room) => room.toString()); // Convert BigNumbers to strings
  } catch (error) {
    console.error("Error fetching rooms:", error);
    return [];
  }
}
