// Home Page
import React from 'react';
import Link from 'next/link';
import Header from './components/Header';

const HomePage = () => (
  <div>
    <Header />

    <h1>Taking you to the best places</h1>
    
    <h2>
      <Link href="/bookRoom">
        <button>Book Room</button>
      </Link>

      <Link href="/checkRoomStatus">
        <button>Check Room Status</button>
      </Link>

      <Link href="/checkOut">
        <button>Check Out</button>
      </Link>
    </h2>
    


    {/* <BookingForm />

    <CheckStatusForm /> */}

  </div>
);

export default HomePage;
