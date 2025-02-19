# KYOBI HOTEL: An Hotel Management System

## Overview
The **KYOBI HOTEL** is a web-based application designed to streamline hotel operations, including room bookings/reservations, customer management, and payments. This system offers a user-friendly interface for both hotel customers, enhancing the efficiency of hotel management.

## Live Demo
Visit the live website here: [Hotel Management System](https://hotelsystem0.vercel.app/)

## Features
### 1. **User Authentication**
   - Secure user login and registration
   - Role-based access (Admin, Customer, Staff)

### 2. **Hotel Room Management**
   - View available rooms with details
   - Filter rooms price based on numbers of days to spend

### 3. **Reservation System**
   - Online booking system for customers
   - Booking confirmation and tracking

### 4. **Payment Integration**
   - Secure payment gateway for online transactions
   - Invoice generation for bookings

### 5. **Customer Dashboard**
   - View booking history
   - Manage profile and payment details


## Technologies Used
The Hotel Management System is built using modern web technologies:

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Solidity
- **Hosting:** Vercel (Frontend)
- **Authentication:** Firebase/Auth0
- **Payment Processing:** Stripe/PayPal

## Installation and Setup
To run the project locally, follow these steps:

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/hotel-management-system.git
   cd hotel-management-system
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Setup Environment Variables:**
   Create a `.env` file and configure the following variables:
   ```env
   DATABASE_URL=mongodb+srv://your-db-url
   JWT_SECRET=your-secret-key
   STRIPE_SECRET_KEY=your-stripe-key
   ```

4. **Run the Backend:**
   ```bash
   npm run server
   ```

5. **Run the Frontend:**
   ```bash
   npm start
   ```

6. **Access the Application:**
   Open `http://localhost:3000` in your browser.

## Deployment
- **Frontend:** Deployed on Vercel.
- **Backend:** Hosted on Render/Heroku.
- **Database:** MongoDB Atlas for cloud storage.

## Contributing
We welcome contributions! Follow these steps to contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Submit a Pull Request

## License
This project is licensed under the **MIT License**.

## Contact
For support or inquiries, contact:
- Email: support@hotelsystem.com
- GitHub: [Your GitHub Profile](https://github.com/your-username)

---

Thank you for using the Hotel Management System!

