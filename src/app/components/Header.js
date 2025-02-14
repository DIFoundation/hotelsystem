import React from 'react';
import WalletButton from './WalletButton';
import Link from 'next/link';
import Balance from './Balance';

const Header = () => (
  <header >
    
    <div className='absolute top-6 left-6 flex items-center space-x-2'>
      <Link href="/#">
        <div className="w-6 h-6 bg-yellow-500 clip-triangle"></div>
        <h1 className='text-white text-xl font-bold'>KYOBI TRAVEL</h1>
      </Link>
    </div>
    
    <WalletButton />
  </header>
);

export default Header;
