export const CONTRACT_ADDRESS = "0xec5A77c5E6aC8f275CFb27d3970e3D96f411dFaf";
export const CONTRACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "roomNumber",
				"type": "uint256"
			}
		],
		"name": "autoCheckOut",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "roomNumber",
				"type": "uint256"
			}
		],
		"name": "checkIn",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "roomNumber",
				"type": "uint256"
			}
		],
		"name": "checkOut",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "roomNumber",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "occupant",
				"type": "address"
			}
		],
		"name": "CheckIn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "roomNumber",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "occupant",
				"type": "address"
			}
		],
		"name": "CheckOut",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Withdraw",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "CHECK_OUT_TIME",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "roomNumber",
				"type": "uint256"
			}
		],
		"name": "getRoomStatus",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ROOM_PRICE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rooms",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isOccupied",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "occupant",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "checkInTime",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];