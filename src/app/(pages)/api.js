export const CONTRACT_ADDRESS = "0x94766448920032f9Cb892e277731F77164512B66";
export const CONTRACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_roomNumber",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_fullName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_daysToStay",
				"type": "uint256"
			}
		],
		"name": "checkIn",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
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
				"indexed": false,
				"internalType": "address",
				"name": "bookedBy",
				"type": "address"
			}
		],
		"name": "RoomBooked",
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
				"indexed": false,
				"internalType": "address",
				"name": "checkedOutBy",
				"type": "address"
			}
		],
		"name": "RoomCheckedOut",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "getAvailableRoom",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MAX_DAYS",
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
		"inputs": [],
		"name": "PRICE_PER_DAY",
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
				"internalType": "uint256",
				"name": "roomNumber",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isAvailable",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "guestName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "daysToStay",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalAmountPaid",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "bookedBy",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];